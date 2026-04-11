export type TTypography = {
  fontFamily?: "KharkivTone" | "Onest";
  fontWeight?: 300 | 400;
  size: "120px" | "80px" | "60px" | "32px" | "24px" | "16px" | "14px";
  lineHeight: "140px" | "100px" | "80px" | "48px" | "32px" | "24px" | "20px";
  letterSpacing: "0" | "0.02em";
};

const Typography = {
  Digits_120: {
    size: "120px",
    lineHeight: "140px",
    letterSpacing: "0",
  },
  Digits_80: {
    size: "80px",
    lineHeight: "100px",
    letterSpacing: "0",
  },
  Digits_60: {
    size: "60px",
    lineHeight: "80px",
    letterSpacing: "0",
  },
  Text_24: {
    size: "24px",
    lineHeight: "32px",
    letterSpacing: "0.02em",
  },
  Text_32: {
    size: "32px",
    lineHeight: "48px",
    letterSpacing: "0.02em",
  },
  Text_16: {
    size: "16px",
    lineHeight: "20px",
    letterSpacing: "0.02em",
  },
  Text_Onest_14: {
    fontFamily: "Onest",
    fontWeight: 300,
    size: "14px",
    lineHeight: "24px",
    letterSpacing: "0.02em",
  },
} as const;

type Typography = (typeof Typography)[keyof typeof Typography];

export { Typography };
