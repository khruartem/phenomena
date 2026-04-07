const Colors = {
  Badge: "#D8A48C",
  Pudge: "#B87773",
  White100: "#FFFFFF",
  White80: "#D9D9D9",
  Dark100: "#020000",
  Fire: "#F85600",
} as const;

type Colors = (typeof Colors)[keyof typeof Colors];

export { Colors };
