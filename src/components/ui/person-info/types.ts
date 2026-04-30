import type { CSSProperties } from "react";
import type { TGroup, TPersonInfo } from "../../../utils/types";

export type TPersonInfoUIProps = {
  info: TPersonInfo;
  type: TGroup;
  style?: CSSProperties;
};
