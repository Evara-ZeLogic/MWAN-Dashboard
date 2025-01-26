import React from "react";
import ChartsCard from "./ChartsCard";
import LineBarChart from "./charts/LineBarChart";
import { projectWallet } from "../../../data/pmo-data";

const DistributionComboChart = () => {
  const data = [
    { name: "تمكين المركز", value: 5, lineValue: 5, background: 20 },
    { name: "ادارة التعاون المركز", value: 20, lineValue: 20, background: 20 },
    { name: "تنظيم قطاع إدارة", value: 10, lineValue: 10, background: 20 },
    {
      name: "تعزيز الجاذبية الاستثمارية",
      value: 15,
      lineValue: 15,
      background: 20,
    },
    {
      name: "تعزيز السلوكيات السليمة",
      value: 10,
      lineValue: 10,
      background: 20,
    },
    { name: "اضافة السلوكيات السليمة", value: 8, lineValue: 8, background: 20 },

    {
      name: "تحقيق التحول الرقمي في القطاع",
      value: 12,
      lineValue: 12,
      background: 20,
    },
  ];
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
        <LineBarChart data={chartData} />
      </div>
    </ChartsCard>
  );
};

export default DistributionComboChart;
