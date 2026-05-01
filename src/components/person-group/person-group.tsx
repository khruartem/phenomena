import type { FC } from "react";

import { SubjectGroupUI } from "../ui/subject-group";
import { CommitteeGroupUI } from "../ui/committee-group";

import type { TPersonGroupProps } from "./types";

export const PersonGroup: FC<TPersonGroupProps> = ({ type, persons }) => {
  const sortedPersons = persons.sort((a, b) => a.order! - b.order!);

  return (
    <>
      {type === "subjects" && <SubjectGroupUI persons={sortedPersons} />}
      {type === "committee" && <CommitteeGroupUI persons={sortedPersons} />}
    </>
  );
};
