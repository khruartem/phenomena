import type { FC } from "react";

import { Partners } from "../../../sections/partners";
import { FooterContainerUI } from "../footer-container";
import { ContactInfoUI } from "../contact-info";
import { Copyright } from "../../copyright";

import { useFooterStyle } from "./useFooterStyle";
import { useCopyrightStyle } from "./useCopyrightStyle";

import styles from "./footer.module.css";

export const FooterUI: FC = () => {
  const footerStyle = useFooterStyle();
  const copyrightStyle = useCopyrightStyle();

  return (
    <footer className={styles.footer} style={footerStyle}>
      <Partners />
      <FooterContainerUI>
        <ContactInfoUI />
      </FooterContainerUI>
      <Copyright className={styles.copiright_footer} style={copyrightStyle} />
    </footer>
  );
};
