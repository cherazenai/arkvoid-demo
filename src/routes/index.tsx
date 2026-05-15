import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Questions } from "@/components/Questions";
import { Platform } from "@/components/Platform";
import { Audiences } from "@/components/Audiences";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ARKVOID — Trust Layer for Autonomous AI Agents" },
      { name: "description", content: "Cryptographic provenance for enterprise AI agents. Real-time monitoring, tamper-evident audit, and compliance reporting for autonomous AI." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <LogoMarquee />
      <Questions />
      <Platform />
      <Audiences />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
