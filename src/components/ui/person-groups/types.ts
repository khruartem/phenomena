import type { SyntheticEvent } from "react";
import type { TPersonGroup } from "../../../utils/types";

export type TPersonGroupsUIProps = {
  groups: TPersonGroup[];
  onScroll: (e: SyntheticEvent) => void;
};
