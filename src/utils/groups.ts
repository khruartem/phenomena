const Groups = {
  subjects: "Субъекты",
  committee: "Комитет",
} as const;

type Groups = (typeof Groups)[keyof typeof Groups];

export { Groups };
