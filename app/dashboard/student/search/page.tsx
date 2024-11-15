import { getCourses } from "@/actions/get-courses";
import CoursesList from "@/components/course/course-list";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Categories from "./_components/categories";
import SearchInput from "@/components/search-input";
import { Suspense } from "react";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId: userId,
    ...searchParams,
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <Suspense fallback={<div>Loading search...</div>}>
          <SearchInput />
        </Suspense>
      </div>
      <Categories items={categories} />
      <div className="px-6 overflow-y-scroll bg-secondary mx-0 md:mx-auto py-6 rounded-none md:h-[calc(100vh-170px)] md:rounded-none md:rounded-bl-3xl md:mt-1 md:rounded-tl-xl container">
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;
