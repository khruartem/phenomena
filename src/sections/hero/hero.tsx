import type { FC } from "react";

import { HeroUI } from "../ui/hero";

export const Hero: FC = () => {
  const externalLink = "";

  return <HeroUI externalLink={externalLink} />;
};
