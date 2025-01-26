import React from "react";
import ChartsCard from "./ChartsCard";
import LineBarChart from "./charts/LineBarChart";
import { executingDepartment } from "../../../data/pmo-data";

const ProjectNumComboChart = () => {
  const chartData = executingDepartment.map((depart) => {
    return {
      id: depart.id,
      name: depart.name,
      value: depart.numOfProject,
      lineValue: depart.numOfProject,
      background: 30,
    };
  });
  return (
    <ChartsCard
      width={"66.5%"}
      heading={"عدد المشاريع للإدارات التنفيذية"}
      subHeading={"عرض اجمالي المشاريع مع قيم العقود الحالية بشكل خطي"}
    >
      <div className="h-40">
        <LineBarChart data={chartData} />
      </div>
    </ChartsCard>
  );
};

export default ProjectNumComboChart;
