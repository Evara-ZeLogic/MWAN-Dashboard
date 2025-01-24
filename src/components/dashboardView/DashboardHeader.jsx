import React from "react";
import { MenuItem, Select } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DashboardHeader = () => {
  const section = [
    { name: "section one", id: 1 },
    { name: "section two", id: 2 },
    { name: "section three", id: 3 },
    { name: "section four", id: 4 },
    { name: "section five", id: 5 },
  ];
  return (
    <header className="flex justify-between">
      <section>
        <p className="text-[16px] font-bold">إدارة مشروعات المركز الوطني</p>
        <p className="text-[12px] text-[#c7c6c6]">
          رؤية شاملة عن جميع المشروعات من منظور عام لجميع القطاعات
        </p>
      </section>
      <section className="flex justify-between w-[500px]">
        <div>
          <p className="text-[12px] text-[#c7c6c6]">الأقسام</p>
          <Select
            labelId="section-label"
            id="section"
            value="الكل"
            sx={{
              fontFamily: "Cairo",
              fontSize: "12px",
              height: "35px",
              width: "100px",
              bgcolor: "#f8fafc",
              borderRadius: "8px",
              backgroundColor: "#1E1E1E",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            {section?.map((option) => (
              <MenuItem
                key={option.id}
                value={option.id}
                sx={{ fontFamily: "Cairo", fontSize: "14px" }}
              >
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <p className="text-[12px] text-[#c7c6c6]">فترة العرض</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{
                fontFamily: "Cairo",
                fontSize: "12px",
                height: "35px",
                width: "150px",
                borderRadius: "8px",
                backgroundColor: "#1E1E1E",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              slotProps={{
                textField: {
                  InputProps: {
                    sx: {
                      "& .MuiInputBase-input": {
                        padding: "4px",
                      },
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </div>
        <div>
          <p className="text-[12px] text-[#c7c6c6]">حالة المشاريع</p>
          <Select
            labelId="section-label"
            id="section"
            label="حالة المشاريع"
            value="حالة المشاريع"
            sx={{
              fontFamily: "Cairo",
              fontSize: "12px",
              height: "35px",
              width: "100px",
              borderRadius: "8px",
              backgroundColor: "#1E1E1E",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            {section?.map((option) => (
              <MenuItem
                key={option.id}
                value={option.id}
                sx={{ fontFamily: "Cairo", fontSize: "14px" }}
              >
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <p className="text-[12px] text-[#c7c6c6]">تصنيف التعاقد</p>
          <Select
            labelId="section-label"
            id="section"
            label="تصنيف التعاقد"
            value="تصنيف التعاقد"
            sx={{
              fontFamily: "Cairo",
              fontSize: "12px",
              height: "35px",
              width: "100px",
              borderRadius: "8px",
              backgroundColor: "#1E1E1E",

              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            {section?.map((option) => (
              <MenuItem
                key={option.id}
                value={option.id}
                sx={{ fontFamily: "Cairo", fontSize: "14px" }}
              >
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </section>
    </header>
  );
};

export default DashboardHeader;
