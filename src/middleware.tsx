import { isEmpty } from "lodash";
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

  const user = request.cookies.get("user")?.value || "";

  if (!isEmpty(user) && publicRoute.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(AppRoute.home, request.url));
  }

  if (isEmpty(user) && !publicRoute.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(AppRoute.login, request.url));
  }

  return response;
}

export const config = {
  matcher: ["/", "/system/:path*", "/login", "/reset-password"],
};
