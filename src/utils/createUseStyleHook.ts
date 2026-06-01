import type { CSSProperties } from "react";
import { usePxToVw, type TBreakpointValues } from "../hooks/usePxToVw";

type StyleConfig = Record<string, TBreakpointValues>;

export const createUseStyleHook = (config: StyleConfig) => {
  return (): CSSProperties => {
    const result: Record<string, unknown> = {};

    Object.entries(config).forEach(([property, breakpoints]) => {
      result[property] = usePxToVw(breakpoints);
    });

    return result as CSSProperties;
  };
};
