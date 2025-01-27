import React, { useState } from "react";
import { Link } from "react-router-dom";
import collapse from "../assets/png/collapse.png";
import { MenuItem, Select } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  contractConsultCom,
  projectCoordinators,
  projectOwner,
  projectOwnerMWAN,
  subDepart,
} from "../data/pmo-data";
import ProjectCoordinatorsBarChart from "../components/dashboardView/dashboardChartCards/charts/ProjectCoordinatorsBarChart";

const ChartFullScreen = () => {
  const location = useLocation();
  const filteredBy = location.state;

  const [filterType, setFilterType] = useState(filteredBy);
  const handleChange = (event) => {
    setFilterType(event.target.value);
  };
  const coordinators = projectCoordinators.map((depart) => {
    return {
      id: depart.id,
      name: depart.name,
      value: depart.numOfProject,
      background: 100,
    };
  });
  const contractConsultCompany = contractConsultCom.map((depart) => {
    return {
      id: depart.id,
      name: depart.name,
      value: depart.numOfProject,
      background: 100,
    };
  });
  const projectOwnersData = projectOwner.map((depart) => {
    return {
      id: depart.id,
      name: depart.name,
      value: depart.numOfProject,
      background: 100,
    };
  });
  const mwanOwnerData = projectOwnerMWAN.map((depart) => {
    return {
      id: depart.id,
      name: depart.name,
      value: depart.numOfProject,
      background: 100,
    };
  });
  const subDepartData = subDepart.map((depart) => {
    return {
      id: depart.id,
      name: depart.name,
      value: depart.numOfProject,
      background: 100,
    };
  });
  const chartdata = () => {
    if (filterType === 1) {
      return contractConsultCompany;
    } else if (filterType === 2) {
      return projectOwnersData;
    } else if (filterType === 3) {
      return mwanOwnerData;
    } else if (filterType === 4) {
      return coordinators;
    } else if (filterType === 5) {
      return subDepartData;
    } else {
      return [];
    }
  };
  function Options() {
    const filterList = [
      { id: 1, name: "المقاول / الشركة الإستشارية المنفذة" },
      { id: 2, name: "مالك المشروع" },
      { id: 3, name: "مدير المشروع (موان)" },
      { id: 4, name: "منسق المشروع" },
      { id: 5, name: "الادارة الفرعية / الوحدة" },
    ];
    return (
      <div className="flex gap-2 mb-1">
        {/* <p className="text-[12px] text-[#c7c6c6]">الأقسام</p> */}
        <Select
          labelId="filter-label"
          id="filterList"
          value={filterType}
          label={filterType}
          onChange={handleChange}
          sx={{
            fontFamily: "Cairo",
            fontSize: "12px",
            height: "40px",
            width: "300px",
            bgcolor: "#f8fafc",
            borderRadius: "8px",
            backgroundColor: "#121212",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          {filterList?.map((option) => (
            <MenuItem
              key={option.id}
              value={option.id}
              sx={{ fontFamily: "Cairo", fontSize: "14px" }}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
        <Link to="/">
          <img
            src={collapse}
            alt="icon"
            className="w-10 h-10 p-2 rounded-lg bg-[#253C25]"
          />
        </Link>
      </div>
    );
  }
  const sortData = chartdata().sort((a, b) => b.value - a.value);

  return (
    <section
      className={`h-[98vh] w-[99%] bg-[#1E1E1E] m-2 flex p-3 rounded-lg flex-col`}
    >
      <header className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-[16px] font-bold">منسقين المشاريع</p>
          <p className="text-[14px] text-[#c7c6c6]">
            عرض المشاريع بالنسبة لأسماء المنسقين
          </p>
        </div>
        <Options />
      </header>
      <main>
        <ProjectCoordinatorsBarChart data={sortData} />
      </main>
    </section>
  );
};

export default ChartFullScreen;
