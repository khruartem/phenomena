import type { FC } from "react";
import { TextUI } from "../text";
import type { TPersonInfoUIProps } from "./types";
import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";
import { Icon } from "../../icon";
import { PersonPositionUI } from "../person-position";

export const PersonInfoUI: FC<TPersonInfoUIProps> = ({ info }) => {
  const { character, actor, position, icon } = info;

  return (
    <div>
      <TextUI
        typography={Typography.Text_KharkivTone_400_22}
        color={Colors.Badge}
      >
        {character}
      </TextUI>
      <TextUI
        typography={Typography.Text_KharkivTone_400_16}
        color={Colors.White100}
      >
        {actor}
      </TextUI>
      {position && icon && (
        <div>
          <Icon name={icon} width={28} height={28} />
          <PersonPositionUI position={position} />
        </div>
      )}
    </div>
  );
};
