import type { FC } from "react";

import { ButtonUI } from "../button";
import { Icon } from "../../icon";

import type { TArrowUIProps } from "./types";

import { Colors } from "../../../utils/colors";

export const ArrowUI: FC<TArrowUIProps> = ({
  direction,
  onClick,
}) => {
  return (
    <ButtonUI variant={"ghost"} onClick={onClick}>
      <Icon
        name={`arrow-${direction}`}
        width={28}
        height={28}
        color={Colors.Fire}
      />
    </ButtonUI>
  );
};
