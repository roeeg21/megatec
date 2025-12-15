'use server';

/**
 * @fileOverview Generates a role-based summary of project information.
 *
 * - generateRoleBasedSummary - A function that generates a summary document based on the selected role.
 * - GenerateRoleBasedSummaryInput - The input type for the generateRoleBasedSummary function.
 * - GenerateRoleBasedSummaryOutput - The return type for the generateRoleBasedSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRoleBasedSummaryInputSchema = z.object({
  role: z
    .string()
    .describe(
      'The role of the user (e.g., Project Owner, Contractor, Legal).'
    ),
  projectDocuments: z.string().describe('All project documents.'),
  projectCommunications: z
    .string()
    .describe('All project communications.'),
});

export type GenerateRoleBasedSummaryInput = z.infer<
  typeof GenerateRoleBasedSummaryInputSchema
>;

const GenerateRoleBasedSummaryOutputSchema = z.object({
  summary: z.string().describe('The generated summary document.'),
});

export type GenerateRoleBasedSummaryOutput = z.infer<
  typeof GenerateRoleBasedSummaryOutputSchema
>;

export async function generateRoleBasedSummary(
  input: GenerateRoleBasedSummaryInput
): Promise<GenerateRoleBasedSummaryOutput> {
  return generateRoleBasedSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRoleBasedSummaryPrompt',
  input: {schema: GenerateRoleBasedSummaryInputSchema},
  output: {schema: GenerateRoleBasedSummaryOutputSchema},
  prompt: `You are an AI assistant specializing in summarizing project documents and communications for specific roles.

  Given the following project documents and communications, generate a summary document highlighting the most relevant information for the role: {{{role}}}.

  Project Documents: {{{projectDocuments}}}
  Project Communications: {{{projectCommunications}}}

  The summary should be concise and focus on the key information that is most important for the specified role.`,
});

const generateRoleBasedSummaryFlow = ai.defineFlow(
  {
    name: 'generateRoleBasedSummaryFlow',
    inputSchema: GenerateRoleBasedSummaryInputSchema,
    outputSchema: GenerateRoleBasedSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
