import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "./_components/data-table";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { columns } from "./_components/column";
import { auth } from "@clerk/nextjs/server";

const CoursesPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }

  const courses = await prisma.course.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <div className="p-6 md:p-12 bg-secondary/50 text-secondary-foreground min-h-[calc(100vh-80px)] md:rounded-tl-3xl">
        <div className="flex flex-col mb-8 gap-2">
          <h1 className="text-4xl font-bold">Your Courses</h1>
          <p className="text-muted-foreground">Here is list of all your courses</p>
        </div>
        <DataTable columns={columns} data={courses} />
      </div>
      <div className="p-6">
        <Link href="/dashboard/admin/create">
          <Button>New Course</Button>
        </Link>
      </div>
    </>
  );
};

export default CoursesPage;
