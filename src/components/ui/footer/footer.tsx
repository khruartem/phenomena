import type { FC } from "react";

import { ContactInfoUI } from "../contact-info";
import { Copyright } from "../../copyright";

import styles from "./footer.module.css";

export const FooterUI: FC = () => {
  return (
    <footer className={styles.footer}>
      <ContactInfoUI />
      <Copyright />
    </footer>
  );
};
