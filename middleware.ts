import { middleware } from "@clerk/nextjs";

export default middleware({
  // Optional configuration
  publicRoutes: ["/", "/api/public"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
