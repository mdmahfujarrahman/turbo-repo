"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card = ({ children, className, style }: CardProps) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
