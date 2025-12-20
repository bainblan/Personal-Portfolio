'use client';

import { useState } from 'react';
import { submitContactForm } from '@/app/actions/contact';

interface FormError {
  field: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FormError[]>([]);

  const getFieldError = (field: string): string | undefined => {
    return fieldErrors.find((err) => err.field === field)?.message;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    setFieldErrors([]);

    const result = await submitContactForm(formData);

    if (result.success) {
      setSuccessMessage(result.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    } else {
      if (result.errors) {
        setFieldErrors(result.errors);
      } else {
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    }

    setIsLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error when user starts typing
    setFieldErrors((prev) => prev.filter((err) => err.field !== name));
  };

  return (
    <div
      id="contact"
      className="flex w-full justify-center items-center px-[126px] py-[135px] bg-[#B2B2B2]"
    >
      <div className="flex flex-col justify-between w-[786px]">
        <p className="text-black text-center text-[48px] font-bold w-full mb-[40px]">
          LET&apos;S CONNECT
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-[32px] gap-[20px] w-full"
        >
          {/* Name Field */}
          <div className="flex flex-col gap-[8px]">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isLoading}
              className={`bg-[#333c66] text-white px-[10px] py-[10px] rounded-[10px] w-full h-fit placeholder-white/63 disabled:opacity-50 ${
                getFieldError('name') ? 'border-2 border-red-500' : ''
              }`}
            />
            {getFieldError('name') && (
              <p className="text-red-500 text-[14px]">{getFieldError('name')}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-[8px]">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
              className={`bg-[#333c66] text-white px-[10px] py-[10px] rounded-[10px] w-full h-fit placeholder-white/63 disabled:opacity-50 ${
                getFieldError('email') ? 'border-2 border-red-500' : ''
              }`}
            />
            {getFieldError('email') && (
              <p className="text-red-500 text-[14px]">{getFieldError('email')}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-[8px]">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isLoading}
              className={`bg-[#333c66] text-white px-[10px] py-[10px] rounded-[10px] w-full h-[222px] placeholder-white/63 disabled:opacity-50 resize-none ${
                getFieldError('message') ? 'border-2 border-red-500' : ''
              }`}
            />
            {getFieldError('message') && (
              <p className="text-red-500 text-[14px]">{getFieldError('message')}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white px-[20px] py-[16px] text-black rounded-[10px] font-semibold disabled:opacity-50 hover:bg-gray-100 transition-colors"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-600 text-[24px] font-semibold">{successMessage}</p>
          )}

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-[24px] font-semibold">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}