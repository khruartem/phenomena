import type { FC } from "react";

import { SloganUI } from "../ui/slogan";

export const Slogan: FC = () => {
  const text = "VIVAT TERRA COGNITA!";

  return <SloganUI text={text} />;
};
