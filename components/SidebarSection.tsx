"use client";

import React, { useState } from "react";

export type SidebarItem = {
  label: string;
  active?: boolean;
};

type SidebarSectionProps = {
  title: string;
  icon: React.ReactNode;
  items?: SidebarItem[];
  defaultOpen?: boolean;
  marginTop?: number;
};

export function SidebarSection({
  title,
  icon,
  items = [],
  defaultOpen = false,
  marginTop = 0,
}: SidebarSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="sidebar-section" style={{ marginTop }}>
      <div className="sidebar-header" onClick={() => setOpen((prev) => !prev)}>
        {icon}
        <span className="title">{title}</span>
      </div>

      {open && items.length > 0 ? (
        <div className="sidebar-items">
          {items.map((item) => (
            <div
              key={item.label}
              className={`sidebar-item ${item.active ? "active" : ""}`.trim()}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
