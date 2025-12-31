import { getTenantConfig } from "../../../lib/tenant-service";
import { notFound } from "next/navigation";

export default async function TenantLayout({ params, children }) {
  const resolvedParams = await params;
  const config = await getTenantConfig(resolvedParams.site);
  if (!config) notFound();

  return (
    <div
      style={{
        "--primary": config.theme_config.primary_color,
        "--secondary": config.theme_config.secondary_color,
      }}
    >
      {children}
    </div>
  );
}
