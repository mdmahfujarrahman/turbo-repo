import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Section = ({ children, className, style }: SectionProps) => {
  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
};