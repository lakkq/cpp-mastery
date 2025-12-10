import React from "react";
import Image from "next/image";
import { GlassCard } from "../../components/GlassCard";
import { Sidebar } from "../../components/Sidebar";
import { ProgramStructureSection } from "../../components/ProgramStructureSection";

import BlackHole from "../../public/img/black_hole.png";

import styles from "./main.module.scss";

export function Main() {
  return (
    <div className={styles.wrap}>
      <Image className={styles.hole} src={BlackHole} alt="black hole" />
      <GlassCard>
        <Sidebar />
        <ProgramStructureSection />
      </GlassCard>
    </div>
  );
}
