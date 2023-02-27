import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/shared/layout";
import Hero from "../components/pages/home/hero";
import Features from "../components/pages/home/features";
import Perks from "../components/pages/home/perks";
import Guide from "../components/pages/home/guide";
import NewFeatures from "./../components/pages/home/new_features";
import Upgrade from "../components/pages/home/upgrade";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="absolute z-[-2] w-full">
        <Hero />
        <Features />
        <Perks />
        <Guide />
        <NewFeatures />
        <Upgrade />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
