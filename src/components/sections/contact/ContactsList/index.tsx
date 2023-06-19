// i18next-extract-mark-ns-start contact
import classNames from "classnames/dedupe";
import { Link } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import ContactListItem from "./ContactListItem";

interface IProps {
  contacts: readonly Queries.PrismicHomepageDataBodyContactsItem[];
  working_hours: string;
  className?: string;
}

function ContactsList({ className, contacts, working_hours }: IProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(className, "w-full h-full grid place-items-start lg:place-items-center")}>
      <h1 className="lg:hidden text-2xl font-bold capitalize mb-11">
        <Trans>Get in touch</Trans>
      </h1>
      <dl className="space-y-5">
        {contacts.map((contact) => (
          <ContactListItem key={contact.contact_type} label={contact.contact_type}>
            <Link to={contact.contact_url!.url!} target="_blank" className="hover:underline">
              {contact.contact_label}
            </Link>
          </ContactListItem>
        ))}
        <ContactListItem label={t("working hours")}>{working_hours}</ContactListItem>
      </dl>
    </div>
  );
}

export default ContactsList;
