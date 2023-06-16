import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";
import { About, Projects, Testimonials } from "../components/sections/homepage";

interface IPageData {
  projects: Queries.PrismicProjectConnection;
  testimonials: Queries.PrismicTestimonialConnection;
}

const IndexPage: React.FC<PageProps<IPageData>> = ({ data }) => {
  return (
    <Layout>
      <About />
      <Projects projects={data.projects.edges} />
      <Testimonials testimonials={data.testimonials.edges} />
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
    projects: allPrismicProject(filter: { lang: { eq: $language } }) {
      edges {
        node {
          uid
          data {
            name
            short_description
            techstack {
              tech
            }
            url {
              url
            }
          }
        }
      }
    }
    testimonials: allPrismicTestimonial(filter: { lang: { eq: $language } }) {
      edges {
        node {
          uid
          data {
            client_job_title
            client_name
            company
            content
            rate
            client {
              url
            }
            url {
              url
            }
          }
        }
      }
    }
  }
`;
