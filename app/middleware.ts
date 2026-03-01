import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname; // user ka url path nikalainey ka way
  // jab user login na ho tab public path per redirect karain
  const isPublic =
    path === "/login" || path === "/signup" || path === "/verifyemail"; // public paths
  // agr user already login ho too usey dubara login page show na ho...... is kelie token lena h ga
  //token ko cookies sey access karain gey
  const token = request.cookies.get("token")?.value || ""; // how to get token from cookies and get value
  // agr user login h or woo public path access karna chahta hai to access nai karney dena
  if (isPublic && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // ab agr public path and token bhi nai hai to hamain login page per move karana h ga... who visit oure website
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next(); // ✅ REQUIRED
}

// See "Matching Paths" below to learn more
export const config = {
  // my above logic kis kis page per chalni chahie wo page matcher main daal dain
  matcher: ["/", "/login", "/signup", "/profile/:path*"], // 🔥 protects all profile routes
};
