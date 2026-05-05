import type { FC } from "react";

import { ContactLink } from "../../contact-link";

import styles from "./contacts-ot.module.css";
import { TextUI } from "../text";
import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

export const ContactsOtUI: FC = () => {
  return (
    <div className={styles["contacts-ot"]}>
      <TextUI typography={Typography.Text_Onest_400_20} color={Colors.White50}>
        {"Свяжитесь с нами"}
      </TextUI>
      <div className={styles["contacts-ot__list"]}>
        <ContactLink type={"phone"} contact={"8 (916) 756-95-05"} />
        <ContactLink type={"email"} contact={"otkterr@gmail.com"} />
      </div>
    </div>
  );
};
