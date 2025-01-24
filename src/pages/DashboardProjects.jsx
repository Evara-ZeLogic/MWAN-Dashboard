import React from "react";
import DashboardTable from "../components/dashboardView/DashboardTable";
import { projectsData } from "../data/projectsTable";

export default function DashboardProjects() {
  return (
    <section className="px-4 h-full overflow-y-auto ">
      <div className="text-sm">
        <DashboardTable projects={projectsData} />
      </div>
    </section>
  );
}
