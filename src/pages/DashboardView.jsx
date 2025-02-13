import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import mwan from "../assets/png/mwan.png";
import PublicProjectsStatus from "../components/dashboardView/dashboardTabs/publicProjectStatus/PublicProjectsStatus";
import time from "../../src/assets/headerIcons/time.png";
import favorites from "../../src/assets/headerIcons/favorites.png";
import pin from "../../src/assets/headerIcons/pin.png";
import filter from "../../src/assets/headerIcons/filter.png";
import validation from "../../src/assets/headerIcons/validation.png";
import hide from "../../src/assets/headerIcons/hide.png";
import FinancialPerspective from "../components/dashboardView/dashboardTabs/financePerspective/FinancialPerspective.jsx";
import { useDispatch } from "react-redux";
import {
  getAllProjects,
  getProjectSummary,
} from "../store/projects/projectsSlice.js";
import {
  countByMainSection,
  countByStage,
  countByStatus,
  countByStrategicObjective,
} from "../store/projects/countedBySlice.js";

const DashboardView = () => {
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState(0);
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  const imageData = [
    { img: time, alt: "time", hasDivider: false },
    { img: favorites, alt: "favorites", hasDivider: false },
    { img: pin, alt: "pin", hasDivider: false },
    { img: filter, alt: "filter", hasDivider: true },
    { img: validation, alt: "validation", hasDivider: true },
    { img: hide, alt: "hide", hasDivider: false },
  ];
  useEffect(() => {
    const filterType = {
      // page: 1,
      // limit: 1,
      // statusId: 1,
      // mainSectionId:1,
      // contractClassificationId:1,
      // startDate: "2025-01-29",
      // endDate: "2025-02-29",
    };
    dispatch(getAllProjects(filterType));
    dispatch(getProjectSummary(filterType));
    dispatch(countByMainSection(filterType));
    dispatch(countByStatus(filterType));
    dispatch(countByStage(filterType));
    dispatch(countByStrategicObjective(filterType));
  }, [dispatch]);
  return (
    <>
      <div className="w-full flex items-center justify-between border-b-[1px] border-[#414141] px-2">
        <div className="flex ">
          <img src={mwan} alt="mwan" className="w-[180px] h-[40px]" />
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
        <div className={`flex gap-4 flex-row-reverse items-center`}>
          {imageData.map((img, index) => {
            return (
              <div key={index}>
                <button
                  key={index}
                  className={`${
                    img.hasDivider && `pr-4 border-r-[1px] border-[#4E4E4E]`
                  }`}
                >
                  <img
                    src={img.img}
                    alt={img.alt}
                    className="w-[20px] h-[20px]"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`w-[98%] overflow-y-hidden m-3`}>
        {tabValue === 0 && <PublicProjectsStatus />}
        {tabValue === 1 && <FinancialPerspective />}
        {tabValue === 2 && <div></div>}
        {tabValue === 3 && <div></div>}
      </div>
    </>
  );
};

export default DashboardView;
