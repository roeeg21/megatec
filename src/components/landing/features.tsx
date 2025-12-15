import {
  FolderArchive,
  MessageSquareText,
  Workflow,
  History,
  DatabaseZap,
  Shapes,
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const features = [
  {
    icon: <FolderArchive className="h-8 w-8 text-primary" />,
    title: 'Document Management',
    description:
      'Centralize project documentation like drawings and contracts with full version control, metadata, and activity logs. Ensure everyone works from the right information.',
  },
  {
    icon: <MessageSquareText className="h-8 w-8 text-primary" />,
    title: 'Project Communications',
    description:
      'Replace email with structured, trackable correspondence. Manage RFIs, site instructions, and approval requests in a formal, auditable record.',
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: 'Workflow & Approval Management',
    description:
      'Automate reviews, approvals, and submittals with customizable workflows. Reduce manual coordination and ensure procedural compliance.',
  },
  {
    icon: <Shapes className="h-8 w-8 text-primary" />,
    title: 'Model Coordination (BIM)',
    description:
      'View, manage, and coordinate BIM files directly on the platform. Identify and manage clashes to streamline design and construction.',
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-primary" />,
    title: 'Field & Issue Management',
    description:
      'Capture and manage issues, inspections, and punch lists directly from the job site with our mobile apps, complete with photos and daily reports.',
  },
  {
    icon: <History className="h-8 w-8 text-primary" />,
    title: 'Audit Trail & Traceability',
    description:
      'Every action is recorded with a time stamp and author, creating an unalterable audit trail critical for accountability and dispute resolution.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="w-full py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            A New Standard for Project Information
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Megatec serves as a Common Data Environment (CDE) — a single, secure space where project information is stored, shared, and governed throughout the project lifecycle.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4 font-headline">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="px-6 pb-6">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
