// i18next-extract-mark-ns-start contact
import { Link } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { Button, Container } from "../../base";
import ContactInputs from "./ContactInputs";
import ContactsList from "./ContactsList";
import ContactListItem from "./ContactsList/ContactListItem";

interface IProps {
  contactSlicePrimary: Queries.PrismicHomepageDataBodyContactsPrimary;
  contacts: readonly Queries.PrismicHomepageDataBodyContactsItem[];
  working_hours: string;
}

function Contact({ contactSlicePrimary, contacts, working_hours }: IProps) {
  const { t } = useTranslation();

  return (
    <Container
      id="contact"
      elementType="section"
      className="w-full min-h-screen flex flex-col py-44 gap-y-12 md:gap-y-20"
    >
      <div className="max-w-md space-y-9">
        <div className="space-y-4 md:space-y-5">
          <h1 className="text-2xl md:text-5xl font-bold capitalize">
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
      <form action="https://getform.io/f/535f399b-11c6-47cf-b23f-14dcdbfee3a5" method="POST">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-9">
          <ContactInputs />
          <ContactsList contacts={contacts} working_hours={working_hours} className="order-last lg:order-none" />
          <div className="space-y-9 mb-36 lg:mb-0">
            <Button type="submit" label={t("Book a meeting")} />
            <ContactListItem label={t("or call")}>
              <Link to={`tel:${contactSlicePrimary.phone_number}`} className="hover:underline">
                {contactSlicePrimary.phone_number}
              </Link>
            </ContactListItem>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Contact;
