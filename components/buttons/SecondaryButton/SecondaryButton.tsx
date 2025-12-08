import React from "react";
import { GradientText } from "../../GradientText";

import styles from './secondaryButton.module.scss'

type SecondaryButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function SecondaryButton({
  children,
  className = "",
}: SecondaryButtonProps) {
  return (
    <button type="button" className={`${styles.btn} ${styles.btn_secondary} ${className}`.trim()}>
      <GradientText variant="dark">{children}</GradientText>
    </button>
  );
}
