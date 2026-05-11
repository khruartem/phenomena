import type { Positions } from "./positions";
import type { Groups } from "./groups";

export type TTimeLeft = {
  daysLeft: string;
  hoursLeft: string;
  minutesLeft: string;
  secondsLeft: string;
};

export type TLogoType = "logo-full" | "logo-sign";

export type TMenuItem = {
  label: string;
  to: string;
  onClick?: () => void;
};

export type TMedia = {
  isLarge: boolean;
  isDesktop: boolean;
  isLaptop: boolean;
  isTablet: boolean;
  isMobile: boolean;
};

export type TPersonDirection = "left" | "right";

export type TPersonSize = "L" | "M" | "S";

export type TPersonIcon = "regular" | "phenomen" | "science";

export type TPersonPosition = keyof typeof Positions;

export type TPersonInfo = {
  main: string;
  extra: string;
  position?: TPersonPosition;
};

export type TPersonAppearance = {
  size: TPersonSize;
  direction: TPersonDirection;
  image?: string;
  caption?: string;
  decorated?: boolean;
};

export type TPerson = {
  info: TPersonInfo;
  appearance: TPersonAppearance;
  order?: number;
};

export type TGroup = keyof typeof Groups;

export type TPersonGroup = {
  type: TGroup;
  persons: TPerson[];
};

export type TContactType = "email" | "phone";

export type TSocials = {
  icon: "telegram" | "vk";
  onClick: () => void;
};

export type TPhotoDirection = "left" | "right";

export type TPhoto = {
  src: string;
  direction: TPhotoDirection;
}
