import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import Seo from "../components/shared/seo";

import Layout from "../components/shared/layout";
import Hero from "../components/pages/home/hero";
import Features from "../components/pages/home/features";
import Perks from "../components/pages/home/perks";
import Guide from "../components/pages/home/guide";
import NewFeatures from "./../components/pages/home/new_features";
import Upgrade from "../components/pages/home/upgrade";
import Fomo from "../components/pages/home/fomo";
import Apps from "../components/pages/home/apps";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <Hero />
        <Features />
        <Perks />
        <Guide />
        <NewFeatures />
        <Upgrade />
        <Fomo />
        <Apps />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
