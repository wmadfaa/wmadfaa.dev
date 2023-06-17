// i18next-extract-mark-ns-start contact
import { Link } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { Container } from "../../base";

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
      <div className="grid grid-cols-2">
        <div></div>
        <div className="w-full h-full grid place-items-center">
          <dl className="space-y-5">
            {contacts.map((contact) => (
              <div className="space-y-1.5">
                <dt className="text-base font-bold capitalize">{contact.contact_type}</dt>
                <dd className="text-sm font-normal hover:underline">
                  <Link to={contact.contact_url!.url!} target="_blank">
                    {contact.contact_label}
                  </Link>
                </dd>
              </div>
            ))}
            <div className="space-y-1.5">
              <dt className="text-base font-bold capitalize">working hours</dt>
              <dd className="text-sm font-normal">{working_hours}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
