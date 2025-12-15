import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    value: 'item-1',
    question: 'What is a Common Data Environment (CDE)?',
    answer:
      'A CDE is a single cloud-based repository where all project information is stored, accessed, and managed by authorized participants. It supports real-time, shared access to documents, models, and correspondence, enabling consistency and reducing data silos on large projects.',
  },
  {
    value: 'item-2',
    question: 'What are the benefits of using a platform like ProjectWise?',
    answer:
      'The main benefits include establishing a single source of truth for all project data, improving collaboration across different organizations, reducing risks and disputes through immutable records, increasing efficiency with automated workflows, and enabling full access to project information from anywhere via mobile and web.',
  },
  {
    value: 'item-3',
    question: 'How does ProjectWise handle security and data ownership?',
    answer:
      'The platform is hosted on enterprise-grade cloud infrastructure and uses role-based access control to ensure users only see approved information. Each organization retains ownership and control over its own data while being able to share selected information with project partners in a secure manner.',
  },
  {
    value: 'item-4',
    question: 'Can ProjectWise integrate with other systems?',
    answer:
      'Yes, ProjectWise is designed to integrate with other enterprise project systems such as scheduling, ERP, and analytics tools. This is accomplished via APIs and standardized data exchange processes to enable broader project controls and reporting.',
  },
  {
    value: 'item-5',
    question: 'What are the mobile capabilities for field teams?',
    answer:
      'Field teams can use mobile apps to capture and manage construction issues, conduct inspections, manage punch lists, and file daily reports directly from the job site. The apps support both real-time updates and offline synchronization for environments with poor connectivity.',
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="w-full bg-white py-20 sm:py-28">
      <div className="container max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Find answers to common questions about how ProjectWise works and how
            it can benefit your projects.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-16 w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger className="text-left font-headline text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
