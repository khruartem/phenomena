import type { FC } from "react";

import { OTLogoUI } from "../ui/ot-logo";
import { openExternalLink } from "../../utils/navigation";

export const OTLogo: FC = () => {
  return <OTLogoUI onClick={openExternalLink("https://otkter.ru/")} />;
};
