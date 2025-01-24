import React from "react";
import ChartsCard from "./ChartsCard";
import ProjectPyramidBarChart from "./charts/ProjectPyramidBarChart";

const PhasePyramidChart = () => {
  return (
    <ChartsCard
      width={"32.7%"}
      heading={"مرحلة المشروع"}
      subHeading={"عرض اجمالي المشاريع بالنسبة للنموذج التشغيلي"}
    >
      <ProjectPyramidBarChart />
    </ChartsCard>
  );
};

export default PhasePyramidChart;
