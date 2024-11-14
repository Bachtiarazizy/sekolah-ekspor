import React from "react";

export default function TrustedBySection() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Statistics at a Glance</h2>

        <p className="mt-4 text-gray-500 sm:text-xl">Numbers tell a story of success, growth, and dedication. Here’s a look at some key metrics that define our Export School’s journey and impact:</p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Graduates Shaping Indonesia’s Export Industry</dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">2,500+</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Partnerships with Global Export Businesses</dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">120+</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Practical Workshops and Real-World Projects Annually</dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">30+</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Student Satisfaction Rate</dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">85%</dd>
        </div>
      </dl>
    </div>
  );
}
