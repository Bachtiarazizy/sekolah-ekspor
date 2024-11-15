import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { isTeacher } from "@/lib/teacher";

const TeacherLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!userId || !isTeacher(userId)) {
    return redirect("/");
  }

  return <>{children}</>;
};

export default TeacherLayout;
