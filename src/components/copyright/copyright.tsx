import type { FC } from "react";

import { CopyrightUI } from "../ui/copyright";

export const Copyright: FC = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return <CopyrightUI year={currentYear} />;
};
