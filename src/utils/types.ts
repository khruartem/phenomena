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

export type TPersonVariant = "left" | "right";

export type TPersonInfo = {
  character: string;
  actor: string;
  position?: string;
  icon?: string;
};
