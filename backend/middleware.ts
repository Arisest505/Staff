import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get("authToken")?.value;


  if (request.nextUrl.pathname.startsWith("/admin") && !authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authToken && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
}

export const config = {
  matcher: ["/admin(.*)", "/login"],
};
