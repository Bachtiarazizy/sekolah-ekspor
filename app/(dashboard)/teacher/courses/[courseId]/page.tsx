import { Action } from "@/app/(dashboard)/_components/actions";
import AttachmentForm from "@/app/(dashboard)/_components/attachment-form";
import CategoryForm from "@/app/(dashboard)/_components/category-form";
import ChaptersForm from "@/app/(dashboard)/_components/chapters-form";
import DescriptionForm from "@/app/(dashboard)/_components/desciption-form";
import ImageForm from "@/app/(dashboard)/_components/image-form";
import PriceForm from "@/app/(dashboard)/_components/price-form";
import TitleForm from "@/app/(dashboard)/_components/title-form";
import { Banner } from "@/components/ui/banner";
import { IconBadge } from "@/components/ui/icon.badge";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { CircleDollarSign, File, LayoutDashboard, ListCheck, ListChecks } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page({ params }: { params: { courseId: string } }) {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const course = await prisma.course.findUnique({
    where: {
      id: params.courseId,
      userId,
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [course.title, course.description, course.imageUrl, course.price, course.categoryId, course.chapters.some((chapter) => chapter.isPublished)];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields} / ${totalFields}) fields completed`;
  const completionPercentage = (completedFields / totalFields) * 100;

  const isCompleted = requiredFields.every(Boolean);

  return (
    <>
      {!course.isPublished && <Banner label="This course is not published. It will not be visible to students." />}
      <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Course setup</h1>
            <span className="text-sm text-slate-700">{completionText}</span>
          </div>
          <Action disabled={!isCompleted} courseId={params.courseId} isPublished={course.isPublished} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl"> Customize your course</h2>
            </div>

            <TitleForm initialData={course} courseId={course.id} />
            <DescriptionForm initialData={course} courseId={course.id} />
            <ImageForm initialData={course} courseId={course.id} />
            <CategoryForm initialData={course} courseId={course.id} options={categories.map((category) => ({ value: category.id, label: category.name }))} />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">Course chapters</h2>
              </div>
              <ChaptersForm initialData={course} courseId={course.id} />
            </div>
            <div>
              <div>
                <div className="flex items-center gap-x-2"></div>
                <IconBadge icon={CircleDollarSign} />
                <h2 className="text-xl">Course price</h2>
              </div>
              <PriceForm initialData={course} courseId={course.id} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={File} />
                <h2 className="text-xl">Resources & attachments</h2>
              </div>
              <AttachmentForm initialData={course} courseId={course.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
