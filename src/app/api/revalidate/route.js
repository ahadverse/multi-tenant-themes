import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { secret, site } = await request.json();

  // সিকিউরিটি চেক
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (site) {
    revalidateTag(`tenant-${site}`); // ক্যাশ ক্লিয়ার হলো
    return NextResponse.json({ revalidated: true });
  }

  return NextResponse.json({ message: "Site name missing" }, { status: 400 });
}
