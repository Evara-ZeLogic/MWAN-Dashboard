import React from "react";
import ChartsCard from "../../dashboardChartCards/ChartsCard";
import ProjectPyramidBarChart from "../../dashboardChartCards/charts/ProjectPyramidBarChart";
// import { projectStages } from "../../../../data/pmo-data";
import { useSelector } from "react-redux";

const PhasePyramidChart = () => {
  const { countedByStages } = useSelector((state) => state.countedBy);

  const chartData = countedByStages.map((stage) => {
    return {
      id: stage?.operationalModelStage?.id,
      name: stage?.operationalModelStage?.name,
      value: stage.percentage,
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
