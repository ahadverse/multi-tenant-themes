import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";

async function getTenants() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const file = await readFile(filePath, "utf-8");
  return JSON.parse(file);
}

export default async function RootPage() {
  const data = await getTenants();
  const tenants = data.tenants;

  const baseDomain = process.env.NEXT_PUBLIC_LIVEURL || "localhost:3000";

  const protocol = baseDomain.includes("localhost") ? "http" : "https";

  return (
    <div className='flex items-center justify-center min-h-screen font-sans'>
      <div className='text-center border p-10 rounded-xl shadow-sm'>
        <h1 className='text-2xl font-bold mb-2'>Multi-tenant Engine</h1>
        <p className='text-gray-600'>Please visit a tenant site:</p>

        <div className='mt-4 space-y-2'>
          {Object.entries(tenants).map(([slug, tenant]) => {
            const url = `${protocol}://${slug}.${baseDomain}`;

            return (
              <Link key={slug} href={url}>
                <code className='block bg-gray-100 p-2 rounded'>
                  {slug}.{baseDomain} — {tenant.business_name}
                </code>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
