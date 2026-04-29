import { type FC } from "react";

import { PersonGroupsUI } from "../ui/person-groups";

import { usePersonsContext } from "../../hooks/usePersonsContext";

export const PersonGroups: FC = () => {
  const { groups, groupsRef, handleScroll } = usePersonsContext();

  return (
    <PersonGroupsUI groups={groups} onScroll={handleScroll} ref={groupsRef} />
  );
};
