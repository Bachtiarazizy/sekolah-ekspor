import React from "react";

const BlogCards = () => {
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mb-10">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">VWhat They Say About Us</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">Real Experiences, Real Impact Hear from those who have experienced the transformative power of GlobalSkill Academy:</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a className="group block rounded-xl focus:outline-none" href="#">
          <div className="aspect-w-4 aspect-h-3">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
            GlobalSkill Academy has provided me with invaluable skills that are crucial for my career.
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">— Rina, Digital Marketing Trainee</p>
          <button className="mt-4 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Read More</button>
        </a>

        <a className="group block rounded-xl focus:outline-none" href="#">
          <div className="aspect-w-4 aspect-h-3">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
            As an international student, it’s been great to connect with other Indonesians and collaborate on real-world projects.
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">— Andi, Export-Import Program Participant</p>
          <button className="mt-4 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Read More</button>
        </a>

        <a className="group block rounded-xl focus:outline-none" href="#">
          <div className="aspect-w-4 aspect-h-3">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
            I never realized how powerful financial management and investment skills could be until I joined the Investment Training at GlobalSkill Academy.
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">— Budi, Investment Trainee</p>
          <button className="mt-4 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Read More</button>
        </a>
      </div>
    </div>
  );
};

export default BlogCards;
