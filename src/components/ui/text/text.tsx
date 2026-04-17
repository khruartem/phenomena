import type { FC } from "react";
import clsx from "clsx";

import type { TTextUIProps } from "./types";

export const TextUI: FC<TTextUIProps> = ({
  as: Tag = "span",
  children,
  typography,
  color,
  className,
  style,
}) => {
  return (
    <Tag
      className={clsx(className && className)}
      style={{
        ...style,
        fontFamily:
          typeof typography === "string" ? "inherit" : typography.fontFamily,
        fontWeight:
          typeof typography === "string" ? "inherit" : typography.fontWeight,
        fontSize: typeof typography === "string" ? "inherit" : typography.size,
        lineHeight:
          typeof typography === "string" ? "inherit" : typography.lineHeight,
        letterSpacing:
          typeof typography === "string" ? "inherit" : typography.letterSpacing,
        color: color,
      }}
    >
      {children}
    </Tag>
  );
};
