const Colors = {
  Badge: "#D8A48C",
  Pudge: "#B87773",
  Light: "#FFFFFF",
  Dark: "#D9D9D9",
} as const;

type Colors = (typeof Colors)[keyof typeof Colors];

export { Colors };
