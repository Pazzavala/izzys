import { NextApiRequest, NextApiResponse } from "next";

// <script charset="utf-8" type="text/javascript" src="//js-na2.hsforms.net/forms/embed/v2.js"></script>
// <script>
//   hbspt.forms.create({
//     portalId: "242248688",
//     formId: "e6b1cf5a-65e8-4de6-b27f-c1dd08f3b491",
//     region: "na2"
//   });
// </script>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;

  const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

  const data = {
    fields: [
      {
        name: "firstname",
        value: firstName,
      },
      {
        name: "lastname",
        value: lastName,
      },
      {
        name: "email",
        value: email,
      },
      {
        name: "phone",
        value: phone,
      },
      {
        name: "message",
        value: message,
      },
    ],
    context: {
      pageUri: "http://localhost:3000/", // Replace with your website URL
      pageName: "Custom Form Page",
    },
  };

  try {
    const response = await fetch(hubspotUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form to HubSpot");
    }

    const result = await response.json();
    return res
      .status(200)
      .json({ message: "Form submitted successfully!", result });
  } catch (error) {
    console.error("Error submitting to HubSpot:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
