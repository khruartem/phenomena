import type { ReactNode } from "react";

export type TGlowTitleSceneUIProps = {
  children: ReactNode;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};
