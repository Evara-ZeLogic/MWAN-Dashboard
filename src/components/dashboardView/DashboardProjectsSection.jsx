import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/png/ArrowsOutSimple.png";
import { projectsData } from "../../data/projectsTable";
import DashboardTable from "./DashboardTable";

export default function DashboardProjectsSection() {
  // bg-[#f8fafc] h-[225px]
  return (
    <section className="rounded-lg w-full p-2 overflow-hidden relative h-full">
      <div className="w-full overflow-y-auto h-full  flex items-start justify-between gap-2">
        <div className="w-full overflow-y-auto h-full text-xs">
          <DashboardTable projects={projectsData} />
        </div>
        <Link to="/dashboard/projects">
          <img
            src={arrowIcon}
            alt="icon"
            className="w-10 h-10 p-2 rounded-lg bg-[#253C25]"
          />
        </Link>
      </div>
    </section>
  );
}
