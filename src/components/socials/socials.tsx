import type { FC } from "react";

import { SocialsUI } from "../ui/socials";

import { openExternalLink } from "../../utils/navigation";
import type { TSocials } from "../../utils/types";

import type { TNavigationProps } from "./types";

export const Socials: FC<TNavigationProps> = ({ gap = 4 }) => {
  const socials: TSocials[] = [
    {
      icon: "telegram",
      onClick: openExternalLink("https://t.me/ivn_journal"),
    },
    {
      icon: "vk",
      onClick: openExternalLink("https://vk.ru/club236557072"),
    },
  ];

  return <SocialsUI items={socials} gap={gap} />;
};
