export type TTypography = {
  fontFamily: "KharkivTone" | "Onest";
  fontWeight: 300 | 400;
  size:
    | "120px"
    | "80px"
    | "60px"
    | "40px"
    | "32px"
    | "24px"
    | "20px"
    | "16px"
    | "14px";
  lineHeight:
    | "140px"
    | "100px"
    | "80px"
    | "60px"
    | "48px"
    | "32px"
    | "28px"
    | "24px"
    | "20px";
  letterSpacing: "0" | "0.02em";
};

const Typography = {
  Digits_120: {
    fontFamily: "KharkivTone",
    fontWeight: 400,
    size: "120px",
    lineHeight: "140px",
    letterSpacing: "0",
  },
  Digits_80: {
    fontFamily: "KharkivTone",
    fontWeight: 400,
    size: "80px",
    lineHeight: "100px",
    letterSpacing: "0",
  },
  Digits_60: {
    fontFamily: "KharkivTone",
    fontWeight: 400,
    size: "60px",
    lineHeight: "80px",
    letterSpacing: "0",
  },
  Digits_40: {
    fontFamily: "KharkivTone",
    fontWeight: 400,
    size: "40px",
    lineHeight: "60px",
    letterSpacing: "0",
  },
  Text_KharkivTone_400_32: {
    fontFamily: "KharkivTone",
    fontWeight: 400,
    size: "32px",
    lineHeight: "48px",
    letterSpacing: "0.02em",
  },
  Text_KharkivTone_400_24: {
    fontFamily: "KharkivTone",
    fontWeight: 400,
    size: "24px",
    lineHeight: "32px",
    letterSpacing: "0.02em",
  },
  Text_KharkivTone_400_16: {
    fontFamily: "KharkivTone",
    fontWeight: 400,
    size: "16px",
    lineHeight: "24px",
    letterSpacing: "0.02em",
  },
  Text_Onest_400_20: {
    fontFamily: "Onest",
    fontWeight: 400,
    size: "20px",
    lineHeight: "32px",
    letterSpacing: "0.02em",
  },
  Text_Onest_400_16: {
    fontFamily: "Onest",
    fontWeight: 400,
    size: "16px",
    lineHeight: "28px",
    letterSpacing: "0.02em",
  },
  Text_Onest_300_14: {
    fontFamily: "Onest",
    fontWeight: 300,
    size: "14px",
    lineHeight: "24px",
    letterSpacing: "0.02em",
  },
} as const;

type Typography = (typeof Typography)[keyof typeof Typography];

export { Typography };
