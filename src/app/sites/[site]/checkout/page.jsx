import ThemeResolver from "../../../../components/ThemeResolver";
import { getTenantConfig } from "../../../../lib/tenant-service";
import { notFound } from "next/navigation";

export default async function CheckoutPage({ params }) {
  const { site } = await params;
  const config = await getTenantConfig(site);
  if (!config) notFound();

  const checkoutData = {
    cartItems: [],
    steps: ["Details", "Shipping", "Payment"],
  };

  return (
    <ThemeResolver
      themeId={config.theme_id}
      pageType='CHECKOUT'
      data={checkoutData}
    />
  );
}
