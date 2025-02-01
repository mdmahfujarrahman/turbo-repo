"use client";

import { ReactNode } from "react";

interface TabProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Tab = ({ children, className, style }: TabProps) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};