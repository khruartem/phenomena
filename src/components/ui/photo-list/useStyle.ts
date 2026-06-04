import { createUseStyleHook } from "../../../utils/createUseStyleHook";

export const useStyle = createUseStyleHook({
  paddingInlineEnd: {
    laptop: 20,
    tablet: 12,
    mobile: 8,
  },
  gap: {
    large: 24,
    desktop: 24,
    laptop: 20,
    tablet: 12,
    mobile: 8,
  },
  height: {
    large: 288,
    desktop: 203,
    laptop: 345,
    tablet: 261,
    mobile: 288,
  },
});
