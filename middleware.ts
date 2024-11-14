// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/api/trpc/public/(.*)", "/api/webhooks/(.*)"]);

export default clerkMiddleware((auth, req: NextRequest) => {
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Optional: Add custom authorization logic here
  // Example: Check for specific roles or permissions
  // const { userId, sessionId } = auth;

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
