import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form Data Submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 w-full max-w-md'
    >
      <input
        type='text'
        name='name'
        placeholder='Your Name'
        value={formData.name}
        onChange={handleChange}
        className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106]'
        required
      />
      <input
        type='email'
        name='email'
        placeholder='Your Email'
        value={formData.email}
        onChange={handleChange}
        className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106]'
        required
      />
      <textarea
        name='message'
        placeholder='Your Message'
        value={formData.message}
        onChange={handleChange}
        className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106] resize-none'
        rows={5}
        required
      />
      <button
        type='submit'
        className='w-full md:w-auto bg-[#FF8106] hover:bg-[#FF8106] text-white font-semibold py-3 px-6 rounded-lg transition-colors'
      >
        Send Messege
      </button>
    </form>
  );
};

export default ContactForm;
