import { createUseStyleHook } from "../../../utils/createUseStyleHook";

export const useStyle = createUseStyleHook({
  paddingInline: {
    large: 156,
    desktop: 107,
    laptop: 42,
    tablet: 30,
    mobile: 16,
  },
  columnGap: { desktop: 34, laptop: 26, tablet: 36 },
  rowGap: { laptop: 40, tablet: 40, mobile: 20 },
  paddingBlockStart: { desktop: 60, tablet: 40, mobile: 20 },
  paddingBlockEnd: { large: 40, desktop: 140 },
});
