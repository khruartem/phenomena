import type { FC } from "react";

import { CopyrightUI } from "../ui/copyright";

import type { TCopyrightProps } from "./types";

export const Copyright: FC<TCopyrightProps> = ({ style }) => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return <CopyrightUI year={currentYear} style={style} />;
};
