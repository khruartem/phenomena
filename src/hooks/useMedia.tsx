import { useMediaQuery } from "react-responsive";

export const useMedia = () => ({
  isLarge: useMediaQuery({ minWidth: 894 }),
  isMobile: useMediaQuery({ maxWidth: 893.9 }),
});
