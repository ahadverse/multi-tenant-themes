import Layout from "../theme-coffee/components/shared/Layout/Layout";
import BusinessBanner from "./components/widges/BusinessBanner";
import CategoryGrid from "./components/widges/CategoryGrid";
import Banner from "./components/widges/Hero";
import ProductGrid from "./components/widges/ProductsGrid";
import { getTenantConfig } from "../../../lib/tenant-service";
import Newsletter from "./components/widges/Newsletter";

export default async function HomePage({}) {
  const config = await getTenantConfig("coffee");
  if (!config) return notFound();
  return (
    <Layout>
      <Banner data={config} />
      <CategoryGrid />
      <ProductGrid title='Featured Roasts' count={10} />
      <BusinessBanner />
      <ProductGrid title='Brewing Equipment' count={10} />
      <Newsletter />
    </Layout>
  );
}
