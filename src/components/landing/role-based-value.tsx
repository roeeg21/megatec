'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

const roles = [
  {
    value: 'owner',
    title: 'Project Owner',
    benefits: [
      'Gain full visibility and governance across all parties',
      'Retain long-term ownership of all project data',
      'Reduce project risk and minimize disputes',
    ],
  },
  {
    value: 'manager',
    title: 'Project Manager',
    benefits: [
      'Centralize team coordination and track deadlines',
      'Control and automate critical workflows',
      'Identify and resolve bottlenecks faster',
    ],
  },
  {
    value: 'contractor',
    title: 'Contractor',
    benefits: [
      'Always work from the latest documents and drawings',
      'Get clear, formal instructions and approvals',
      'Easily submit and track RFIs and submittals',
    ],
  },
  {
    value: 'consultant',
    title: 'Consultant',
    benefits: [
      'Ensure strict design version control',
      'Maintain full traceability of reviews and feedback',
      'Collaborate securely with all project teams',
    ],
  },
  {
    value: 'legal',
    title: 'Legal / Claims',
    benefits: [
      'Access an immutable, unalterable audit trail',
      'Gather time-stamped evidence for any event',
      'Build a complete, defensible project history',
    ],
  },
  {
    value: 'it',
    title: 'IT / Digital',
    benefits: [
      'Ensure enterprise-grade security and governance',
      'Guarantee platform scalability for mega-projects',
      'Integrate with existing systems via APIs',
    ],
  },
];

export const RoleBasedValue = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Every Role on the Project
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From the owner to the contractor, ProjectWise provides a tailored
            experience that surfaces what matters most to you.
          </p>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="owner" className="w-full">
            <TabsList className="grid h-auto w-full grid-cols-2 flex-wrap sm:grid-cols-3 lg:grid-cols-6">
              {roles.map((role) => (
                <TabsTrigger key={role.value} value={role.value}>
                  {role.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {roles.map((role) => {
              const roleImage = PlaceHolderImages.find(
                (img) => img.id === `role-${role.value}`
              );
              return (
                <TabsContent key={role.value} value={role.value}>
                  <Card className="mt-6 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-6 md:p-8">
                        <CardHeader className="p-0">
                          <CardTitle className="font-headline text-2xl">
                            The Value for the {role.title}
                          </CardTitle>
                          <CardDescription className="pt-2">
                            With ProjectWise, you can focus on your core
                            responsibilities with confidence.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 pt-6">
                          <ul className="space-y-4">
                            {role.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start">
                                <Check className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>
                      <div className="relative min-h-[250px] md:min-h-0">
                        {roleImage && (
                          <Image
                            src={roleImage.imageUrl}
                            alt={roleImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={roleImage.imageHint}
                          />
                        )}
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
