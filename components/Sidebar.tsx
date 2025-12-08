import React from "react";
import { SidebarSection } from "./SidebarSection";

const iconColor = "#BEBEBE";

function BookIcon() {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H10C11.1046 1.5 12 2.39543 12 3.5V14.5H3.5C2.39543 14.5 1.5 13.6046 1.5 12.5V3.5Z"
        stroke={iconColor}
        strokeWidth="1.2"
      />
      <path d="M4 4.5H9" stroke={iconColor} strokeWidth="1.1" />
      <path d="M4 6.5H9" stroke={iconColor} strokeWidth="1.1" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 1L1 3.5V15L5 12.5L9 15L13 12.5V1L9 3.5L5 1Z"
        stroke={iconColor}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M5 1V12.5" stroke={iconColor} strokeWidth="1.1" />
      <path d="M9 3.5V15" stroke={iconColor} strokeWidth="1.1" />
    </svg>
  );
}

function TasksIcon() {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="2"
        width="11"
        height="11"
        rx="2"
        stroke={iconColor}
        strokeWidth="1.1"
      />
      <path d="M4.5 1V3" stroke={iconColor} strokeWidth="1.1" />
      <path d="M9.5 1V3" stroke={iconColor} strokeWidth="1.1" />
      <path d="M4 6.5H10" stroke={iconColor} strokeWidth="1.1" />
      <path d="M4 9H8.5" stroke={iconColor} strokeWidth="1.1" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1L7.2 5.2H11.5L8 7.8L9.2 12L6 9.4L2.8 12L4 7.8L0.5 5.2H4.8L6 1Z"
        stroke={iconColor}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="search-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="6" stroke="#5D5D5D" strokeWidth="2" />
      <path d="M15.5 15.5L20 20" stroke="#5D5D5D" strokeWidth="2" />
    </svg>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="search">
        <SearchIcon />
        <span className="search-placeholder">Search anything</span>
      </div>

      <SidebarSection
        title="Courses"
        icon={<BookIcon />}
        defaultOpen
        marginTop={30}
        items={[
          { label: "Installing compiler and IDE" },
          { label: "Hello World programm", active: true },
          { label: "Data types" },
          { label: "Variables and constants" },
          { label: "Inputs and outputs" },
        ]}
      />

      <SidebarSection
        title="Map"
        icon={<MapIcon />}
        marginTop={10}
        items={[
          { label: "Milestones" },
          { label: "Topic timeline" },
        ]}
      />

      <SidebarSection
        title="Tasks"
        icon={<TasksIcon />}
        marginTop={10}
        items={[
          { label: "Weekly challenge" },
          { label: "Practice drills" },
        ]}
      />

      <SidebarSection
        title="Ask AI"
        icon={<SparkIcon />}
        marginTop={10}
        items={[
          { label: "Explain this" },
          { label: "Debug hints" },
        ]}
      />

      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10, color: "#bebebe" }}>
        <div className="sidebar-header" style={{ cursor: "default" }}>
          <span className="title">Profile</span>
        </div>
        <div className="sidebar-header" style={{ cursor: "default" }}>
          <span className="title">Settings</span>
        </div>
        <div className="sidebar-header" style={{ cursor: "default" }}>
          <span className="title">Logout</span>
        </div>
      </div>
    </aside>
  );
}
