import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Mux from "@mux/mux-node";
import { NextResponse } from "next/server";

const muxClient = new Mux({
  tokenId: process.env.MUX_TOKEN_ID || "",
  tokenSecret: process.env.MUX_TOKEN_SECRET || "",
});

export async function DELETE(req: Request, { params }: { params: { courseId: string; chapterId: string } }) {
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

    for (const chapter of course.chapters) {
      if (chapter.muxData?.assetId) {
        await muxClient.video.assets.delete(chapter.muxData.assetId);
      }
    }

    const deletedCourse = await prisma.course.delete({
      where: {
        id: params.courseId,
      },
    });

    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.error("[COURSES_CHAPTERS_ID]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { courseId: string } }) {
  try {
    const { userId } = await auth();
    const { courseId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await prisma.course.update({
      where: {
        id: params.courseId,
        userId: userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES_ID]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
