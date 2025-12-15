'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { getSummary } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const initialState = {
  message: '',
  summary: null,
  errors: null,
};

const roles = [
  'Project Owner',
  'Project Manager',
  'Contractor',
  'Consultant',
  'Legal',
  'IT',
];

const exampleDocs = `
Project Charter v3.4
- Scope: New 45-story mixed-use tower.
- Budget: $450M
- Timeline: Q1 2025 - Q3 2028

Geotechnical Survey Report
- Soil composition: Clay, high water table.
- Recommendation: Deep pile foundations required.

Architectural Drawings A-101 to A-505 (rev 4)
- Contains full floor plans and elevations.
`;

const exampleComms = `
RFI-045: From General Contractor to Architect
- Question: Discrepancy in structural beam dimensions on drawing S-201 vs S-203.
- Response: Use S-203. S-201 is superseded.

Transmittal T-078: From Architect to All
- Attached: Revised MEP drawings (M-100 series). For information only.

Email Chain: "Urgent: Budget Impact of Foundation Changes"
- PM to Owner: Deep pile foundations will add $5.2M to budget and 2 weeks to schedule.
- Owner to PM: Approved. Issue change order immediately.
`;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Summary
        </>
      )}
    </Button>
  );
}

export function AiSummaryTool() {
  const [state, formAction] = useFormState(getSummary, initialState);
  const [role, setRole] = useState(roles[0]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.errors) {
       // Optionally show a toast for errors
    }
  }, [state]);

  return (
    <section className="w-full py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            <Sparkles className="mb-2 mr-2 inline-block h-8 w-8 text-accent" />
            AI-Powered Summaries
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our AI prepares a summary document that pulls only the most
            pertinent content based on your role. Spend less time reading and
            more time acting.
          </p>
        </div>

        <Card className="mt-16">
          <form ref={formRef} action={formAction}>
            <CardHeader>
              <CardTitle>Generate Your Role-Based Summary</CardTitle>
              <CardDescription>
                Select your role and provide the project data to see the AI in
                action.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="role">Select Your Role</Label>
                <Select name="role" value={role} onValueChange={setRole}>
                  <SelectTrigger className="w-full md:w-1/3">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="projectDocuments">Project Documents</Label>
                  <Textarea
                    id="projectDocuments"
                    name="projectDocuments"
                    placeholder="Paste project documents here..."
                    rows={10}
                    defaultValue={exampleDocs}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectCommunications">
                    Project Communications
                  </Label>
                  <Textarea
                    id="projectCommunications"
                    name="projectCommunications"
                    placeholder="Paste project communications here..."
                    rows={10}
                    defaultValue={exampleComms}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <SubmitButton />
              {state.summary && (
                <Card className="w-full bg-secondary">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sparkles className="mr-2 h-5 w-5 text-primary" />
                      AI Generated Summary for: {role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none text-foreground">
                      {state.summary.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
               {state.errors && (
                <div className="text-sm text-destructive">
                  <p>{state.message}</p>
                  <ul>
                    {Object.values(state.errors).flat().map((error, i) => (
                      <li key={i}>- {error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
