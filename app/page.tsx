import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { testimonials } from "@/content/testimonials";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Selected Work Bento Showcase */}
      <SelectedWork />

      {/* 3. Services & Sequential Process */}
      <Services />

      {/* 4. Proof Section — automatically conditionally rendered only if real testimonials exist */}
      {testimonials.length > 0 && (
        <section id="proof">
          {/* Real testimonials will render here when provided */}
        </section>
      )}

      {/* 5. About Section */}
      <About />

      {/* 6. Contact Section */}
      <Contact />
    </>
  );
}
