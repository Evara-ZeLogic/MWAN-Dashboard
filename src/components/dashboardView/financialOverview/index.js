import React from "react";
import DashboardHeader from "../DashboardHeader";
import DashboardCards from "../DashboardCards";
import ChartsCard from "../dashboardChartCards/ChartsCard";
import LineBarChart from "../dashboardChartCards/charts/LineBarChart";
import { executingDepartment, mainSections } from "../../../data/pmo-data";
import DonutChart2 from "../dashboardChartCards/charts/DonutChart2";

const chartData = executingDepartment.map((depart) => {
  return {
    id: depart.id,
    name: depart.name,
    value: depart.numOfProject,
    lineValue: depart.numOfProject,
    background: 30,
  };
});

const mainSectionsData = mainSections.map((depart) => {
  return {
    id: depart.id,
    label: depart.name,
    value: depart.numOfProject,
  };
});

export default function FinancialOverview() {
  return (
    <section className="flex gap-3 flex-col overflow-hidden">
      <DashboardHeader />
      <DashboardCards />
      <main className="flex gap-3">
        <ChartsCard
          width={"66.5%"}
          heading={"قيمة المشاريع / الإدارات التنفيذية"}
          subHeading={"عرض اجمالي قيم المشاريع بالنسبة للإدارات المختلفة"}
        >
          <div className="h-40">
            <LineBarChart data={chartData} />
          </div>
        </ChartsCard>
        <ChartsCard
          width={"32.7%"}
          heading={"قيمة المشاريع / الأقسام الرئيسية"}
          subHeading={"بالنسبة للأقسام وحالة التقدم"}
        >
          <div className="h-40 pt-1">
            <DonutChart2 data={mainSectionsData} />
          </div>
        </ChartsCard>
      </main>
    </section>
  );
}
