import React from "react";
import { GradientText } from "../../components/GradientText";
import { PrimaryButton } from "../../components/buttons/PrimaryButton/PrimaryButton";
import { SecondaryButton } from "../../components/buttons/SecondaryButton/SecondaryButton";

const NAV_ITEMS = ["Pricing", "Home", "About"];

import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles.shell}>
      <div className={styles.bar}>
        <div className={styles.logo}>
          <div className={styles.logo_mark} />
          <GradientText className={styles.logo_text}>Cpp Mastery</GradientText>
        </div>

        <div className={styles.nav_wrapper}>
          <div className={styles.nav_tabs}>
            {NAV_ITEMS.map((item) => (
              <a
                href="#"
                key={item}
                className={`${styles.nav_tab} ${item === "Home" && styles.active}`.trim()}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <SecondaryButton>Login</SecondaryButton>
          <PrimaryButton>Start Free Trial</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
