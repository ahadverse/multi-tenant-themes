import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default function middleware(req) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host");

  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000";

  let tenantIdentifier = "";

  if (hostname === rootDomain || hostname === "www." + rootDomain) {
    return NextResponse.next();
  }

  // sub domain
  if (hostname.endsWith(`.${rootDomain}`)) {
    tenantIdentifier = hostname.replace(`.${rootDomain}`, "");
  }
  // custom domain
  else {
    tenantIdentifier = hostname;
  }

  if (!tenantIdentifier) return NextResponse.next();

  const path = url.pathname === "/" ? "" : url.pathname;
  const rewriteUrl = new URL(`/sites/${tenantIdentifier}${path}`, req.url);

  console.log(`Middleware: ${hostname} -> /sites/${tenantIdentifier}`);

  return NextResponse.rewrite(rewriteUrl);
}
