import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import React from "react";

export default function WhyUsSection() {
  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us?</h2>

            <p className="mt-4">Why Our Export School is the Best Choice</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a className="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
              <CheckCircle />

              <h2 className="mt-4 text-xl font-bold">Expert Faculty:</h2>
              <p className="mt-1 text-sm">Learn from industry leaders and seasoned exporters.</p>
            </a>
            <a className="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
              <CheckCircle />

              <h2 className="mt-4 text-xl font-bold">Real-World Experience:</h2>
              <p className="mt-1 text-sm">Gain practical skills through internships, workshops, and hands-on projects.</p>
            </a>
            <a className="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
              <CheckCircle />

              <h2 className="mt-4 text-xl font-bold">Innovative Curriculum:</h2>
              <p className="mt-1 text-sm">Courses tailored to future export needs, including digital transformation, sustainable trade practices, and international market research.</p>
            </a>
            <a className="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
              <CheckCircle />

              <h2 className="mt-4 text-xl font-bold">Global Network:</h2>
              <p className="mt-1 text-sm">Connect with a network of exporters, industry experts, and alumni worldwide.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
