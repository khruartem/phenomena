import type { FC } from "react";

import { AboutUI } from "../ui/about";

export const About: FC = () => {
  const withTrailer = false;

  return <AboutUI withTrailer={withTrailer} />;
};
