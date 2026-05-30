import type { FC } from "react";

import { TextUI } from "../text";

import type { TGlowTitleTextUIProps } from "./types";

import { Typography } from "../../../utils/typography";

import { useTypography } from "./useTypography";

export const GlowTitleTextUI: FC<TGlowTitleTextUIProps> = ({ color }) => {
  const topTypography = useTypography("top"); 
  const bottomTypography = useTypography("bottom");
  
  return (
    <>
      <TextUI
        id="top"
        typography={Typography[topTypography]}
        color={color}
      >
        {"Институт внедрения навыков"}
      </TextUI>
      <TextUI
        id="bottom"
        typography={Typography[bottomTypography]}
      >
        {"ищет феноменов"}
      </TextUI>
    </>
  );
};
