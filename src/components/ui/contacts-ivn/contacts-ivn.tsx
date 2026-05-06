import type { FC } from "react";

import { LogoUI } from "../logo";
import { Socials } from "../../socials";
import { TextUI } from "../text";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useMedia } from "../../../hooks/useMedia";
import { useSetStyle } from "./useSetStyle";

import styles from "./contacts-ivn.module.css";

export const ContactsIvnUI: FC = () => {
  const { isMobile } = useMedia();
  const divStyle = useSetStyle();

  return (
    <div className={styles["contacts-ivn"]} style={divStyle}>
      <div
        className={styles["contacts-ivn__top"]}
        style={{ gap: isMobile ? 12 : 20 }}
      >
        <LogoUI type="logo-full" />
        <TextUI
          as={"p"}
          typography={Typography.Text_Onest_500_14}
          color={Colors.White100}
        >
          {"«Журнал ИВН» — медиа о поисках "}
          <TextUI
            typography={"inherit"}
            color={"inherit"}
            className={styles["contacts-ivn__span"]}
          >
            {"феноменального"}
          </TextUI>
        </TextUI>
      </div>
      <Socials />
    </div>
  );
};
