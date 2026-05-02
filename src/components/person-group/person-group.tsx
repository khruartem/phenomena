import type { FC } from "react";

import { SubjectGroupUI } from "../ui/subject-group";
import { CommitteeGroupUI } from "../ui/committee-group";

import type { TPersonGroupProps } from "./types";
import { useMedia } from "../../hooks/useMedia";
import { useSetOrderPersons } from "../../hooks/useSetOrderPersons";

export const PersonGroup: FC<TPersonGroupProps> = ({ type, persons }) => {
  const { isLarge, isDesktop, isLaptop } = useMedia();

  const orderSubjects = isLarge
    ? [1, 2, 4, 6, 7, 8, 5, 3, 9]
    : [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const orderCommitteemen =
    isLarge || isDesktop || isLaptop
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9]
      : [1, 6, 2, 7, 3, 8, 4, 9, 5];

  const orderedPersons = useSetOrderPersons(
    persons,
    type === "subjects" ? orderSubjects : orderCommitteemen,
  );

  const sortedPersons = orderedPersons.sort((a, b) => a.order! - b.order!);

  return (
    <>
      {type === "subjects" && <SubjectGroupUI persons={sortedPersons} />}
      {type === "committee" && <CommitteeGroupUI persons={sortedPersons} />}
    </>
  );
};
