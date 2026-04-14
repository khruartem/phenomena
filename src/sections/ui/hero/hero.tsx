import type { FC } from "react";
import { SectionUI } from "../../../components/ui/section";
import { TextUI } from "../../../components/ui/text";
import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./hero.module.css";
import { ButtonUI } from "../../../components/ui/button";
import { openExternalLink } from "../../../utils/navigation";
import type { THeroUIProps } from "./types";

export const HeroUI: FC<THeroUIProps> = ({ externalLink }) => {
  return (
    <SectionUI paddingedBlock={false} paddingedInline={false}>
      <TextUI
        as={"h2"}
        typography={Typography.Text_KharkivTone_400_24}
        color={Colors.White80}
        className={styles.hero__label}
      >{`Фантастический ${(<span className={styles.hero__label_decorated}>{"спектакль"}</span>)}`}</TextUI>
      <TextUI
        as={"h1"}
        typography={Typography.Text_Onest_400_20}
        color={Colors.White80}
      >{`${(<span className={styles.hero__title_colored}>{"Институт внедрения навыков (НИИВН)"}</span>)} — научная организация, занимающаяся поисками ${(<span className={styles.hero__title_decorated}>{"феноменальных"}</span>)} явлений.`}</TextUI>
      <ButtonUI
        variant={"primary"}
        onClick={() => openExternalLink(externalLink)}
      >
        {"Участвовать в комиссии"}
      </ButtonUI>
      <TextUI
        as={"p"}
        typography={Typography.Text_Onest_300_14}
        color={Colors.White80}
      >{`Открытые заседания называются ${(<span className={styles.hero__text_decorated}>{"«Феномены»"}</span>)}, вы можете посетить их в указанный день. Заседания проходят в формате спектакля, ${(<span className={styles.hero__text_colored}>{"продолжительность 2 часа с антрактом."}</span>)}`}</TextUI>
    </SectionUI>
  );
};
