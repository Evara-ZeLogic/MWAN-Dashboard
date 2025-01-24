import React, { useState } from "react";
import ChartsCard from "./ChartsCard";
import DonutChart from "./charts/DonutChart";
import { Tabs, Tab } from "@mui/material";

const sectionsData = [
  { id: 1, label: "نائب الرئيس", value: 333 },
  { id: 2, label: "فارغ", value: 100 },
  { id: 3, label: "نائب الرئيس", value: 190 },
  { id: 4, label: "الرئيس الثاني", value: 228 },
];
const projectStausData = [
  { id: 1, label: "اعداد كراسة الشروط", value: 260 },
  { id: 2, label: "الاشعار بالترسية", value: 200 },
  { id: 3, label: "تم الإلغاء", value: 120 },
  { id: 4, label: "توقيع العقود", value: 308 },
];

export default function DistributionDoughnutChart() {
  const [tabValue, setTabValue] = useState(0);

  function Options() {
    return (
      <Tabs
        value={tabValue}
        onChange={(_, e) => setTabValue(e)}
        className="border border-[#28A745] w-44 rounded-full px-1 flex items-center justify-center"
        TabIndicatorProps={{
          style: {
            backgroundColor: "unset",
          },
        }}
        sx={{
          "& .MuiTabs-flexContainer": {
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          },
          "& button": {
            fontFamily: "Cairo, sans-serif",
            fontSize: "12px",
            color: "#727272",
            padding: "12px 11px",
            minWidth: "unset",
            minHeight: "unset",
          },
          "& button.Mui-selected": {
            color: "#28A745",
            fontWeight: "bold",
            background: "rgba(40, 167, 70, 0.25)",
            borderRadius: "9999px",
          },
        }}
      >
        <Tab label="الاقسام" />
        <Tab label="حالة المشاريع" />
      </Tabs>
    );
  }

  return (
    <ChartsCard
      width={"32.7%"}
      heading={"توزيع المشاريع"}
      subHeading={"بالنسبة للأقسام وحالة التقدم"}
      options={<Options />}
    >
      {tabValue === 0 && <DonutChart data={sectionsData} />}
      {tabValue === 1 && <DonutChart data={projectStausData} />}
    </ChartsCard>
  );
}
