import React from "react";

export default function FaqsSection() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto  text-start">
        <h2 className="text-3xl font-bold sm:text-4xl">Frequently Asked Questions (FAQs)</h2>

        <p className="mt-4">Have Questions? We’ve Got Answers</p>
      </div>
      <div className="space-y-4 mt-4">
        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">What is GlobalSkill Academy?</h2>

            <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            GlobalSkill Academy is a skill development program created by Indonesian students abroad, aimed at equipping young talents with the necessary skills for high-demand fields such as export-import, digital marketing, investment,
            and more.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">Who can join GlobalSkill Academy?</h2>

            <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            The program is open to all Indonesian youth who are eager to enhance their skills and prepare for future career opportunities. Whether you're a student, fresh graduate, or professional looking to upskill, GlobalSkill Academy
            offers something for everyone.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">What kind of programs does GlobalSkill Academy offer?</h2>

            <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <ul className="mt-4 px-4 leading-relaxed text-gray-700">
            We offer a range of programs including:
            <li>Export-Import Training</li>
            <li>Digital Marketing Workshops</li>
            <li>Investment and Financial Management Training</li>
          </ul>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">How can I join a program at GlobalSkill Academy?</h2>

            <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Simply visit our Registration Page and sign up for the program you're interested in. After registration, you’ll receive all the necessary details about the program schedule and requirements.
          </p>
        </details>
      </div>
    </div>
  );
}
