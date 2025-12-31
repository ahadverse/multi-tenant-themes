import ThemeResolver from "../../../components/ThemeResolver";
import { getTenantConfig } from "../../../lib/tenant-service";
import { notFound } from "next/navigation";

export default async function TenantPage({ params }) {
  const { site } = await params;

  const config = await getTenantConfig(site);
  if (!config) return notFound();

  return (
    <main>
      <ThemeResolver themeId={config.theme_id} data={config.homepage_content} />
    </main>
  );
}
