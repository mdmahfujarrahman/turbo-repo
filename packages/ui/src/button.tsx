"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Button = ({ children, className, style, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
