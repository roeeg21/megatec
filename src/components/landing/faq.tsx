'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    value: 'item-1',
    question: 'מהי סביבת נתונים משותפת (CDE)?',
    answer:
      'CDE הוא מאגר מידע מרכזי בענן שבו כל המידע על הפרויקט מאוחסן, נגיש ומנוהל על ידי משתתפים מורשים. הוא מאפשר גישה משותפת בזמן אמת למסמכים, מודלים ותכתובות, ומבטיח עקביות ומפחית את בידוד המידע.',
  },
  {
    value: 'item-2',
    question: 'מהם יתרונות השימוש בפלטפורמת Aconex?',
    answer:
      'היתרונות העיקריים כוללים יצירת מקור אמת יחיד לכל נתוני הפרויקט, שיפור שיתוף הפעולה בין ארגונים שונים, הפחתת סיכונים ומחלוקות באמצעות תיעוד בלתי ניתן לשינוי, הגברת היעילות עם תהליכי עבודה אוטומטיים, ומתן גישה מלאה למידע הפרויקט מכל מקום.',
  },
  {
    value: 'item-3',
    question: 'כיצד Aconex מטפלת באבטחה ובעלות על נתונים?',
    answer:
      'הפלטפורמה מתארחת בתשתית ענן ארגונית ומשתמשת בבקרת גישה מבוססת תפקידים כדי להבטיח שמשתמשים יראו רק מידע שאושר להם. כל ארגון שומר על בעלות ושליטה על הנתונים שלו, תוך יכולת לשתף מידע נבחר עם שותפים לפרויקט באופן מאובטח.',
  },
  {
    value: 'item-4',
    question: 'האם Aconex יכולה להתממשק עם מערכות אחרות?',
    answer:
      'כן, Aconex תוכננה להתממשק עם מערכות פרויקטים ארגוניות אחרות כמו כלי תזמון, מערכות ERP וכלי ניתוח. הדבר מתבצע באמצעות ממשקי API ותהליכי החלפת נתונים סטנדרטיים כדי לאפשר בקרות ודיווחים רחבים יותר על הפרויקט.',
  },
  {
    value: 'item-5',
    question: 'מהן יכולות המובייל עבור צוותי השטח?',
    answer:
      'צוותי שדה יכולים להשתמש באפליקציות מובייל כדי ללכוד ולנהל בעיות בנייה, לבצע בדיקות, לנהל רשימות ליקויים ולהגיש דוחות יומיים ישירות מאתר העבודה. האפליקציות תומכות בעדכונים בזמן אמת ובסנכרון לא מקוון.',
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="w-full bg-background py-20 sm:py-28">
      <div className="container mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            שאלות נפוצות
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            מצא תשובות לשאלות נפוצות על אופן פעולת Aconex וכיצד היא יכולה להועיל לפרויקטים שלך.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-16 w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger className="text-right font-headline text-lg">
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
