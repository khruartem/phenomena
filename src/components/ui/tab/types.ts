import type { TGroup } from "../../../utils/types";

export type TTabUIProps = {
  tab: TGroup;
  current: boolean;
  onClick: () => void;
};
