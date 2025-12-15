import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { RoleBasedValue } from '@/components/landing/role-based-value';
import { AiSummaryTool } from '@/components/landing/ai-summary-tool';
import { Contact } from '@/components/landing/contact';
import { Faq } from '@/components/landing/faq';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <RoleBasedValue />
        <Faq />
        <AiSummaryTool />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
