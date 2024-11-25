import React from "react";

interface IconBlock {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconBlocks: React.FC = () => {
  const iconBlocks: IconBlock[] = [
    {
      icon: (
        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Global Collaboration",
      description: "Join a global network of Indonesian students, fostering innovation and real-world solutions.",
    },
    {
      icon: (
        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg>
      ),
      title: "Future-Ready Skills",
      description: "Gain essential skills in high-demand industries, preparing you for tomorrow’s workforce.",
    },
    {
      icon: (
        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
      ),
      title: "Shaping Indonesia’s Future",
      description: "Contribute to building a stronger, more competitive Indonesia for 2045.",
    },
  ];

  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">Why Choose GlobalSkill Academy?</h2>
          <p className="mt-3 text-gray-800 dark:text-neutral-400">At GlobalSkill Academy, we offer a unique opportunity to build skills that are essential for success in the modern world. Here's why our program stands out:</p>
          <p className="mt-5">
            <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">
              Contact Us to learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          {iconBlocks.map((block, index) => (
            <div className="flex gap-x-5 sm:gap-x-8" key={index}>
              <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                {block.icon}
              </span>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">{block.title}</h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">{block.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconBlocks;
