import type { FC } from "react";

import { SectionUI } from "../section";
import { PartnersList } from "../../../components/partners-list";

import styles from "./partners.module.css";

export const PartnersUI: FC = () => {
  return (
    <SectionUI
      paddingedInline={false}
      className={styles.partners}
    >
      <PartnersList />
    </SectionUI>
  );
};
