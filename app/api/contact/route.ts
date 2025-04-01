import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY;
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;

  if (!hubspotApiKey || !portalId || !formGuid) {
    return NextResponse.json(
      { message: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hubspotApiKey}`,
        },
        body: JSON.stringify({
          fields: [
            {
              name: "firstname",
              value: body.firstname,
            },
            {
              name: "lastname",
              value: body.lastname,
            },
            {
              name: "email",
              value: body.email,
            },
            {
              name: "phone",
              value: body.phone,
            },
            {
              name: "message",
              value: body.message,
            },
          ],
          context: {
            pageUri:
              body.pageUri || "https://www.izzyslandscapingmn.com/contact",
            pageName: body.pageUri?.includes("/contact")
              ? "Contact Page"
              : "Website Form Submission",
          },
        }),
      }
    );

    const data = await hubspotResponse.json();

    if (!hubspotResponse.ok) {
      return NextResponse.json(
        { message: data.message || "HubSpot API error" },
        { status: hubspotResponse.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("HubSpot submission error:", error);
    return NextResponse.json(
      { message: "Error submitting to HubSpot" },
      { status: 500 }
    );
  }
}
