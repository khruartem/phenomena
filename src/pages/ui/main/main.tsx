import type { FC } from "react";

import { Page } from "../../page";
import { Hero } from "../../../sections/hero";
import { About } from "../../../sections/about";
import { Persons } from "../../../sections/persons";
import { Gallery } from "../../../sections/gallery";

import type { TMainUIProps } from "./types";

export const MainUI: FC<TMainUIProps> = () => {
  return (
    <Page>
      <Hero />
      <About />
      <Persons />
      <Gallery />
    </Page>
  );
};
