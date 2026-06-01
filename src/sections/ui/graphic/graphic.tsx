import type { FC } from "react";

import { SectionUI } from "../section";
import { GraphicTitleUI } from "../../../components/ui/graphic-title";
import { ButtonUI } from "../../../components/ui/button";

import { useSectionStyle } from "./useSectionStyle";
import { useContainerStyle } from "./useContainerStyle";
import { useButtonsStyle } from "./useButtonsStyle";

import styles from "./graphic.module.css";

export const GraphicUI: FC = () => {
  const sectionStyle = useSectionStyle();
  const containerStyle = useContainerStyle();
  const buttonsStyle = useButtonsStyle();

  return (
    <SectionUI id="graphic" style={sectionStyle}>
      <div className={styles.graphic__container} style={containerStyle}>
        <GraphicTitleUI />
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
