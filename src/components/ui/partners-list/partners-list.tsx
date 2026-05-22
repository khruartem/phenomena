import type { FC } from "react";
import { nanoid } from "nanoid";

import { PartnerUI } from "../partner/partner";

import type { TPartnersListUIProps } from "./types";

import { useGetStyle } from "./useGetStyle";

import styles from "./partners-list.module.css";

export const PartnersListUI: FC<TPartnersListUIProps> = ({ partners }) => {
  const ulStyle = useGetStyle();

  return (
    <ul className={styles.partners__list} style={ulStyle}>
      {partners.map((partner) => (
        <li key={nanoid()} className={styles["partners__list-item"]}>
          <PartnerUI {...partner} />
        </li>
      ))}
    </ul>
  );
};
