const Positions = {
  regular: "Гражданский",
  phenomen: "Феномен",
  science: "Научный сотрудник",
} as const;

type Positions = (typeof Positions)[keyof typeof Positions];

export { Positions };
