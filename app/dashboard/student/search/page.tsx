"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchInput from "@/components/search-input";
import CoursesList from "@/components/course/course-list";
import Categories from "./_components/categories";
import { getCourses } from "@/actions/get-courses";

interface ClientSearchPageProps {
  initialCategories: Category[];
  initialSearchParams: {
    title: string;
    categoryId: string;
  };
}

const ClientSearchPage = ({ initialCategories, initialSearchParams }: ClientSearchPageProps) => {
  const searchParams = useSearchParams();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);

      const updatedCourses = await getCourses({
        userId: auth().userId,
        title: searchParams.get("title") || initialSearchParams.title,
        categoryId: searchParams.get("categoryId") || initialSearchParams.categoryId,
      });

      setCourses(updatedCourses);
      setIsLoading(false);
    };

    fetchCourses();
  }, [searchParams]);

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <Categories items={initialCategories} />
      <div className="px-6 overflow-y-scroll bg-secondary mx-0 md:mx-auto py-6 rounded-none md:h-[calc(100vh-170px)] md:rounded-none md:rounded-bl-3xl md:mt-1 md:rounded-tl-xl container">
        {isLoading ? <p>Loading...</p> : <CoursesList items={courses} />}
      </div>
    </>
  );
};

export default ClientSearchPage;
