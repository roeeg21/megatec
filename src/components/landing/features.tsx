import {
  FolderArchive,
  MessageSquareText,
  Workflow,
  History,
  DatabaseZap,
  ShieldCheck,
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
    title: 'Document Management (CDE)',
    description:
      'Central repository with controlled access, automatic versioning, and metadata. Everyone works from the right information, every time.',
  },
  {
    icon: <MessageSquareText className="h-8 w-8 text-primary" />,
    title: 'Project Communications',
    description:
      'Structured RFIs, transmittals, and site instructions with full conversation history. Replace email chaos with formal, traceable communication.',
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: 'Workflow & Approval Management',
    description:
      'Configurable review and approval processes with deadline tracking and clear ownership of actions. Faster decisions, fewer bottlenecks.',
  },
  {
    icon: <History className="h-8 w-8 text-primary" />,
    title: 'Audit Trail & Records Management',
    description:
      'Time-stamped, immutable records with user and company attribution. Legal-grade defensibility and compliance.',
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-primary" />,
    title: 'Data Ownership & Neutrality',
    description:
      'The project owner retains full control and ownership of all project data, preserved long after project completion.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Security, Scale & Reliability',
    description:
      'Enterprise-grade security on Oracle Cloud Infrastructure, with role-based access control and proven scale for mega-projects.',
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
            ProjectWise eliminates information chaos, providing structural
            certainty for complex capital projects.
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
