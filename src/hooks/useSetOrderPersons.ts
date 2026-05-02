import type { TPerson } from "../utils/types";

export const useSetOrderPersons = (
  persons: TPerson[],
  order: number[],
): TPerson[] => {
  const orderedPersons = persons.map((person, index) => ({
    ...person,
    order: order[index],
  }));

  return orderedPersons;
};
