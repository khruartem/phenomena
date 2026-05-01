import type { TGroup, TPerson, TPersonGroup } from "../utils/types";
import { useMedia } from "./useMedia";

const setOrderPersons = (
  type: TGroup,
  groups: TPersonGroup[],
  order: number[],
): TPerson[] => {
  const persons = groups.find((group) => group.type === type)!.persons;

  const sortedPersons = persons.map((person, index) => ({
    ...person,
    order: order[index],
  }));
  return sortedPersons;
};

export const useSetOrderGroups = (groups: TPersonGroup[]) => {
  const { isLarge, isDesktop, isLaptop } = useMedia();

  const orderedSubjects: TPerson[] = setOrderPersons(
    "subjects",
    groups,
    isLarge ? [1, 2, 4, 6, 7, 8, 5, 3, 9] : [1, 2, 3, 4, 5, 6, 7, 8, 9],
  );

  const orderedCommitteemen: TPerson[] = setOrderPersons(
    "committee",
    groups,
    isLarge || isDesktop || isLaptop
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9]
      : [1, 6, 2, 7, 3, 8, 4, 9, 5],
  );

  return groups.map((group) =>
    group.type === "subjects"
      ? { ...group, persons: orderedSubjects }
      : { ...group, persons: orderedCommitteemen },
  );
};
