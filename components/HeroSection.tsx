import React from "react";
import { GradientText } from "./GradientText";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-ring" />
      <GradientText className="hero-title">Getting started with CppMastery</GradientText>
      <p className="hero-subtitle">Don&apos;t waste your time</p>
    </section>
  );
}
