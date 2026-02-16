import type { FC } from "react";

import logoSVG from "../../assets/icons/logo.svg";
import { LogoUI } from "../ui/logo";

export const Logo: FC = () => {
  const logo = logoSVG;

  return <LogoUI src={logo} />;
};
