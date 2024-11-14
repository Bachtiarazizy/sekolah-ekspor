import React from "react";

export default function Contact() {
  return (
    <div>
      <section className="bg-primary">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl text-white font-bold md:text-3xl">Get in Touch</h2>

            <p className="hidden text-white sm:mt-4 sm:block">
              Ready to embark on your journey to becoming an export leader? Contact us today to learn more about our programs, admissions, and how you can be a part of Indonesia’s bright future in the export industry.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input type="email" placeholder="Email address" className="w-full rounded-md border-gray-200 bg-white p-3 text-white shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400" />
              </div>

              <button type="submit" className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto">
                <span className="text-sm font-medium"> Sign Up </span>

                <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
