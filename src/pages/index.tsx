import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/shared/layout";
import Hero from "../components/pages/home/hero";
import Features from "../components/pages/home/features";
import Perks from "../components/pages/home/perks";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="absolute z-[-2] w-full">
        <Hero />
        <Features />
        <Perks />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
