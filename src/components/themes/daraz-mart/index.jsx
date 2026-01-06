import React from "react";
import Layout from "../daraz-mart/components/shared/Layout/Layout";
import { getTenantConfig } from "../../../lib/tenant-service";
import FlashSale from "./components/widgets/FlashSale";
import ShopByCategory from "./components/widgets/ShopByCategory";
import BusinessTrustCards from "./components/widgets/BusinessTrustCards";
import ProductGrid from "./components/widgets/ProductGrid";

const HomePage = async () => {
  const config = await getTenantConfig("daraz-mart");

  if (!config) return notFound();

  return (
    <Layout>
      <FlashSale data={config} />
      <ShopByCategory data={config} />
      <ProductGrid data={config} sectionType={"flash_deals"} />
      <ProductGrid data={config} sectionType={"just_for_you"} />
      <BusinessTrustCards data={config} />
    </Layout>
  );
};

export default HomePage;
