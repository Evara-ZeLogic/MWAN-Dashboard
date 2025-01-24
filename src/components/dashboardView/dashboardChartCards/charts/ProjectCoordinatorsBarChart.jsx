import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "زبيدة جستنية", value: 10, background: 100 },
  { name: "سمية الشوامين", value: 20, background: 100 },
  { name: "تقي سامح", value: 50, background: 100 },
  { name: "أحمد مصطفي", value: 70, background: 100 },
  { name: "محمد العجمي", value: 85, background: 100 },
  { name: "محمد أشرف", value: 100, background: 100 },
].sort((a, b) => b.value - a.value);

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

export default function ProjectCoordinatorsBarChart() {
  const truncateName = (name) => {
    if (name.length > 11) {
      return `${name.substring(0, 11)}...`;
    }
    return name;
  };

  return (
    <ResponsiveContainer height={160} className="w-full bg-transparent">
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
          tickMargin={100}
          tick={{ fill: "#c7c6c6", fontSize: 12 }}
          interval={0}
          axisLine={false}
          tickLine={false}
          tickFormatter={truncateName}
          width={110}
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
