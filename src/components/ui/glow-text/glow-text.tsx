import { type FC, useId, useRef, useState } from "react";
import clsx from "clsx";

import type { TGlowTextUIProps } from "./types";

import styles from "./glow-text.module.css";

export const GlowTextUI: FC<TGlowTextUIProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const uid = useId();

  const filterId = `inset-shadow-${uid}`;
  const maskId = `text-mask-${uid}`;
  const glowGradId = `glow-gradient-${uid}`;
  const glowFilterId = `glow-blur-${uid}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className={clsx(styles.container, className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="100%"
        height="100%"
        style={{ display: "block", overflow: "visible" }}
      >
        <defs>
          {/* Inset shadow filter */}
          <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
            <feComponentTransfer in="SourceAlpha" result="invertedAlpha">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur
              in="invertedAlpha"
              stdDeviation="4"
              result="blurred"
            />
            <feComposite
              in="blurred"
              in2="SourceAlpha"
              operator="in"
              result="shadow"
            />
            <feColorMatrix
              in="shadow"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.5 0"
              result="darkShadow"
            />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="darkShadow" />
            </feMerge>
          </filter>

          {/* Blur filter for the glow */}
          <filter id={glowFilterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="20" />
          </filter>

          {/* Radial gradient centered on mouse position */}
          <radialGradient
            id={glowGradId}
            cx={mousePos.x}
            cy={mousePos.y}
            r={84}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#F85600" />
            <stop offset="100%" stopColor="#FF1F00" />
          </radialGradient>

          {/* Text mask — only letters are transparent (white) */}
          <mask id={maskId}>
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              fill="white"
              style={{
                fontFamily: "inherit",
                fontSize: "inherit",
                letterSpacing: "inherit",
              }}
            >
              {children}
            </text>
          </mask>
        </defs>

        {/* Rect masked to text shape with inset shadow filter */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="currentColor"
          mask={`url(#${maskId})`}
          filter={`url(#${filterId})`}
        />

        {/* Glow gradient rect: visible only inside letter shapes */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${glowGradId})`}
          mask={`url(#${maskId})`}
          filter={`url(#${glowFilterId})`}
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </svg>
    </div>
  );
};
