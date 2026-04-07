import type { ReactNode } from "react";

export type TButtonUIProps = {
  variant: "primary" | "secondary" | "ghost";
  children: ReactNode;
}