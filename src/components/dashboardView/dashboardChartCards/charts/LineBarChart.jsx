import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const { name, value, lineValue } = payload[1]?.payload || {};
    return (
      <div className="bg-[#1E1E1E] p-3 rounded-md text-right shadow-lg">
        <p className="m-0 font-bold text-[12px]">{name}</p>
        <p className="m-0 text-[#28A745] text-[12px]">القيمة: {value}</p>
        <p className="m-0 text-[#28A745] text-[12px]">قيمة الخط: {lineValue}</p>
      </div>
    );
  }

  return null;
}

function CustomXAxisTick({ x, y, payload }) {
  const formatLabel = (label) => {
    const words = label.split(" ");
    let lines = [];
    let currentLine = "";

    words.forEach((word) => {
      if ((currentLine + word).length <= 8) {
        currentLine += `${word} `;
      } else {
        lines.push(currentLine.trim());
        currentLine = `${word} `;
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    if (lines.join("\n").length > 12) {
      return lines.slice(0, 2).join("\n") + "...";
    }

    return lines.join("\n");
  };

  const renderTextLines = (text, x, y) => {
    return text.split("\n").map((line, index) => (
      <text
        key={index}
        x={x}
        y={y + index * 14}
        fontSize={12}
        fill="#B7B7B7"
        textAnchor="middle"
      >
        {line}
      </text>
    ));
  };

  const formattedLabel = formatLabel(payload.value);

  return (
    <g transform={`translate(${x},${y})`}>
      {renderTextLines(formattedLabel, 0, 0)}
    </g>
  );
}

const renderCustomizedLabel = (customValue) => (props) => {
  const { x, y, width } = props;

  return (
    <g>
      <circle cx={x + width / 2} cy={y} fillOpacity={0} />
      <text
        x={x + width / 2}
        y={y - 14}
        fill="#009E4F"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {customValue}
      </text>
    </g>
  );
};

export default function LineBarChart({ data, labeled }) {
  return (
    <ResponsiveContainer height={160} className="w-full translate-x-8">
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 0, left: 20, bottom: 20 }}
        barCategoryGap="0%"
        barGap={-14}
      >
        <CartesianGrid strokeDasharray="5 0" vertical={false} />
        <XAxis
          dataKey="name"
          tick={<CustomXAxisTick />}
          tickMargin={15}
          interval={0}
          reversed={true}
        />
        <YAxis
          orientation="right"
          tickMargin={20}
          ticks={[0, 10, 20]}
          tick={{ fill: "#B7B7B7" }}
          fontSize={12}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="background"
          fill="#009E4F"
          opacity={0.2}
          barSize={14}
          radius={[8, 8, 8, 8]}
        >
          {labeled && (
            <LabelList dataKey="name" content={renderCustomizedLabel("2.5M")} />
          )}
        </Bar>
        <Bar
          dataKey="value"
          fill="#009E4F"
          barSize={14}
          radius={[8, 8, 8, 8]}
        />
        <Line
          type="monotone"
          dataKey="lineValue"
          stroke="#3F434A"
          strokeWidth={1}
          dot={{ r: 0 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
