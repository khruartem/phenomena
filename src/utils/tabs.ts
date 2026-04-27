const Tabs = {
  subjects: "Субъекты",
  committee: "Комитет",
} as const;

type Tabs = (typeof Tabs)[keyof typeof Tabs];

export { Tabs };
