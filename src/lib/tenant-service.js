import fs from "fs";
import path from "path";

export async function getTenantConfig(site) {
  // API রেডি হলে নিচের ৩ লাইন আন-কমেন্ট করবেন
  /*
  const res = await fetch(`https://api.yoursite.com/config/${site}`, { next: { tags: [`tenant-${site}`] } });
  if (res.ok) return await res.json();
  */

  try {
    const filePath = path.join(process.cwd(), "./public/data.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    return data.tenants[site] || null;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}
