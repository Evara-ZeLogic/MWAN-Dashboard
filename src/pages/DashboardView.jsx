import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import mwan from "../assets/png/mwan.png";
import PublicProjectsStatus from "../components/dashboardView/PublicProjectsStatus";

const DashboardView = () => {
  const [tabValue, setTabValue] = useState(0);

  function handleTabChange(event, value) {
    setTabValue(value);
  }
  return (
    <>
      <div className="w-full flex gap-16 border-b-[1px] border-[#D9D9D9] items-center px-2">
        <img src={mwan} alt="mwan" className="w-[180px] h-[40px]" />
        <div>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "transparent",
                textColor: "#FFFFFF",
              },
            }}
            sx={{
              "& button": {
                fontFamily: "Cairo",
                fontSize: "14px",
              },
              "& button.Mui-selected": {
                color: "#178044",
                borderBottom: "2px #178044 solid",
                fontWeight: "bold",
              },
            }}
          >
            <Tab label={<p>حالة المشاريع العامة</p>} />
            <Tab label={<p>المنظور المالي</p>} />
            <Tab label={<p>توزيع المشاريع</p>} />
            <Tab label={<p>توزيع المناطق</p>} />
          </Tabs>
        </div>
      </div>
      <div className={`w-[98%] overflow-y-hidden m-3`}>
        {tabValue === 0 && <PublicProjectsStatus />}
        {tabValue === 1 && <div></div>}
        {tabValue === 2 && <div></div>}
        {tabValue === 3 && <div></div>}
      </div>
    </>
  );
};

export default DashboardView;
