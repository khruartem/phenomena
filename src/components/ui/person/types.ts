import type { TPersonDirection, TPersonSize } from "../../../utils/types";

export type TPersonUIProps = {
  direction: TPersonDirection;
  size: TPersonSize;
  src: string;
  alt?: string;
  decorated?: boolean;
};
