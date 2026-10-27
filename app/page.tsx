import { Preloader } from "@/components/ui/Preloader";
import { Hero } from "@/components/sections/Hero";
import { PhilosophyBanner } from "@/components/sections/PhilosophyBanner";
import { Services } from "@/components/sections/Services";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { TechShowcase } from "@/components/sections/TechShowcase";
import { About } from "@/components/sections/About";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";
import { testimonials } from "@/content/testimonials";

export default function Home() {
  return (
    <>
      {/* 0. Initial Editorial Reveal Preloader */}
      <Preloader />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. The White Owl Standard Brand Philosophy & Infinite Marquee */}
      <PhilosophyBanner />

      {/* 3. Interactive Capabilities Stage & Collaboration Process */}
      <Services />

      {/* 4. Staggered 2-Column Editorial Portfolio Showcase */}
      <SelectedWork />

      {/* 5. Cinematic Technology & Architecture Showcase */}
      <TechShowcase />

      {/* 6. Proof Section — rendered only if real testimonials exist */}
      {testimonials.length > 0 && (
        <section id="proof">
          {/* Real testimonials will render here when provided */}
        </section>
      )}

      {/* 7. About Studio Section */}
      <About />

      {/* 8. Grand Final Call to Action */}
      <CtaBanner />

      {/* 9. Direct Inbound Inquiries & Working Contact Form */}
      <Contact />
    </>
  );
}
