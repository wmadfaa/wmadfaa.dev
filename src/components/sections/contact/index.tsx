// i18next-extract-mark-ns-start contact
import { Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { Container } from "../../base";
import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";

interface IProps {
  contactSlicePrimary: Queries.PrismicHomepageDataBodyContactsPrimary;
  contacts: readonly Queries.PrismicHomepageDataBodyContactsItem[];
  working_hours: string;
}

function Contact({ contactSlicePrimary, contacts, working_hours }: IProps) {
  return (
    <Container elementType="section" className="w-full min-h-screen flex flex-col py-44 gap-y-20">
      <div className="max-w-md space-y-9">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold capitalize">
            <Trans>Contact</Trans>
          </h1>
          <p className="text-sm text-start">
            <Trans>
              Ready to bring your project to life? Let's talk! Reach out to me today for a free consultation and let's
              discuss your project needs together.
            </Trans>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-44">
        <ContactForm />
        <ContactsList contacts={contacts} working_hours={working_hours} />
      </div>
    </Container>
  );
}

export default Contact;
