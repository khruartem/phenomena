import type { FC } from "react";

import { TextUI } from "../text";

import type { TContactLinkUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

export const ContactLinkUI: FC<TContactLinkUIProps> = ({
  type,
  link,
  contact,
}) => {
  return (
    <a href={link}>
      <TextUI
        typography={Typography.Text_KharkivTone_400_16}
        color={Colors.White100}
        style={{ textDecoration: type === "email" ? "underline" : undefined }}
      >
        {contact}
      </TextUI>
    </a>
  );
};
