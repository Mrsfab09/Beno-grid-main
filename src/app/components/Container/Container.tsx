import React, { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  color: string;
  padding: string;
}

export function Container({ children, color, padding }: ContainerProps) {
  return (
    <div
      style={{ backgroundColor: color, padding: padding }}
      className={styles.container}
    >
      {children}
    </div>
  );
}
