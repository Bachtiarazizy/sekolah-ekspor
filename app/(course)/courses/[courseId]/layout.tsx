import getProgress from "@/actions/get-progress";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import React from "react";
import CourseNavbar from "./_components/course-navbar";
import CourseSidebar from "./_components/course-sidebar";

const layout = async ({ children, params }: { children: React.ReactNode; params: { courseId: string } }) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }

  const course = await prisma.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            },
          },
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!course) {
    return redirect("/");
  }

  const progressCount = await getProgress(userId, course.id);

  return (
    <div className="h-full">
      <div className="h-[80px] lg:pl-[350px] inset-y-0 w-full z-50">
        <CourseNavbar course={course} progressCount={progressCount} />
      </div>
      <div className="hidden lg:flex h-full w-[350px] inset-y-0 z-50 fixed top-0 left-0">
        <CourseSidebar course={course} progressCount={progressCount} />
      </div>
      <main className="lg:pl-[350px] h-full">{children}</main>
    </div>
  );
};

export default layout;
