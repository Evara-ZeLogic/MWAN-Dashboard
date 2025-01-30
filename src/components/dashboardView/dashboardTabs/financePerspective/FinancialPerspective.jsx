import React from "react";
import DashboardHeader from "../../DashboardHeader";
import DashboardCards from "../../DashboardCards";
import ChartsCard from "../../dashboardChartCards/ChartsCard";
import LineBarChart from "../../dashboardChartCards/charts/LineBarChart";
import { executingDepartment, mainSections } from "../../../../data/pmo-data";
import DonutChart2 from "../../dashboardChartCards/charts/DonutChart2";
import {
  mainSectionsFinance,
  projectMonthFinance,
  projectStagesFinance,
} from "../../../../data/finance-data";
import VerticalBarChart from "../../dashboardChartCards/charts/VerticalBarChart";
import PaymentStatusChart from "./PaymentStatusChart";

const chartData = executingDepartment.map((depart) => {
  return {
    id: depart.id,
    name: depart.name,
    value: depart.numOfProject,
    lineValue: depart.numOfProject,
    background: 30,
  };
});
const financeStages = projectStagesFinance.map((stage) => {
  return {
    id: stage.id,
    name: stage.name,
    value: stage.value,
    background: 55,
  };
});
const contractValue = projectMonthFinance.map((month) => {
  return {
    id: month.id,
    name: month.month,
    value: month.value,
    background: 55,
  };
});

const mainSectionsData = mainSections.map((section) => {
  return {
    id: section.id,
    label: section.name,
    value: section.numOfProject,
  };
});

const mainSectionValue = mainSectionsFinance.map((section) => {
  return {
    id: section.id,
    name: section.name,
    value: section.value,
    background: 50,
  };
});
const FinancialPerspective = () => {
  return (
    <section className="flex gap-3 flex-col">
      <DashboardHeader />
      <DashboardCards />
      {/* Section 1 */}
      <div className="flex justify-between w-[100%]">
        <ChartsCard
          width={"66.5%"}
          heading={"قيمة المشاريع / الإدارات التنفيذية"}
          subHeading={"عرض اجمالي قيم المشاريع بالنسبة للإدارات المختلفة"}
        >
          <div className="h-40">
            <LineBarChart data={chartData} labeled />
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
      </div>
      {/* Section 2 */}
      <div className="flex justify-between w-[100%]">
        <PaymentStatusChart />
        <ChartsCard
          width={"32.7%"}
          heading={"قيمة المشاريع / الأقسام الرئيسية"}
          subHeading={"بالنسبة للأقسام وحالة التقدم"}
        >
          <div className="h-40 pt-1">
            <VerticalBarChart
              data={mainSectionValue}
              color={`#17A49A`}
              ticks={[0, 50]}
            />
          </div>
        </ChartsCard>
      </div>
      {/* Section 3 */}
      <div className="flex justify-between w-[100%]">
        <ChartsCard
          width={"49.5%"}
          heading={"قيمة العقود / المرحلة"}
          subHeading={"عرض اجمالي قيم العقود بالنسبة للمراحل المختلفة"}
        >
          <div className="h-40">
            <LineBarChart data={financeStages} labeled color={"#FF965D"} />
          </div>
        </ChartsCard>
        <ChartsCard
          width={"49.5%"}
          heading={"قيمة العقود / الفترة"}
          subHeading={"عرض اجمالي قيم العقود بالنسبة للفترات المختلفة"}
        >
          <div className="h-40">
            <LineBarChart data={contractValue} labeled color={"#304FFD"} />
          </div>
        </ChartsCard>
      </div>
    </section>
  );
};

export default FinancialPerspective;
