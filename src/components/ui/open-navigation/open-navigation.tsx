import type { FC } from "react";

import { ButtonUI } from "../button";
import { Icon } from "../../icon";

import type { TOpenNavigationUIProps } from "./types";

export const OpenNavigationUI: FC<TOpenNavigationUIProps> = ({
  opened,
  onOpen,
}) => {
  return (
    <ButtonUI variant={"ghost"} onClick={onOpen}>
      <Icon name={opened ? "close" : "burger"} width={28} height={28} />
    </ButtonUI>
  );
};
