import type { FC } from "react";

import { SectionUI } from "../section";
import { ButtonUI } from "../../../components/ui/button";

import { useContainerStyle } from "./useContainerStyle";
import { useButtonsStyle } from "./useButtonsStyle";

import styles from "./graphic.module.css";

export const GraphicUI: FC = () => {
  const containerStyle = useContainerStyle();
  const buttonsStyle = useButtonsStyle();

  return (
    <SectionUI id="graphic">
      <div className={styles.graphic__container} style={containerStyle}>
        <div className={styles.graphic__buttons} style={buttonsStyle}>
          <ButtonUI variant={"secondary"} onClick={() => {}}>
            {"Участвовать в комиссии"}
          </ButtonUI>
          <ButtonUI variant={"ghost"} onClick={() => {}}>
            {"Поддержать ИВН"}
          </ButtonUI>
        </div>
      </div>
    </SectionUI>
  );
};
