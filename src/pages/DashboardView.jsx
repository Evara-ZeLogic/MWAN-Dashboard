import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import mwan from "../assets/png/mwan.png";
import PublicProjectsStatus from "../components/dashboardView/PublicProjectsStatus";
import time from "../../src/assets/headerIcons/time.png";
import favorites from "../../src/assets/headerIcons/favorites.png";
import searchDocs from "../../src/assets/headerIcons/search.png";
import pin from "../../src/assets/headerIcons/pin.png";
import filter from "../../src/assets/headerIcons/filter.png";
import validation from "../../src/assets/headerIcons/validation.png";
import hide from "../../src/assets/headerIcons/hide.png";

const DashboardView = () => {
  const [tabValue, setTabValue] = useState(0);

  function handleTabChange(event, value) {
    setTabValue(value);
  }

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
        <div className="flex gap-4">
          <button>
            <img src={hide} alt="Hide" className="w-[20px] h-[20px]" />
          </button>

          <div className="w-[5px] h-[25px] border-l-[2px] border-[#4E4E4E]"></div>

          <button>
            <img
              src={validation}
              alt="Validation"
              className="w-[20px] h-[20px]"
            />
          </button>

          <div className="w-[5px] h-[25px] border-l-[2px] border-[#4E4E4E]"></div>
          <button>
            <img src={filter} alt="Filter" className="w-[20px] h-[20px]" />
          </button>
          <button>
            <img src={pin} alt="Pin" className="w-[20px] h-[20px]" />
          </button>
          <button>
            <img
              src={searchDocs}
              alt="Search Docs"
              className="w-[20px] h-[20px]"
            />
          </button>
          <button>
            <img
              src={favorites}
              alt="Favorites"
              className="w-[20px] h-[20px]"
            />
          </button>
          <button>
            <img src={time} alt="Time" className="w-[20px] h-[20px]" />
          </button>
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
