
'use client';

import { PlayCircle } from 'lucide-react';

export const VideoPromo = () => {
  return (
    <section id="video-promo" className="w-full py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            <PlayCircle className="mb-2 mr-2 inline-block h-8 w-8 text-primary" />
            צפו ב-Aconex בפעולה
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            גלו כיצד Aconex מחברת בין צוותים, תהליכים ומידע כדי לספק פרויקטים מהר יותר ועם פחות סיכונים.
          </p>
        </div>
        <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-lg shadow-xl" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            src="https://www.youtube.com/embed/QI__VEFXcLE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
