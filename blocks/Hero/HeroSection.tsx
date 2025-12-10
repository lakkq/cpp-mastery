import React from "react";
import { GradientText } from "../../components/GradientText";

import styles from './hero.module.scss'

export function HeroSection() {
  return (
    <section className={styles.block}>
      <GradientText className={styles.title}>Getting started with CppMastery</GradientText>
      <p className={styles.subtitle}>Don&apos;t waste your time</p>
    </section>
  );
}
