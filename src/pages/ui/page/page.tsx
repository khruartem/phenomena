import { Layout } from "../../../layouts";

import type { TPageUIProps } from "./types";

export default function PageUI({ children }: TPageUIProps) {
  return <Layout>{children}</Layout>;
}
