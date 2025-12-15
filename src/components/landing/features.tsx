'use client';

import {
  FolderArchive,
  MessageSquareText,
  Workflow,
  History,
  HardHat,
  FileText,
  Briefcase,
  Users,
  Presentation
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

const features = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'ניהול מסמכים',
    description:
      'ריכוז כל מסמכי הפרויקט עם ניהול גרסאות מלא, הרשאות גישה מבוקרות, ותיעוד פעילות.',
  },
  {
    icon: <MessageSquareText className="h-8 w-8 text-primary" />,
    title: 'תקשורת פרויקטלית',
    description:
      'החלפת מיילים בתקשורת מובנית ומתועדת (RFIs, הוראות אתר) ליצירת רקורד אמין.',
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: 'ניהול תהליכים ואישורים',
    description:
      'אוטומציה של סבבי סקירה ואישור עם מעקב אחר זמנים ואחריות, להבטחת עמידה בנהלים.',
  },
  {
    icon: <Presentation className="h-8 w-8 text-primary" />,
    title: 'תיאום מודלים (BIM)',
    description:
      'צפייה, ניהול ותיאום של מודלי BIM ישירות בפלטפורמה, כולל זיהוי וניהול התנגשויות.',
  },
  {
    icon: <HardHat className="h-8 w-8 text-primary" />,
    title: 'ניהול שדה וליקויים',
    description:
      'לכידה וניהול של ליקויים, בדיקות ודוחות יומיים מהשטח באמצעות אפליקציה ייעודית.',
  },
  {
    icon: <History className="h-8 w-8 text-primary" />,
    title: 'תיעוד ובקרה (Audit Trail)',
    description:
      'כל פעולה מתועדת עם חותמת זמן ומשתמש, ליצירת נתיב ביקורת מלא למניעת מחלוקות.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="w-full py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            סטנדרט חדש לניהול מידע בפרויקטים
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Megatec משמשת כסביבת נתונים משותפת (CDE) - מרחב מאובטח אחד בו מידע הפרויקט מאוחסן, משותף ונשלט לאורך כל מחזור חייו.
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
              <CardContent>
                <CardDescription>
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
