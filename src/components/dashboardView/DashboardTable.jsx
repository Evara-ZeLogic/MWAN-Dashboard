import React from "react";
import { useSelector } from "react-redux";

export default function DashboardTable() {
  // { projects }
  const { projects } = useSelector((state) => state.pmoProjects);
  const renderedTableBody = projects?.map((item, index) => {
    const backgroundColor = index % 2 === 0 ? "bg-[#1E1E1E]" : "bg-[#192A19]";
    const borderBottomClass = index + 1 === projects.length ? "" : "border-b";

    return (
      <tr key={item.id} className={backgroundColor}>
        {[
          index + 1,
          item.name,
          item.projectCode,
          item.contractReference,
          item.status?.name,
          item.consultingCompany?.name,
          item.currentProjectDuration,
          item.updatedAt ? item.updatedAt : "",
          item.invoicingPercentage,
        ].map((cellContent, cellIndex) => (
          <td
            key={cellIndex}
            className={`px-4 py-2 border-[#2E2E2E] border-b ${
              cellIndex === 0 || cellIndex === 8 ? "" : "border-l border-r"
            } ${borderBottomClass}`}
          >
            {cellContent}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <table className="w-full table-auto border-collapse text-center border-x-[1px] border-x-[#2E2E2E]">
      <thead>
        <tr className="sticky top-[-1px] bg-[#1E1E1E] z-10 font-semibold ">
          <th className="px-4 py-2 border-l border-b border-[#2E2E2E] ">م</th>
          <th className="px-4 py-2 border-l border-r border-b border-[#2E2E2E]">
            اسم المشروع
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-[#2E2E2E]">
            رمز المشروع
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-[#2E2E2E]">
            الرقم المرجعي للعقد
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-[#2E2E2E]">
            حالة المشروع
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-[#2E2E2E]">
            المقاول / الشركة الاستشارية المنفذة
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-[#2E2E2E]">
            مدة المشروع الحالية
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-[#2E2E2E]">
            تاريخ التحديث
          </th>
          <th className="px-4 py-2 border-b border-r border-[#2E2E2E]">
            نسبة الصرف
          </th>
        </tr>
      </thead>
      <tbody>{renderedTableBody}</tbody>
    </table>
  );
}
