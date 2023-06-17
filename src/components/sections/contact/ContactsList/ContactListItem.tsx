import * as React from "react";

interface IProps {
  children: React.ReactNode;
  label: React.ReactNode;
}

function ContactListItem({ children, label }: IProps) {
  return (
    <div className="space-y-1.5">
      <dt className="text-base font-bold capitalize">{label}</dt>
      <dd className="text-sm font-normal">{children}</dd>
    </div>
  );
}

export default ContactListItem;
