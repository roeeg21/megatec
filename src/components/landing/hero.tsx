'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Hero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full sm:min-h-[600px]">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container max-w-4xl">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            פלטפורמה אחת. מקור אמת אחד.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-200 md:text-xl">
          Megatec היא פלטפורמת ענן המרכזת את כל המידע, התקשורת והתהליכים של פרויקט הבנייה – בצורה מאובטחת, שקופה ובלתי ניתנת לשינוי, ומשמשת כמקור האמת היחיד לכלל המעורבים.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-4 gap-x-6 sm:flex-row">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <ArrowLeft className="ml-2 h-5 w-5" />
              בקש הדגמה
            </Button>
            <Button
              size="lg"
              variant="link"
              className="text-white"
              onClick={() =>
                document
                  .getElementById('features')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              למד עוד <span className="mr-2">&larr;</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
