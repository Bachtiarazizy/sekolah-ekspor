import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <div className="bg-zinc-50">
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Heading - center on mobile, left on large screens */}
        <h2 className="text-3xl font-bold text-gray-800 text-center lg:text-left">About Sekolah Ekspor</h2>

        {/* Paragraph - center on mobile, left on large screens with controlled width */}
        <p className="mt-4 text-gray-600 text-center lg:text-left mx-auto lg:mx-0 max-w-screen-md">
          Our Export School is dedicated to empowering Indonesian youth with the skills, knowledge, and mindset to thrive in the global marketplace. By combining practical training with innovative export strategies, we aim to foster a new
          generation of Indonesian business leaders, positioning Indonesia as a formidable player in the world economy by 2045. Join us on a journey to success, innovation, and global impact.
        </p>

        {/* Button container - center on mobile, left on large screens */}
        <div className="mt-12 flex justify-center lg:justify-start">
          <Link href="/about">
            <Button>Learn More</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
