import type { FC } from "react";

import { TextUI } from "../text";

import type { TSectionTitleUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useMedia } from "../../../hooks/useMedia";

export const SectionTitleUI: FC<TSectionTitleUIProps> = ({
  children,
  className,
  style,
}) => {
  const { isLarge, isMobile } = useMedia();

  return (
    <TextUI
      as={"h2"}
      typography={
        isMobile
          ? Typography.Text_KharkivTone_400_32
          : isLarge
            ? Typography.Digits_60
            : Typography.Digits_40
      }
      color={Colors.Badge}
      className={className}
      style={{ ...style }}
    >
      {children}
    </TextUI>
  );
};
