import type { FC } from "react";

import { SocialsUI } from "../ui/socials";

export const Socials: FC = () => {
  const socials = ["telegram", "vk"];

  return <SocialsUI items={socials} />;
};
