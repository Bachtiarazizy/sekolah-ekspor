import React from "react";
import HeroSection from "../_components/hero-section";
import AboutSection from "../_components/about-section";
import WhyUsSection from "../_components/why-us-section";
import Contact from "../_components/contact-section";
import FaqsSection from "../_components/faqs-section";
import { MarqueeLogo } from "../_components/marquee-logo";
import OurPrograms from "../_components/our-programs";
import BlogCards from "../_components/testimonials";

export default function page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <OurPrograms />
      <WhyUsSection />
      <MarqueeLogo />
      <BlogCards />
      <FaqsSection />
      <Contact />
    </main>
  );
}
