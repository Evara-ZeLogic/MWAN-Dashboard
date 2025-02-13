import React from "react";
import ChartsCard from "../../dashboardChartCards/ChartsCard";
import LineBarChart from "../../dashboardChartCards/charts/LineBarChart";
import { useSelector } from "react-redux";

const ProjectNumComboChart = () => {
  const { countedByExecutiveManagements } = useSelector(
    (state) => state.countedBy
  );
  const chartData = countedByExecutiveManagements.map((management) => {
    return {
      id: management?.executiveManagement?.id,
      name: management?.executiveManagement?.name,
      value: management.totalCount,
      lineValue: management.totalCount,
      background: 50,
    };
  });
  return (
    <ChartsCard
      width={"66.5%"}
      heading={"عدد المشاريع للإدارات التنفيذية"}
      subHeading={"عرض اجمالي المشاريع مع قيم العقود الحالية بشكل خطي"}
    >
      <div className="h-40">
        <LineBarChart data={chartData} lineChart={true} />
      </div>
    </ChartsCard>
  );
};

export default ProjectNumComboChart;
