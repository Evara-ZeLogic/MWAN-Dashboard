import React from "react";
import ChartsCard from "../../dashboardChartCards/ChartsCard";
import LineBarChart from "../../dashboardChartCards/charts/LineBarChart";
import { projectWallet } from "../../../../data/pmo-data";
import { useSelector } from "react-redux";

const DistributionComboChart = () => {
  const { strategicObjectives } = useSelector((state) => state.countedBy);
  console.log("strategicObjectives", strategicObjectives);
  const chartData = strategicObjectives.map((objective) => {
    return {
      id: objective?.strategicObjective?.id,
      name: objective?.strategicObjective?.name,
      value: objective.totalCount,
      lineValue: objective.totalCount,
      background: 57,
    };
  });
  return (
    <ChartsCard
      width={"32.7%"}
      heading={"توزيع المشاريع للمحافظ الفرعية"}
      subHeading={"عرض اجمالي المشاريع في كل محفظة مع الأهداف الاستراتيجية"}
    >
      <div className="h-40">
        <LineBarChart data={chartData} lineChart={true} />
      </div>
    </ChartsCard>
  );
};

export default DistributionComboChart;
