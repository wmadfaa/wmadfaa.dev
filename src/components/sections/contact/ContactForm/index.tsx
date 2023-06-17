import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { Input, Textarea } from "../../../base";
import Select from "../../../base/select";

function ContactForm() {
  const { t } = useTranslation();
  return (
    <form className="space-y-8">
      <Input type="text" name="fullname" label={t("full name") as string} placeholder={t("Your Full Name") as string} />
      <Input type="email" name="email" label={t("Email") as string} placeholder={t("Your Email Address") as string} />
      <Select
        fullWidth
        label={t("Meeting Topic") as string}
        placeholder={t("Select your meeting topic") as string}
        options={[
          { value: "freelance", label: t("I'm looking for a freelancer | contractor") },
          { value: "company (full-time)", label: t("I'm looking for a full-time developer (employee)") },
          { value: "company (part-time)", label: t("I'm looking for a part-time developer (employee)") },
        ]}
      />
      <Textarea
        name="message"
        label={t("message") as string}
        placeholder={t("Tell me about your project.") as string}
        minRows={4}
      />
    </form>
  );
}

export default ContactForm;
