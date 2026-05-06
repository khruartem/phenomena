import type { FC } from "react";

import { TextUI } from "../text";
import { ContactLink } from "../../contact-link";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./contacts-ot.module.css";

export const ContactsOtUI: FC = () => {
  const { isMobile } = useMedia();

  return (
    <div className={styles["contacts-ot"]} style={{ gap: isMobile ? 8 : 20 }}>
      <TextUI typography={Typography.Text_Onest_400_20} color={Colors.White50}>
        {"Свяжитесь с нами"}
      </TextUI>
      <div className={styles["contacts-ot__list"]} style={{ gap: isMobile ? 0 : 8 }}>
        <ContactLink type={"phone"} contact={"8 (916) 756-95-05"} />
        <ContactLink type={"email"} contact={"otkterr@gmail.com"} />
      </div>
    </div>
  );
};
