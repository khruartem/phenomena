import { useState, type FC } from "react";

import { NavigationUI } from "../ui/navigation";

export const Navigation: FC = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return <NavigationUI opened={opened} onOpen={() => setOpened(!opened)} />;
};
