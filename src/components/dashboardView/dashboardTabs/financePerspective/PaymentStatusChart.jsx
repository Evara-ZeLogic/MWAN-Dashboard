import React from "react";
import ChartsCard from "../../dashboardChartCards/ChartsCard";
import MultipleBarChart from "../../dashboardChartCards/charts/MultipleBarChart";
import { mainSectionsFinance } from "../../../../data/finance-data";

const PaymentStatusChart = () => {
  const mainSectionFinance = mainSectionsFinance.map((depart) => {
    return {
      id: depart.id,
      name: depart.name,
      remaining: depart.remaining,
      paid: depart.paid,
      invoiced: depart.invoiced,
    };
  });
  function Option() {
    return (
      <section className="flex gap-3 items-center ml-10">
        <div className="flex gap-1 items-center">
          <div className="w-2 h-2 rounded-full bg-[#009E4F]"></div>
          <p className="text-[#B7B7B7] text-[12px]">المتبقي</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-2 h-2 rounded-full bg-[#045D30]"></div>
          <p className="text-[#B7B7B7] text-[12px]">المنصرف</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-2 h-2 rounded-full bg-[#06321C]"></div>
          <p className="text-[#B7B7B7] text-[12px]">المفوتر</p>
        </div>
      </section>
    );
  }
  return (
    <ChartsCard
      width={"66.5%"}
      heading={"حالة الصرف / الأقسام الرئيسية"}
      subHeading={"عرض اجمالي قيم المشاريع بالنسبة للإدارات المختلفة"}
      options={<Option />}
    >
      <div className="h-40">
        <MultipleBarChart data={mainSectionFinance} labeled />
      </div>
    </ChartsCard>
  );
};

export default PaymentStatusChart;
