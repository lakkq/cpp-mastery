import React from "react";
import { GradientText } from "../../GradientText";

import styles from './primaryButton.module.scss'

type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function PrimaryButton({ children, className = "" }: PrimaryButtonProps) {
  return (
    <button type="button" className={`${styles.btn} ${styles.btn_primary} ${className}`.trim()}>
      <GradientText>{children}</GradientText>
    </button>
  );
}
