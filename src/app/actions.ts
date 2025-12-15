'use server';

import { generateRoleBasedSummary } from '@/ai/flows/generate-role-based-summary';
import { z } from 'zod';

const SummarySchema = z.object({
  role: z.string(),
  projectDocuments: z.string().min(50, 'Project documents section must be at least 50 characters long.'),
  projectCommunications: z.string().min(50, 'Project communications section must be at least 50 characters long.'),
});

export async function getSummary(prevState: any, formData: FormData) {
  const validatedFields = SummarySchema.safeParse({
    role: formData.get('role'),
    projectDocuments: formData.get('projectDocuments'),
    projectCommunications: formData.get('projectCommunications'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please provide more content for analysis.',
      errors: validatedFields.error.flatten().fieldErrors,
      summary: null,
    };
  }

  try {
    const result = await generateRoleBasedSummary(validatedFields.data);
    return {
      message: 'Summary generated successfully.',
      summary: result.summary,
      errors: null,
    };
  } catch (error) {
    console.error('Error generating summary:', error);
    return {
      message: 'An unexpected error occurred while generating the summary. Please try again later.',
      summary: null,
      errors: null,
    };
  }
}

const ContactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  workEmail: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company name is required'),
  role: z.string({ required_error: 'Please select a role.' }),
  country: z.string({ required_error: 'Please select a country.' }),
  projectSize: z.string().optional(),
  message: z.string().optional(),
});


export async function sendDemoRequest(prevState: any, formData: FormData) {
    const validatedFields = ContactFormSchema.safeParse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      workEmail: formData.get('workEmail'),
      company: formData.get('company'),
      role: formData.get('role'),
      country: formData.get('country'),
      projectSize: formData.get('projectSize'),
      message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check the fields and try again.',
      success: false,
    };
  }
  
  // TODO: Add CAPTCHA validation here.
  // 1. Get the CAPTCHA token from the form data.
  // 2. Send the token to your CAPTCHA provider for verification.
  // 3. If verification fails, return an error.

  try {
    // This is where you would integrate with an email sending service
    // like SendGrid, Resend, or Nodemailer.
    // For now, we will just log the data to the console.
    
    console.log('New Demo Request:');
    console.log(validatedFields.data);
    console.log('Simulating sending email to your-email@example.com...');

    // Example of how you might send an email with a service:
    //
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-special-email@example.com',
    //   subject: 'New Aconex Demo Request',
    //   html: `<p>You have a new demo request from ${validatedFields.data.firstName}...</p>`
    // });
    
    return {
      message: 'Your demo request has been sent successfully.',
      success: true,
    };

  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      success: false,
    };
  }
}
