import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getTenantConfig } from "../../../../../../lib/tenant-service";
import { notFound } from "next/navigation";

const Layout = async ({ children }) => {
  const config = await getTenantConfig("coffee");
  if (!config) return notFound();

  return (
    <div
      style={{
        "font-family": config.theme_config.font_family,
      }}
    >
      <Header config={config} />
      {children}
      <Footer config={config} />
    </div>
  );
};

export default Layout;
