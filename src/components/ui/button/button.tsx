import type { FC } from "react";
import clsx from "clsx";

import { Icon } from "../../icon";
import { TextUI } from "../text";

import type { TButtonUIProps } from "./types";

import { Typography } from "../../../utils/typography";

import styles from "./button.module.css";

export const ButtonUI: FC<TButtonUIProps> = ({ variant, children }) => {
  const typeOfChildrenIsString = typeof children === "string";

  return (
    <button
      className={clsx(
        styles.button,
        !typeOfChildrenIsString && styles.button_contented,
      )}
    >
      <Icon
        name={`segment-left-${variant}`}
        width={variant === "primary" ? 18 : 12}
        height={variant === "primary" ? 60 : 40}
        className={styles.button__segment_left}
      />
      <div
        className={clsx(
          styles.button__body,
          styles[`button__body_${variant}`],
          !typeOfChildrenIsString && [
            styles.button__body_contented,
            styles[`button__body_${variant}_contented`],
          ],
        )}
      >
        {typeOfChildrenIsString ? (
          <TextUI
            as={"span"}
            typography={Typography[`Text_${variant === "primary" ? 24 : 16}`]}
          >
            {children}
          </TextUI>
        ) : (
          children
        )}
      </div>
      <Icon
        name={`segment-right-${variant}`}
        width={variant === "primary" ? 18 : 12}
        height={variant === "primary" ? 60 : 40}
        className={
          variant === "primary" ? styles[`segment-right-${variant}`] : undefined
        }
      />
    </button>
  );
};
