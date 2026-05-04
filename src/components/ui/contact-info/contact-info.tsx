import type { FC } from "react";
import clsx from "clsx";

import { FooterContainerUI } from "../footer-container";
import { LogoUI } from "../logo";
import { Socials } from "../../socials";
import { TextUI } from "../text";
import { ContactLink } from "../../contact-link";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./contact-info.module.css";

export const ContactInfoUI: FC = () => {
  return (
    <FooterContainerUI>
      <div className={clsx(styles["contacts"], styles["contacts_ivn"])}>
        <LogoUI type="logo-full" />
        <Socials />
        <TextUI
          as={"p"}
          typography={Typography.Text_Onest_500_14}
          color={Colors.White100}
        >
          {"«Журнал ИВН» — медиа о поисках "}
          <TextUI
            typography={"inherit"}
            color={"inherit"}
            className={styles["contacts_ivn__span"]}
          >
            {"феноменального"}
          </TextUI>
        </TextUI>
      </div>
      <div className={clsx(styles["contacts"], styles["contacts_ot"])}>
        <ContactLink type={"phone"} contact={"8 (916) 756-95-05"} />
        <ContactLink type={"email"} contact={"otkterr@gmail.com"} />
      </div>
    </FooterContainerUI>
  );
};
