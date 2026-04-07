import type { FC } from "react";
import clsx from "clsx";

import { Icon } from "../../icon";
import { TextUI } from "../text";

import type { TButtonUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./button.module.css";

export const ButtonUI: FC<TButtonUIProps> = ({ variant, children }) => {
  return (
    <button className={styles.button}>
      <Icon
        name={`segment-left-${variant}`}
        width={variant === "primary" ? 18 : 12}
        height={variant === "primary" ? 60 : 40}
        className={styles.button__segment_left}
      />
      {typeof children === "string" ? (
        <TextUI
          as={"span"}
          typography={Typography[`Text_${variant === "primary" ? 24 : 16}`]}
          color={variant === "ghost" ? Colors.Fire : Colors.Dark100}
          className={clsx(
            styles.button__text,
            styles[`button__text_${variant}`],
          )}
        >
          {children}
        </TextUI>
      ) : (
        children
      )}
      <Icon
        name={`segment-right-${variant}`}
        width={variant === "primary" ? 18 : 12}
        height={variant === "primary" ? 60 : 40}
      />
    </button>
  );
};
