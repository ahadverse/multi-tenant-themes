import React from "react";
import Layout from "../nexatech/components/shared/Layout/Layout";
import { getTenantConfig } from "../../../lib/tenant-service";
import Hero from "./components/widgets/Hero";
import { Portfolio } from "./components/widgets/Portfolio";
import { Process } from "./components/widgets/Process";
import { Services } from "./components/widgets/Services";
import { About } from "./components/widgets/About";

const HomePage = async () => {
  const config = await getTenantConfig("nexatech");

  if (!config) return notFound();

  return (
    <Layout>
      <Hero data={config} />
      <About data={config} />
      <Portfolio data={config} />
      <Process data={config} />
      <Services data={config} />
    </Layout>
  );
};

export default HomePage;
