import type { CSSProperties, FC } from "react";

import { FooterContainerUI } from "../footer-container";
import { ContactInfoUI } from "../contact-info";
import { Copyright } from "../../copyright";

import styles from "./footer.module.css";
import { useSetStyle } from "./useSetStyle";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const FooterUI: FC = () => {
  const footerStyle = useSetStyle();
  const copyrightStyle: CSSProperties = {
    textAlign: "start",
    paddingInlineStart: usePxToVw({
      large: 136,
      desktop: 87,
      laptop: 102,
      tablet: 86,
    }),
  };

  return (
    <footer className={styles.footer} style={footerStyle}>
      <FooterContainerUI>
        <ContactInfoUI />
      </FooterContainerUI>
      <Copyright style={copyrightStyle} />
    </footer>
  );
};
