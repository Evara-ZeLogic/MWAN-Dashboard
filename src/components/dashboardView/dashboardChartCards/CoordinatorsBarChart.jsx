import React from "react";
import ChartsCard from "./ChartsCard";
import ProjectCoordinatorsBarChart from "./charts/ProjectCoordinatorsBarChart";

const CoordinatorsBarChart = () => {
  return (
    <ChartsCard
      width={"32.7%"}
      heading={"منسقين المشاريع"}
      subHeading={"عرض المشاريع بالنسبة لأسماء المنسقين"}
    >
      <ProjectCoordinatorsBarChart />
    </ChartsCard>
  );
};

export default CoordinatorsBarChart;
