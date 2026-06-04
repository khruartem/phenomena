import { createUseStyleHook } from "../../../utils/createUseStyleHook";

export const useStyle = createUseStyleHook({
  width: {
    large: 1384,
    desktop: 1152,
    laptop: 940,
    tablet: 708,
    mobile: 388,
  },
  paddingInlineStart: {
    large: 24,
    desktop: 98,
    laptop: 80,
    tablet: 60,
    mobile: 16,
  },
  paddingInlineEnd: {
    large: 24,
    laptop: 80,
  },
  gap: { mobile: 12 },
});
