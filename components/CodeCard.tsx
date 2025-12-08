import React from "react";
import { CodeTooltip } from "./CodeTooltip";

export function CodeCard() {
  return (
    <div className="glass-surface code-card">
      <div className="code-lines">
        <div className="code-line">int x;</div>
        <div className="code-line">x = 5;</div>
        <div className="code-line">
          <span className="code-text">std::</span>
          <span className="code-pill-wrapper">
            <span className="code-pill">cout</span>
            <span className="cursor-icon" />
            <CodeTooltip text="This is a command that displays the value of the variable x in the console." />
          </span>
          <span className="code-text"> &lt;&lt; x;</span>
        </div>
      </div>
    </div>
  );
}
