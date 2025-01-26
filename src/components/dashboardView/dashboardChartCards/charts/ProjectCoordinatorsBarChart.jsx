import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ProjectCoordinatorsBarChart({ data, height }) {
  console.log("first", data);
  // const sortData = data.sort((a, b) => b.value - a.value);

  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      const { name, value } = payload[1]?.payload || {};
      return (
        <div className="bg-[#1E1E1E] p-3 rounded-md text-right shadow-lg">
          <p className="m-0 font-bold text-[12px]">{name}</p>
          <p className="m-0 text-[#28A745] text-[12px]">القيمة: {value}</p>
        </div>
      );
    }

    return null;
  }
  const truncateName = (name) => {
    if (name.length > 11) {
      return `${
        data.length > 8
          ? `${name.substring(0, 25)}... `
          : `${name.substring(0, 12)}... `
      }`;
    }
    return name;
  };

  return (
    <ResponsiveContainer
      height={data.length > 8 ? 800 : 180}
      className="w-full bg-transparent"
    >
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 0, right: 0, left: 5, bottom: 0 }}
        barGap={-14}
      >
        <XAxis type="number" ticks={[0, 50, 100]} fontSize={14} />
        <YAxis
          type="category"
          dataKey="name"
          orientation="right"
          tickMargin={data.length > 8 ? 180 : 100}
          tick={{ fill: "#c7c6c6", fontSize: 12 }}
          interval={0}
          axisLine={false}
          tickLine={false}
          tickFormatter={truncateName}
          width={data.length > 8 ? 200 : 110}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="background"
          fill="#009E4F"
          opacity={0.2}
          barSize={14}
          radius={[8, 8, 8, 8]}
        />
        <Bar
          dataKey="value"
          fill="#009E4F"
          barSize={14}
          radius={[8, 8, 8, 8]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
