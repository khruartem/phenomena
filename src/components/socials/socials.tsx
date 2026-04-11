import type { FC } from "react";

import { SocialsUI } from "../ui/socials";

import type { TNavigationProps } from "./types";

export const Socials: FC<TNavigationProps> = ({ gap = 4 }) => {
  const socials = ["telegram", "vk"];

  return <SocialsUI items={socials} gap={gap} />;
};
