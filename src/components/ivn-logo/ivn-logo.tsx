import type { FC } from "react";
import { HashLink } from "react-router-hash-link";

import { IVNLogoUI } from "../ui/ivn-logo";

import type { TIVNLogoProps } from "./types";

export const IVNLogo: FC<TIVNLogoProps> = (logoProps) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.location.hash = "/";
  };

  return (
    <HashLink to={"/"}>
      <IVNLogoUI {...logoProps} onClick={goToTop} />
    </HashLink>
  );
};
