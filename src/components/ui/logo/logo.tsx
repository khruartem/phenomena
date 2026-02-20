import type { FC } from "react";
import clsx from "clsx";

import type { TLogoUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

export const LogoUI: FC<TLogoUIProps> = ({ src }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  return (
    <img
      src={src}
      alt="Logo"
      style={{
        marginBlockEnd: clsx(
          isLarge && "12.50vw",
          isDesktop && "12.59vw",
          isLaptop && "28.91vw",
          isTablet && "28.65vw",
          isMobile && "30vw",
        ),
      }}
    />
  );
};
