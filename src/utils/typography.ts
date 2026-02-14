export type TTypography = {
  size: "120px" | "80px" | "60px" | "32px" | "24px" | "16px";
  lineHeight: "140px" | "100px" | "80px" | "48px" | "32px" | "20px";
  letterSpacing: "0" | "2%";
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
    letterSpacing: "2%",
  },
  Text_32: {
    size: "32px",
    lineHeight: "48px",
    letterSpacing: "2%",
  },
  Text_16: {
    size: "16px",
    lineHeight: "20px",
    letterSpacing: "2%",
  },
} as const;

type Typography = (typeof Typography)[keyof typeof Typography];

export { Typography };
