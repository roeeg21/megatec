// This file is intentionally left blank. 
// The AI summary functionality has been moved to src/components/landing/ai-summary-tool.tsx to use useFormState hook.
// This is a pattern to colocate server actions with the components that use them.
// To use a separate file for actions, you can define the action here and import it.
// For example:
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
