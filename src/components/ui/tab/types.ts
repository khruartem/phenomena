import type { TTab } from "../../../utils/types";

export type TTabUIProps = {
  tab: TTab;
  current: boolean;
  onClick: () => void;
};
