import type { FC } from "react";

import { Page } from "../../page";
import { Hero } from "../../../sections/hero";
import { About } from "../../../sections/about";
import { GlowTextUI } from "../../../components/ui/glow-text";
import { PersonUI } from "../../../components/ui/person";

import type { TMainUIProps } from "./types";

export const MainUI: FC<TMainUIProps> = () => {
  return (
    <Page>
      <Hero />
      <PersonUI
        variant={"right"}
        src={
          "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png"
        }
      />
      <About />
      <GlowTextUI>{"ищет феноменов"}</GlowTextUI>
    </Page>
  );
};
