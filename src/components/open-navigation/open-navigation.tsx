import type { FC } from "react";

import { OpenNavigationUI } from "../ui/open-navigation";

import { useNavigationContext } from "../../hooks/useNavigationContext";

export const OpenNavigation: FC = () => {
  const props = useNavigationContext();

  return <OpenNavigationUI {...props} />;
};
