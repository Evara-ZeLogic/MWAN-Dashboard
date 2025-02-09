import React from "react";
import ChartsCard from "../../dashboardChartCards/ChartsCard";
import LineBarChart from "../../dashboardChartCards/charts/LineBarChart";
import { projectWallet } from "../../../../data/pmo-data";

const DistributionComboChart = () => {
  const chartData = projectWallet.map((depart) => {
    return {
      id: depart.id,
      name: depart.name,
      value: depart.numOfProject,
      lineValue: depart.numOfProject,
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
