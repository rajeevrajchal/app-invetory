import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import AppRoute from "./routes/route.constant";

const publicRoute = ["/login", "/reset-password"];
export function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
  response.cookies.set("token", "hello next app", { httpOnly: true });

  const isUserExist = true;
  const token = request.cookies.get("token")?.value || "";

  if (
    isUserExist &&
    publicRoute.includes(request.nextUrl.pathname) &&
    token.length > 0
  ) {
    return NextResponse.redirect(new URL(AppRoute.home, request.url));
  }

  if (
    !isUserExist &&
    !publicRoute.includes(request.nextUrl.pathname) &&
    !token
  ) {
    return NextResponse.redirect(new URL(AppRoute.login, request.url));
  }

  return response;
}

export const config = {
  matcher: ["/", "/system/:path*", "/login", "/reset-password"],
};
