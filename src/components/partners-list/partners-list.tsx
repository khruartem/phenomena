import type { FC } from "react";

import { PartnersListUI } from "../ui/partners-list";

import { usePartnersContext } from "../../sections/partners/partners-context";

export const PartnersList: FC = () => {
  const { partners } = usePartnersContext();

  return <PartnersListUI partners={partners} />;
};
