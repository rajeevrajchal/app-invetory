import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { checkAuth } from "./_actions/check-auth";

export async function GET(request: NextRequest) {
  const cookieStore = cookies();
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token" || "code");

  const redirectTo = request.nextUrl.clone();
  redirectTo.searchParams.delete("token" || "code");

  if (token) {
    const res = await checkAuth(token);
    if (res?.data?.user) {
      cookieStore.set("token", token);
      cookieStore.set("user", JSON.stringify(res?.data?.user));
      redirectTo.pathname = "/";
      return NextResponse.redirect(redirectTo);
    }
  }

  redirectTo.pathname = "/login";
  return NextResponse.redirect(redirectTo);
}
