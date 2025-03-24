import React from "react";

const HubSpotForm = () => {
  // Your HubSpot form URL - replace this with your actual form URL from HubSpot
  const hubspotFormUrl = `https://share-na2.hsforms.com/15rHPWmXoTeayf8HdCPO0kQ4088a8`;
  return (
    <div className='w-full max-w-2xl mx-auto rounded-2xl overflow-hidden'>
      <iframe
        src={hubspotFormUrl}
        width='100%'
        height='730'
        style={{ border: "none" }}
        title='Contact Form'
        className='w-full max-w-xl mx-auto px-2 md:px-4 bg-[#f3f8fb]'
      />
    </div>
  );
};

export default HubSpotForm;
