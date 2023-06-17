import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";
import { About, Contact, Projects, Testimonials } from "../components/sections/homepage";

interface IPageData {
  projects: Queries.PrismicProjectConnection;
  testimonials: Queries.PrismicTestimonialConnection;
  homepage: Queries.PrismicHomepage;
  about: Queries.PrismicHomepage;
  contact: Queries.PrismicHomepage;
}

const IndexPage: React.FC<PageProps<IPageData>> = ({ data }) => {
  const aboutSlicePrimary = data.about.data.body[0].primary as Queries.PrismicHomepageDataBodyAboutPrimary;
  const contactSlice = data.contact.data.body[1] as Queries.PrismicHomepageDataBodyContacts;
  const contactSlicePrimary = contactSlice.primary;
  const contacts = contactSlice.items;

  return (
    <Layout githubUrl={data.homepage.data.github!.url!} cvUrl={data.homepage.data.cv!.url!}>
      <About fullName={aboutSlicePrimary.fullname!} overview={aboutSlicePrimary.overview!.text!} />
      <Projects projects={data.projects.edges} />
      <Testimonials testimonials={data.testimonials.edges} />
      <Contact
        contacts={contacts}
        contactSlicePrimary={contactSlicePrimary}
        working_hours={data.homepage.data.working_hours!}
      />
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
    homepage: prismicHomepage(lang: { eq: $language }) {
      data {
        working_hours
        cv {
          url
        }
        github {
          url
        }
      }
    }
    about: prismicHomepage(lang: { eq: $language }) {
      data {
        body {
          ... on PrismicHomepageDataBodyAbout {
            slice_type
            primary {
              fullname
              overview {
                text
              }
            }
          }
        }
      }
    }
    contact: prismicHomepage(lang: { eq: $language }) {
      data {
        body {
          ... on PrismicHomepageDataBodyContacts {
            slice_type
            primary {
              office_location
              phone_number
            }
            items {
              contact_label
              contact_type
              contact_url {
                url
              }
            }
          }
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
