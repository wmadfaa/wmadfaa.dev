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
        placeholder={t("Select your meeting subject") as string}
        options={[
          
          {
            value: "job",
            label: t("Having a job opportunity for you")
          },
          {
            value: "consulting", 
            label: t("Consulting on a machine learning project")
          },
          { 
            value: "research", 
            label: t("Discussing research collaboration") 
          },
          {
            value: "speaking",
            label: t("Inviting you to speak at an event")
          }
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
