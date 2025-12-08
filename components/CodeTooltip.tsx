import React from "react";

type CodeTooltipProps = {
  text: string;
};

export function CodeTooltip({ text }: CodeTooltipProps) {
  return <div className="tooltip">{text}</div>;
}
