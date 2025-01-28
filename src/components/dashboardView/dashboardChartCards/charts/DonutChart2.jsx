import React, { useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export default function DonutChart2({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const colors = [
    "#304FFD",
    "#FFD240",
    "#FD7972",
    "#FF965D",
    "#4CAF50",
    "#990606",
    "#9C27B0",
    "#00BCD4",
    "#8BC34A",
    "#FF5722",
    "#607D8B",
    "#E91E63",
    "#673AB7",
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      percent,
      value,
    } = props;

    const sin = Math.sin((-RADIAN * (startAngle + endAngle)) / 2);
    const cos = Math.cos((-RADIAN * (startAngle + endAngle)) / 2);
    const sx = cx + outerRadius * cos;
    const sy = cy + outerRadius * sin;
    const mx = cx + (outerRadius + 10) * cos;
    const my = cy + (outerRadius + 10) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;

    return (
      <g>
        <text x={cx} y={cy - 10} textAnchor="middle" fill="#FFF" fontSize="16">
          {total}
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#FFF" fontSize="12">
          الكل
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= -0 ? 1 : -1) * 2}
          y={ey}
          textAnchor={cos >= 0 ? "end" : "start"}
          fill="#FFF"
          fontSize="12"
        >
          {`${value} (${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <div style={{ width: "500px", height: "168px", display: "flex" }}>
      <div style={{ padding: "2px" }}>
        {data.map((entry, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "4px",
              gap: "5px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: colors[index % colors.length],
              }}
            ></div>
            <span
              className="truncate w-24"
              style={{
                fontSize: "12px",
              }}
            >
              {entry.label}
            </span>
          </div>
        ))}
      </div>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={70}
            fill="#8884d8"
            onMouseEnter={onPieEnter}
            labelLine={false}
            label={renderActiveShape}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
