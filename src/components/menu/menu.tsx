import type { FC } from "react";

import { MenuUI } from "../ui/menu";

import type { TMenuItem } from "../../utils/types";

export const Menu: FC = () => {
  const items: TMenuItem[] = [
    { label: "О спектакле", to: "#about" },
    { label: "Действующие лица", to: "#persons" },
    // { label: "Фотоотчеты", to: "#gallery" },
  ];

  return <MenuUI items={items} />;
};
