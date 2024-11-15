import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } } // Remove chapterId as it's not needed
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await prisma.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });

    if (!course) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const hasPublishedChapter = course.chapters.some((chapter) => chapter.isPublished);

    // Check if required fields are missing OR if there are no published chapters
    if (
      !course.title ||
      !course.description ||
      !course.imageUrl ||
      !course.categoryId ||
      !hasPublishedChapter // Changed from hasPublishedChapter to !hasPublishedChapter
    ) {
      const missingFields = [];
      if (!course.title) missingFields.push("title");
      if (!course.description) missingFields.push("description");
      if (!course.imageUrl) missingFields.push("image");
      if (!course.categoryId) missingFields.push("category");
      if (!hasPublishedChapter) missingFields.push("at least one published chapter");

      return new NextResponse(`Missing required fields: ${missingFields.join(", ")}`, { status: 400 });
    }

    // Check if course has any chapters
    if (course.chapters.length === 0) {
      return new NextResponse("Course must have at least one chapter before publishing", { status: 400 });
    }

    const publishedCourse = await prisma.course.update({
      where: {
        id: params.courseId,
        userId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedCourse);
  } catch (error) {
    console.error("[COURSE_PUBLISH]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
