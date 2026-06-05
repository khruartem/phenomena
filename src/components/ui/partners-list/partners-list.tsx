import type { FC } from "react";

import { PartnerUI } from "../partner/partner";

import type { TPartnersListUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./partners-list.module.css";

export const PartnersListUI: FC<TPartnersListUIProps> = ({ partners }) => {
  const partnersStyle = useStyle();

  return (
    <ul className={styles.partners__list} style={partnersStyle}>
      {partners.map((partner, index) => (
        <li key={index} className={styles["partners__list-item"]}>
          <PartnerUI {...partner} />
        </li>
      ))}
    </ul>
  );
};
