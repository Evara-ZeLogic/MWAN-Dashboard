import React from "react";

export default function DashboardTable({ projects }) {
  const renderedTableBody = projects.map((item, index) => {
    const backgroundColor = index % 2 === 0 ? "bg-[#1E1E1E]" : "bg-[#192A19]";
    const borderBottomClass = index + 1 === projects.length ? "" : "border-b";

    return (
      <tr key={item.projectId} className={backgroundColor}>
        {[
          index + 1,
          item.projectName,
          item.projectId,
          item.contractRefNum,
          item.projectStatus,
          item.executingCompany,
          item.currentDuration,
          item.updateDate,
          item.paymentPercentage,
        ].map((cellContent, cellIndex) => (
          <td
            key={cellIndex}
            className={`px-4 py-2 border-gray-300 ${
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
    <table className="w-full table-auto border-collapse text-center border-[1px]">
      <thead>
        <tr className="sticky top-[-1px] bg-[#1E1E1E] z-10 font-semibold ">
          <th className="px-4 py-2 border-l border-b border-gray-300">م</th>
          <th className="px-4 py-2 border-l border-r border-b border-gray-300">
            اسم المشروع
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-gray-300">
            رمز المشروع
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-gray-300">
            الرقم المرجعي للعقد
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-gray-300">
            حالة المشروع
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-gray-300">
            المقاول / الشركة الاستشارية المنفذة
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-gray-300">
            مدة المشروع الحالية
          </th>
          <th className="px-4 py-2 border-l border-r border-b border-gray-300">
            تاريخ التحديث
          </th>
          <th className="px-4 py-2 border-b border-r border-gray-300">
            نسبة الصرف
          </th>
        </tr>
      </thead>
      <tbody>{renderedTableBody}</tbody>
    </table>
  );
}
