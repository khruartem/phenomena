// import type { CSSProperties } from "react";
// import { usePxToVw, type TBreakpointValues } from "../hooks/usePxToVw";

// type StyleConfig = Record<string, TBreakpointValues>;

// export const createUseStyleHook = (config: StyleConfig) => {
//   return (): CSSProperties => {
//     const result: Record<string, unknown> = {};

//     Object.entries(config).forEach(([property, breakpoints]) => {
//       result[property] = usePxToVw(breakpoints);
//     });

//     return result as CSSProperties;
//   };
// };

import type { CSSProperties } from "react";
import { usePxToVw, type TBreakpointValues } from "../hooks/usePxToVw";

type StyleConfig = Record<string, TBreakpointValues>;

export const createUseStyleHook = (
  config: StyleConfig,
  callback?: () => CSSProperties,
) => {
  return (): CSSProperties => {
    const result: Record<string, unknown> = {};
    const callbackResult = callback ? callback() : {};

    Object.entries(config).forEach(([property, breakpoints]) => {
      result[property] = usePxToVw(breakpoints);
    });

    return { ...result, ...callbackResult } as CSSProperties;
  };
};
