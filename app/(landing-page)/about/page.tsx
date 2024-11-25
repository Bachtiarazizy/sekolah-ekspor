import React from "react";
import { Share, Heart, MessageCircle, Link, Twitter, Facebook, Linkedin } from "lucide-react";

interface Author {
  name: string;
  image: string;
  bio: string;
  articles: number;
  followers: string;
}

interface BlogPost {
  author: Author;
  date: string;
  readTime: string;
  title: string;
  content: React.ReactNode;
  likes: number;
  comments: number;
  tags: string[];
}

const BlogArticle = () => {
  const author: Author = {
    name: "Leyla Ludic",
    image: "/api/placeholder/320/320",
    bio: "Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.",
    articles: 56,
    followers: "1k+",
  };

  const post: BlogPost = {
    author,
    date: "Jan 18",
    readTime: "8 min read",
    title: "Announcing a free plan for small teams",
    likes: 875,
    comments: 16,
    tags: ["Plan", "Web development", "Free", "Team"],
    content: (
      <div className="space-y-5 md:space-y-8">
        <div className="space-y-3">
          <p className="text-lg text-gray-800 dark:text-neutral-200">
            At preline, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make
            better products, it also helps them grow.
          </p>
        </div>

        <p className="text-lg text-gray-800 dark:text-neutral-200">We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.</p>

        <figure>
          <img className="w-full object-cover rounded-xl" src="/api/placeholder/560/320" alt="Blog Image" />
          <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">A woman sitting at a table.</figcaption>
        </figure>

        <blockquote className="text-center p-4 sm:px-7">
          <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
            To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
          </p>
          <p className="mt-5 text-gray-800 dark:text-neutral-200">Nicole Grazioso</p>
        </blockquote>
      </div>
    ),
  };

  return (
    <>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          {/* Author section */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="shrink-0">
                <img className="h-12 w-12 rounded-full" src={author.image} alt="Author" />
              </div>

              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    <div className="inline-flex items-center">
                      <span className="font-semibold text-gray-800 dark:text-neutral-200">{author.name}</span>
                    </div>

                    <ul className="text-xs text-gray-500 dark:text-neutral-500">
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        {post.date}
                      </li>
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        {post.readTime}
                      </li>
                    </ul>
                  </div>

                  <button className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700">
                    <Twitter className="w-3.5 h-3.5" />
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">{post.title}</h2>
            </div>
            {post.content}

            {/* Tags */}
            <div>
              {post.tags.map((tag, index) => (
                <a
                  key={index}
                  className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  href="#"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Share Group */}
      <div className="sticky bottom-6 inset-x-0 text-center">
        <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
          <div className="flex items-center gap-x-1.5">
            <button className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
              <Heart className="w-4 h-4" />
              {post.likes}
            </button>

            <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600" />

            <button className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
              <MessageCircle className="w-4 h-4" />
              {post.comments}
            </button>

            <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600" />

            <button className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
              <Share className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
