import type { Positions } from "./positions";

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

// export type TPersonPosition = "Гражданский" | "Феномен" | "Научный сотрудник";
export type TPersonPosition = keyof typeof Positions;

export type TPersonInfo = {
  character: string;
  actor: string;
  position: TPersonPosition;
};

export type TPersonAppearance = {
  size: TPersonSize;
  direction: TPersonDirection;
  image: string;
  caption?: string;
  decorated?: boolean;
};

export type TPerson = {
  info: TPersonInfo;
  appearance: TPersonAppearance;
};
