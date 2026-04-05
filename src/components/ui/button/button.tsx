import React from "react";

interface SvgButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  label?: string;
  textColor?: string;
  onClick?: () => void;
}

const SvgButton: React.FC<SvgButtonProps> = ({
  backgroundColor = "#f85600",
  borderColor = "#f85600",
  label = "Label",
  textColor = "#ffffff",
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="101"
      height="40"
      fill="none"
      onClick={onClick}
      style={{ cursor: "pointer", display: "inline-block" }}
    >
      {/* Левый срез */}
      <path
        fill={backgroundColor}
        stroke={borderColor}
        strokeWidth="1"
        d="M2 0h10v40h-.343a4 4 0 0 1-2.829-1.172l-7.656-7.656A4 4 0 0 1 0 28.343V2a2 2 0 0 1 2-2"
      />

      {/* Центральный прямоугольник */}
      <path
        fill={backgroundColor}
        stroke={borderColor}
        strokeWidth="1"
        d="M12 0h77v40H12z"
      />

      {/* Правый срез */}
      <path
        fill={backgroundColor}
        stroke={borderColor}
        strokeWidth="1"
        d="M99 40H89V0h.343a4 4 0 0 1 2.829 1.172l7.656 7.656A4 4 0 0 1 101 11.657V38a2 2 0 0 1-2 2"
      />

      {/* Текст */}
      <text
        x="50.5"
        y="20"
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        style={{
          fontFamily: '"KharkivTone", sans-serif',
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.02em",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {label}
      </text>
    </svg>
  );
};

export default SvgButton;
