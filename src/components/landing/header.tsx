'use client';

import { Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-start space-x-2">
            <Button
                onClick={() =>
                document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
            >
                בקש הדגמה
            </Button>
        </div>
        <div className="mr-4 flex items-center">
          <span className="mr-2 font-bold font-headline">Megatec</span>
          <Building2 className="h-6 w-6 text-primary" />
        </div>
      </div>
    </header>
  );
};
