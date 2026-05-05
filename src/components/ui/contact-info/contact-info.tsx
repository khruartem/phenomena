import type { FC } from "react";

import { ContactsIvnUI } from "../contacts-ivn";
import { ContactsOtUI } from "../contacts-ot";

import styles from "./contact-info.module.css";

export const ContactInfoUI: FC = () => {
  return (
    <div className={styles["contact-info"]}>
      <ContactsIvnUI />
      <ContactsOtUI />
    </div>
  );
};
