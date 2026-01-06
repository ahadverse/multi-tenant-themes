import React from "react";
import Layout from "./components/shared/Layout/Layout";
import Newsletter from "./components/widges/Newsletter";
import Hero from "./components/widges/Hero";
import CategoryGrid from "./components/widges/CategoryGrid";
import ProductGrid from "./components/widges/ProductGrid";
import BusinessBanner from "./components/widges/BusinessBanner";
import { getTenantConfig } from "../../../lib/tenant-service";

const HomePage = async () => {
  const config = await getTenantConfig("vibestore");

  if (!config) return notFound();
  return (
    <Layout>
      <Hero />
      <CategoryGrid />
      <ProductGrid title='Featured Roasts' count={10} config={config} />
      <BusinessBanner />
      <ProductGrid title='Brewing Equipment' count={10} config={config} />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;
