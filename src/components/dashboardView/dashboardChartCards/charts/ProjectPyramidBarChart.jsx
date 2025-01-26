import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { projectStages } from "../../../../data/pmo-data";

const chartData = projectStages.map((depart) => {
  return {
    id: depart.id,
    name: depart.name,
    value: depart.numOfProject,
    background: 100,
  };
});
const data = chartData.sort((a, b) => a.value - b.value);

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

export default function ProjectPyramidBarChart() {
  const truncateName = (name) => {
    if (name.length > 13) {
      return `${name.substring(0, 13)}...`;
    }
    return name;
  };

  const formatXAxisTick = (value) => {
    if (value === 100) {
      return `${value}%`;
    }
    return value;
  };

  const renderYAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <rect
          x={3}
          y={-6}
          width={10}
          height={10}
          fill="#009E4F"
          rx={5}
          ry={5}
        />
        <text
          x={0}
          y={0}
          dy={4}
          textAnchor="start"
          fill="#B7B7B7"
          fontSize={12}
        >
          {truncateName(payload.value)}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer height={160} className="w-full">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 0, right: 15, left: 15, bottom: 0 }}
        barGap={-14}
      >
        <XAxis
          type="number"
          ticks={[0, 100]}
          fontSize={14}
          tickFormatter={formatXAxisTick}
        />
        <YAxis
          type="category"
          dataKey="name"
          orientation="right"
          tickMargin={100}
          interval={0}
          axisLine={false}
          tickLine={false}
          tick={renderYAxisTick}
          width={120}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="background"
          radius={[8, 8, 8, 8]}
          shape={(props) => {
            const { y, height } = props;
            return (
              <rect
                x={100}
                y={y + 1}
                width={370}
                height={height}
                fill="#009E4F"
                opacity={0.2}
                rx={8}
                ry={8}
                style={{ transform: "translateX(-85px)" }}
              />
            );
          }}
        />
        <Bar
          dataKey="value"
          radius={[8, 8, 8, 8]}
          shape={(props) => {
            const { x, y, width, height } = props;
            return (
              <rect
                x={x - width / 2}
                y={y}
                width={width}
                height={height}
                fill="#009E4F"
                rx={8}
                ry={8}
                style={{ transform: "translateX(185px)" }}
              />
            );
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
