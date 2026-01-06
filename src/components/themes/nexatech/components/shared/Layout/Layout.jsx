import React from "react";
import { getTenantConfig } from "../../../../../../lib/tenant-service";
import { notFound } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = async ({ children }) => {
  const config = await getTenantConfig("nexatech");
  if (!config) return notFound();

  return (
    <div
      style={{
        "font-family": config.theme_config.font_family,
      }}
    >
      <Header data={config} />
      {children}
      <Footer data={config} />
    </div>
  );
};

export default Layout;
