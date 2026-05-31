import type { SyntheticEvent } from "react";
import type { TPhoto } from "../../../utils/types";

export type TPhotoListUIProps = {
  photos: TPhoto[];
  onScroll: (e: SyntheticEvent) => void;
};
