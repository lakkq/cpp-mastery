import React from "react";
import { SidebarSection } from "./SidebarSection";

import BookIcon from "../public/icons/BookIcon";
import MapIcon from "../public/icons/MapIcon";
import SearchIcon from "../public/icons/SearchIcon";
import SparkIcon from "../public/icons/SparkIcon";
import TasksIcon from "../public/icons/TasksIcon";
import ProfileIcon from "../public/icons/ProfileIcon";
import SettingsIcon from "../public/icons/SettingsIcon";
import LogoutIcon from "../public/icons/LogoutIcon";

const iconColor = "#BEBEBE";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="search">
        <SearchIcon iconColor="#5D5D5D" />
        <span className="search-placeholder">Search anything</span>
      </div>

      <SidebarSection
        title="Courses"
        icon={<BookIcon iconColor={iconColor} />}
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
        icon={<MapIcon iconColor={iconColor} />}
        marginTop={10}
        items={[{ label: "Milestones" }, { label: "Topic timeline" }]}
      />

      <SidebarSection
        title="Tasks"
        icon={<TasksIcon iconColor={iconColor} />}
        marginTop={10}
        items={[{ label: "Weekly challenge" }, { label: "Practice drills" }]}
      />

      <SidebarSection
        title="Ask AI"
        icon={<SparkIcon iconColor={iconColor} />}
        marginTop={10}
        items={[{ label: "Explain this" }, { label: "Debug hints" }]}
      />

      <div
        style={{
          marginTop: 28,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          color: "#bebebe",
        }}
      >
        <SidebarSection
          title="Profile"
          icon={<ProfileIcon iconColor={iconColor} />}
        />
        <SidebarSection
          title="Settings"
          icon={<SettingsIcon iconColor={iconColor} />}
        />
        <SidebarSection
          title="Settings"
          icon={<LogoutIcon iconColor={iconColor} />}
        />
      </div>
    </aside>
  );
}
