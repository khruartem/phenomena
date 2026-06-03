import { createUseStyleHook } from "../../../utils/createUseStyleHook";

export const useBodyStyle = createUseStyleHook({
  paddingInline: {
    large: 60,
    desktop: 11,
    laptop: 26,
    mobile: 16,
  },
  paddingBlockStart: {
    large: 44,
    desktop: 44,
    laptop: 44,
    tablet: 34,
    mobile: 0,
  },
});
