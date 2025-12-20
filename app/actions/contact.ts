'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

const validateForm = (data: ContactFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Validate name
  if (!data.name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }

  // Validate email
  if (!data.email.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.push({ field: 'email', message: 'Please enter a valid email address' });
    }
  }

  // Validate message
  if (!data.message.trim()) {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  }

  return errors;
};

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    // Validate
    const validationErrors = validateForm(formData);
    if (validationErrors.length > 0) {
      return {
        success: false,
        errors: validationErrors,
      };
    }

    // Create Supabase client
    const supabase = await createClient();

    // Insert into database
    const { error: insertError } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          created_at: new Date().toISOString(),
        },
      ]);

    if (insertError) {
      console.error('Database insert error:', insertError);
      return {
        success: false,
        message: 'Failed to send message. Please try again.',
      };
    }

    // Send email notification
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'baines.blanton@uga.edu',
        subject: `New Contact Form Submission from ${formData.name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>From:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!emailRes.ok) {
      console.warn('Email notification failed, but message was saved to database');
    }

    return {
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    };
  } catch (error) {
    console.error('Unexpected error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    };
  }
};
