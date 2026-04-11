import type { ReactNode } from "react";

export type TButtonUIProps = {
  onClick: () => void;
  variant: "primary" | "secondary" | "ghost";
  children: ReactNode;
};
