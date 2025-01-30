import React from "react";
import ChartsCard from "../../dashboardChartCards/ChartsCard";
import ProjectPyramidBarChart from "../../dashboardChartCards/charts/ProjectPyramidBarChart";
import { projectStages } from "../../../../data/pmo-data";

const PhasePyramidChart = () => {
  const chartData = projectStages.map((depart) => {
    return {
      id: depart.id,
      name: depart.name,
      value: depart.numOfProject,
      background: 100,
    };
  });
  return (
    <ChartsCard
      width={"32.7%"}
      heading={"مرحلة المشروع"}
      subHeading={"عرض اجمالي المشاريع بالنسبة للنموذج التشغيلي"}
    >
      <ProjectPyramidBarChart chartData={chartData} />
    </ChartsCard>
  );
};

export default PhasePyramidChart;
