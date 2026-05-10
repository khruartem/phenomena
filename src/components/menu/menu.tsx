import type { FC } from "react";

import { MenuUI } from "../ui/menu";

import type { TMenuItem } from "../../utils/types";

import { useNavigationContext } from "../../hooks/useNavigationContext";
import { useMedia } from "../../hooks/useMedia";

export const Menu: FC = () => {
  const { isLaptop, isTablet, isMobile } = useMedia();
  const { onOpen } = useNavigationContext();

  const handleClick = isLaptop || isTablet || isMobile ? onOpen : undefined;

  const items: TMenuItem[] = [
    { label: "О спектакле", to: "#about", onClick: handleClick },
    { label: "Действующие лица", to: "#persons", onClick: handleClick },
    // { label: "Фотоотчеты", to: "#gallery" },
  ];

  return <MenuUI items={items} />;
};
