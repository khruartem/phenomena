import type { FC } from "react";
import clsx from "clsx";

import type { TTextUIProps } from "./types";

export const TextUI: FC<TTextUIProps> = ({
  as: Tag = "span",
  children,
  typography,
  color,
  className,
}) => {
  return (
    <Tag
      className={clsx(className && className)}
      style={{
        fontFamily: typography?.fontFamily,
        fontWeight: typography?.fontWeight,
        fontSize: typography.size,
        lineHeight: typography.lineHeight,
        letterSpacing: typography.letterSpacing,
        color: color,
      }}
    >
      {children}
    </Tag>
  );
};
