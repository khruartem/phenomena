import type { FC } from "react";
import { Icon } from "../../icon";

import styles from "./person-position.module.css";
import { TextUI } from "../text";
import { Typography } from "../../../utils/typography";
import type { TPersonPositionUIProps } from "./types";
import { Colors } from "../../../utils/colors";

export const PersonPositionUI: FC<TPersonPositionUIProps> = ({ position }) => {
  return (
    <div className={styles.position}>
      <Icon
        name={"person-position-segment-left"}
        width={12}
        height={28}
        className={styles["position__segment-left"]}
      />
      <div className={styles.position__body}>
        <TextUI
          as={"span"}
          typography={Typography.Text_Onest_500_14}
          color={Colors.Dark100}
        >
          {position}
        </TextUI>
      </div>
      <Icon
        name={"person-position-segment-right"}
        width={12}
        height={28}
        className={styles["position__segment-right"]}
      />
    </div>
  );
};
