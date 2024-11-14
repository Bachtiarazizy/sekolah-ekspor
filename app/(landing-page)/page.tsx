import { Button } from "@/components/ui/button";
import React from "react";
import TestimonialSlider from "../_components/testimonials";
import HeroSection from "../_components/hero-section";
import AboutSection from "../_components/about-section";
import WhyUsSection from "../_components/why-us-section";
import TrustedBySection from "../_components/trusted-by-section";
import Contact from "../_components/contact-section";
import FaqsSection from "../_components/faqs-section";
import { MarqueeLogo } from "../_components/marquee-logo";

export default function page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <MarqueeLogo />
      <TrustedBySection />
      <TestimonialSlider />
      <FaqsSection />
      <Contact />
    </main>
  );
}
