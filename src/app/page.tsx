import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { RoleBasedValue } from '@/components/landing/role-based-value';
import { AiSummaryTool } from '@/components/landing/ai-summary-tool';
import { Contact } from '@/components/landing/contact';
import { Faq } from '@/components/landing/faq';
import { ScrollAnimation } from '@/components/landing/scroll-animation';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>
        <ScrollAnimation>
          <Features />
        </ScrollAnimation>
        <ScrollAnimation>
          <RoleBasedValue />
        </ScrollAnimation>
        <ScrollAnimation>
          <Faq />
        </ScrollAnimation>
        <ScrollAnimation>
          <AiSummaryTool />
        </ScrollAnimation>
        <ScrollAnimation>
          <Contact />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
