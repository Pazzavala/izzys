"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { contactAndSocials } from "@/lib/data";
import Link from "next/link";
import Button from "../ui/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Function to format phone number
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, "");

    // Apply formatting based on the length of the cleaned input
    if (cleaned.length <= 3) {
      return `(${cleaned}`;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else if (cleaned.length <= 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} - ${cleaned.slice(
        6
      )}`;
    } else {
      // Limit to 10 digits
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} - ${cleaned.slice(
        6,
        10
      )}`;
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Apply phone number formatting if the field is 'phone'
    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData({
        ...formData,
        [name]: formattedPhone,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-6 w-full max-w-md bg-white p-8 rounded-xl shadow-lg transform transition-all hover:shadow-xl text-gray-600 py-5'
    >
      <h2 className='text-center text-gray-700 font-black text-xl'>
        Contact Us
      </h2>
      {/* Name Input */}
      <div className='relative'>
        <label
          htmlFor='name-input'
          className='absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500'
        >
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name-input'
          // placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106] focus:border-transparent transition-all'
          required
        />
      </div>

      {/* Email Input */}
      <div className='relative'>
        <label
          htmlFor='email-input'
          className='absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500'
        >
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email-input'
          // placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106] focus:border-transparent transition-all'
          required
        />
      </div>

      <div className='relative'>
        <label
          htmlFor='phone-input'
          className='absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500'
        >
          Phone
        </label>
        <input
          type='tel'
          name='phone'
          id='phone-input'
          // placeholder='Your Phone Number'
          value={formData.phone}
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106] focus:border-transparent transition-all'
          required
        />
      </div>

      {/* Message Textarea */}
      <div className='relative'>
        <label
          htmlFor='message-input'
          className='absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500'
        >
          Message
        </label>
        <textarea
          name='message'
          id='message-input'
          // placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106] focus:border-transparent resize-none transition-all'
          rows={5}
          required
        />
      </div>

      {/* Submit Button */}
      {/* <button
        type='submit'
        className='w-full bg-[#FF8106] hover:bg-[#FF9106] text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95'
      >
        Send Message
      </button> */}

      <Button
        link='submit'
        text='Send Message'
      />

      {/* Social Icons Section */}
      <div className='text-center mt-2'>
        <p className='text-gray-600 mb-7'>or directly at</p>
        <div className='flex justify-center gap-4'>
          {contactAndSocials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-[#FF8106] transition-colors'
              aria-label={social.name}
            >
              <social.icon className='w-6 h-6' />
            </Link>
          ))}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
