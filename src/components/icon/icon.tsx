import type { FC } from "react";

import type { TIconProps } from "./types";

export const Icon: FC<TIconProps> = ({
  name,
  width,
  height,
  color,
  className,
  style,
  onClick,
}) => {
  const spriteUrl = `${import.meta.env.BASE_URL}sprite.svg`;
  const href = `${spriteUrl}#${name}`;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={{ ...style, color: color }}
      onClick={onClick}
    >
      <use href={href} />
    </svg>
  );
};
