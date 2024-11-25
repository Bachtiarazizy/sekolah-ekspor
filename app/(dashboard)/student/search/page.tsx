// SearchPage.tsx
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
    title?: string;
    categoryId?: string;
  };
}

// Create a client component for the search results
const SearchResults = async ({ userId, searchParams }: { userId: string; searchParams: SearchPageProps["searchParams"] }) => {
  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return <CoursesList items={courses} />;
};

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

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <Categories items={categories} />
      <div className="px-6 overflow-y-scroll bg-secondary mx-0 md:mx-auto py-6 rounded-none md:h-[calc(100vh-170px)] md:rounded-none md:rounded-bl-3xl md:mt-1 md:rounded-tl-xl container">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          }
        >
          <SearchResults userId={userId} searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
};

export default SearchPage;
