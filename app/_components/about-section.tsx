import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <div className="bg-zinc-50">
      <section className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center ">About GlobalSkill Academy</h2>

        <p className="mt-4 text-gray-600 text-center  ">
          GlobalSkill Academy is a pioneering initiative created by Indonesian students abroad, united under the Indonesian Students Association Worldwide (PPI Dunia). Our mission is to empower young Indonesians with in-demand skills to
          thrive in the global arena and contribute to Indonesia's vision for 2045.
        </p>

        <div className="mt-12 flex justify-center">
          <Link href="/about">
            <Button>Learn More</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
