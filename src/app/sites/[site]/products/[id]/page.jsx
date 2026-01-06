import ThemeResolver from "../../../../../components/ThemeResolver";
import { getTenantConfig } from "../../../../../lib/tenant-service";
import React from "react";

export default async function ProductDetails({ params }) {
  const { site } = await params;
  const config = await getTenantConfig(site);
  if (!config) notFound();

  return (
    <div>
      <ThemeResolver
        themeId={config.theme_id}
        pageType='PRODUCTDETAILS'
        data={config}
      />
    </div>
  );
}
