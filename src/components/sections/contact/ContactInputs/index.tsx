import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import { useRef } from "react";

import { Input, Textarea } from "../../../base";
import Select from "../../../base/select";

function ContactInputs() {
  const subjectInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  return (
    <div className="space-y-8">
      <Input
        required
        type="text"
        name="fullname"
        label={t("full name") as string}
        placeholder={t("Your Full Name") as string}
      />
      <Input
        required
        type="email"
        name="email"
        label={t("Email") as string}
        placeholder={t("Your Email Address") as string}
      />
      <Select
        required
        fullWidth
        label={t("Meeting Subject") as string}
        placeholder={t("Select your meeting Subject") as string}
        options={[
          { value: "freelance", label: t("I'm looking for a freelancer | contractor") },
          { value: "company (full-time)", label: t("I'm looking for a full-time developer (employee)") },
          { value: "company (part-time)", label: t("I'm looking for a part-time developer (employee)") },
        ]}
        onChange={(newValue) => {
          subjectInputRef.current?.setAttribute("value", newValue!.value);
        }}
      />
      <input ref={subjectInputRef} type="hidden" name="subject" className="hidden" />
      <Textarea
        name="message"
        label={t("message") as string}
        placeholder={t("Tell me about your project.") as string}
        minRows={4}
      />
      <input type="hidden" name="_gotcha" className="hidden" />
    </div>
  );
}

export default ContactInputs;
