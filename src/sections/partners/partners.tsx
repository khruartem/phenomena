import type { FC } from "react";

import { PartnersUI } from "../ui/partners";

import type { TPartner } from "../../utils/types";
import { PartnersProvider } from "./partners-context";
import type { TPartnersContextValue } from "./types";

const partners: TPartner[] = [
  {
    icon: "partner",
    width: 180,
    height: 56,
  },
  {
    icon: "partner",
    width: 180,
    height: 56,
  },
  {
    icon: "partner",
    width: 180,
    height: 56,
  },
  {
    icon: "partner",
    width: 180,
    height: 56,
  },
  {
    icon: "partner",
    width: 180,
    height: 56,
  },
];

const contextValue: TPartnersContextValue = {
  partners,
};

export const Partners: FC = () => {
  return (
    <PartnersProvider value={contextValue}>
      <PartnersUI />
    </PartnersProvider>
  );
};
