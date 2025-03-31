"use client";
import React, { useState } from "react";
import { contactAndSocials } from "@/lib/data";
import Link from "next/link";
import { useRecaptcha } from "@/hooks/useRecaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const { token, loading, refresh } = useRecaptcha("contact_form");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setSubmitStatus({
        type: "error",
        message: "reCAPTCHA not available. Please refresh the page.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // First verify the captcha
      const captchaResponse = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const captchaResult = await captchaResponse.json();

      if (!captchaResult.success) {
        setSubmitStatus({
          type: "error",
          message: "CAPTCHA verification failed. Please try again.",
        });
        return;
      }

      // If CAPTCHA verification succeeds, proceed with form submission
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
        // Get a fresh token for next submission
        refresh();
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Unexpected error occured contactForm", error);
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-6 w-full max-w-md bg-white p-8 rounded-xl shadow-lg transform transition-all hover:shadow-xl text-gray-600 py-5'
    >
      <h5 className='text-center text-gray-700'>Contact Us</h5>

      {submitStatus.type === "success" && (
        <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg'>
          {submitStatus.message}
        </div>
      )}

      {submitStatus.type === "error" && (
        <div className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg'>
          {submitStatus.message}
        </div>
      )}

      <div className='flex gap-2'>
        <div className='relative flex-1'>
          <label
            htmlFor='first-name-input'
            className='absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500'
          >
            First Name
          </label>
          <input
            type='text'
            name='firstname'
            id='first-name-input'
            value={formData.firstname}
            onChange={handleChange}
            className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106] focus:border-transparent transition-all'
            required
          />
        </div>
        <div className='relative flex-1'>
          <label
            htmlFor='last-name-input'
            className='absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500'
          >
            Last Name
          </label>
          <input
            type='text'
            name='lastname'
            id='last-name-input'
            value={formData.lastname}
            onChange={handleChange}
            className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106] focus:border-transparent transition-all'
            required
          />
        </div>
      </div>

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
          value={formData.phone}
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106] focus:border-transparent transition-all'
          required
        />
      </div>

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
          value={formData.message}
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8106] focus:border-transparent resize-none transition-all'
          rows={5}
          required
        />
      </div>

      <button
        type='submit'
        disabled={isSubmitting || loading || !token}
        className={`w-full bg-[#FF8106] hover:bg-[#FF9106] text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 ${
          isSubmitting || loading || !token
            ? "opacity-70 cursor-not-allowed"
            : ""
        }`}
      >
        {isSubmitting || loading ? "Sending..." : "Send Message"}
      </button>

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
