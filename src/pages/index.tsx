import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";
import { About } from "../components/sections/homepage";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>wmadfaa</title>
    </>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
