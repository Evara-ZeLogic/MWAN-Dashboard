import React, { useState } from "react";
import ChartsCard from "./ChartsCard";
import DonutChart from "./charts/DonutChart";
import { Tabs, Tab } from "@mui/material";
import { mainSections, projectStatus } from "../../../data/pmo-data";

const mainSectionsData = mainSections.map((depart) => {
  return {
    id: depart.id,
    label: depart.name,
    value: depart.numOfProject,
  };
});
const projectStausData = projectStatus.map((depart) => {
  return {
    id: depart.id,
    label: depart.name,
    value: depart.numOfProject,
  };
});
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
      {tabValue === 0 && <DonutChart data={mainSectionsData} />}
      {tabValue === 1 && <DonutChart data={projectStausData} />}
    </ChartsCard>
  );
}
