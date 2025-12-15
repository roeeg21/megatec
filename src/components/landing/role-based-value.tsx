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
    title: 'יזם / בעלים',
    benefits: [
      'שקיפות מלאה וממשל תאגידי על כל הגורמים',
      'בעלות ארוכת טווח על כל נתוני הפרויקט',
      'הפחתת סיכונים ומזעור מחלוקות',
    ],
  },
  {
    value: 'manager',
    title: 'מנהל פרויקט',
    benefits: [
      'ריכוז תיאום הצוות ומעקב אחר לוחות זמנים',
      'בקרה ואוטומציה של תהליכים קריטיים',
      'זיהוי ופתרון צווארי בקבוק במהירות',
    ],
  },
  {
    value: 'contractor',
    title: 'קבלן',
    benefits: [
      'עבודה תמידית מהמסמכים והשרטוטים העדכניים ביותר',
      'קבלת הנחיות ואישורים ברורים ורשמיים',
      'הגשה ומעקב קלים אחר בקשות למידע (RFIs) והגשות',
    ],
  },
  {
    value: 'consultant',
    title: 'יועץ / מתכנן',
    benefits: [
      'הבטחת בקרת גרסאות תכנון קפדנית',
      'שמירה על עקיבות מלאה של סקירות ומשובים',
      'שיתוף פעולה מאובטח עם כל צוותי הפרויקט',
    ],
  },
  {
    value: 'legal',
    title: 'תביעות / משפטי',
    benefits: [
      'גישה לנתיב ביקורת (audit trail) בלתי ניתן לשינוי',
      'איסוף ראיות עם חותמות זמן לכל אירוע',
      'בניית היסטוריית פרויקט מלאה וניתנת להגנה משפטית',
    ],
  },
  {
    value: 'it',
    title: 'מערכות מידע',
    benefits: [
      'הבטחת אבטחה וממשל ברמה ארגונית',
      'הבטחת סקיילביליות של הפלטפורמה למגה-פרויקטים',
      'אינטגרציה עם מערכות קיימות באמצעות API',
    ],
  },
];

export const RoleBasedValue = () => {
  return (
    <section className="w-full bg-background py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            מגוון לכל תפקיד בפרויקט
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            מהיזם ועד לקבלן, Aconex מספקת חוויה מותאמת אישית שמציפה את מה שהכי חשוב לך.
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
                            הערך עבור {role.title}
                          </CardTitle>
                          <CardDescription className="pt-2">
                            עם Aconex, תוכל להתמקד באחריות הליבה שלך בביטחון.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 pt-6">
                          <ul className="space-y-4">
                            {role.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start">
                                <Check className="ml-3 h-6 w-6 flex-shrink-0 text-primary" />
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
