import React, { useState } from "react";
import ChartsCard from "../../dashboardChartCards/ChartsCard";
import VerticalBarChart from "../../dashboardChartCards/charts/VerticalBarChart";
import { MenuItem, Select } from "@mui/material";
import {
  contractConsultCom,
  projectCoordinators,
  projectOwner,
  projectOwnerMWAN,
  subDepart,
} from "../../../../data/pmo-data";
import { Link } from "react-router-dom";
import arrowIcon from "../../../../assets/png/ArrowsOutSimple.png";

const CoordinatorsBarChart = () => {
  const [filterType, setFilterType] = useState(1);
  const handleChange = (event) => {
    setFilterType(event.target.value);
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
            width: "200px",
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
        <Link to="/chart-full" state={filterType}>
          <img
            src={arrowIcon}
            alt="icon"
            className="w-10 h-10 p-2 rounded-lg bg-[#253C25]"
          />
        </Link>
      </div>
    );
  }
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
  const sortData = chartdata().sort((a, b) => b.value - a.value);

  return (
    <ChartsCard
      width={"32.7%"}
      heading={"منسقين المشاريع"}
      subHeading={"عرض المشاريع بالنسبة لأسماء المنسقين"}
      options={<Options />}
    >
      <VerticalBarChart data={sortData.slice(0, 8)} ticks={[0, 50, 100]} />
    </ChartsCard>
  );
};

export default CoordinatorsBarChart;
