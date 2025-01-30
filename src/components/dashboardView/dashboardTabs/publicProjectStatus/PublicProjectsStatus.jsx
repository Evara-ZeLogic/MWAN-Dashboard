import React from "react";
import DashboardHeader from "../../DashboardHeader";
import DashboardCards from "../../DashboardCards";
import DistributionComboChart from "./DistributionComboChart";
import DistributionDoughnutChart from "./DistributionDoughnutChart";
import PhasePyramidChart from "./PhasePyramidChart";
import ProjectNumComboChart from "./ProjectNumComboChart";
import CoordinatorsBarChart from "./CoordinatorsBarChart";
import DashboardProjectsSection from "./DashboardProjectsSection";

const PublicProjectsStatus = () => {
  return (
    <div className="flex gap-3 flex-col">
      <DashboardHeader />
      <DashboardCards />
      <div className="flex justify-between w-[100%]">
        <DistributionComboChart />
        <DistributionDoughnutChart />
        <PhasePyramidChart />
      </div>
      <div className="flex justify-between w-[100%]">
        <ProjectNumComboChart />
        <CoordinatorsBarChart />
      </div>
      <div className="bg-[#1E1E1E] h-[calc(100vh-690px)]">
        <DashboardProjectsSection />
      </div>
    </div>
  );
};

export default PublicProjectsStatus;
