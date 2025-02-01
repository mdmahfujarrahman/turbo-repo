"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, className, style, onClick, type= "button" }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
};
