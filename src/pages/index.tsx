import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/shared/layout";
import Hero from "../components/pages/home/hero";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
