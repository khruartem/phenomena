import type { FC } from "react";

import { Icon } from "../../icon";
import { TextUI } from "../text";

import type { TPersonPositionUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./person-position.module.css";
import { Positions } from "../../../utils/positions";

export const PersonPositionUI: FC<TPersonPositionUIProps> = ({ position }) => {
  return (
    <div className={styles["person-info__extra"]}>
      <Icon name={position} width={28} height={28} color={Colors.White100} />
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
            {Positions[position]}
          </TextUI>
        </div>
        <Icon
          name={"person-position-segment-right"}
          width={12}
          height={28}
          className={styles["position__segment-right"]}
        />
      </div>
    </div>
  );
};
