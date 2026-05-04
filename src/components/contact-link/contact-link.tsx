import type { FC } from "react";
import clsx from "clsx";

import { ContactLinkUI } from "../ui/contact-link";

import type { TContactLinkProps } from "./types";

export const ContactLink: FC<TContactLinkProps> = ({ type, contact }) => {
  const prefix = clsx(
    type === "email" && "mailto:",
    type === "phone" && "tel:",
  );
  const contactEdited =
    type === "phone"
      ? contact.replace(/[-\s()]/g, "").replace(/^./, "+7")
      : contact;
  const link = prefix + contactEdited;

  console.log(contactEdited);

  return <ContactLinkUI type={type} link={link} contact={contact} />;
};
