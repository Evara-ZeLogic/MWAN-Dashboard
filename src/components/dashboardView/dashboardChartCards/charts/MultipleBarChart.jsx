import React from "react";
import {
  ComposedChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const { name, remaining, paid, invoiced } = payload[1]?.payload || {};
    return (
      <div className="bg-[#1E1E1E] p-3 rounded-md text-right shadow-lg">
        <p className="m-0 font-bold text-[12px]">{name}</p>
        <p className="m-0 text-[#009E4F] text-[12px]">المتبقي: {remaining}</p>
        <p className="m-0 text-[#045D30] text-[12px]">المنصرف: {paid}</p>
        <p className="m-0 text-[#001109] text-[12px]">المفوتر: {invoiced}</p>
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
      if ((currentLine + word).length <= 12) {
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

const renderCustomizedLabel = (customValue, fill) => (props) => {
  const { x, y, width } = props;

  return (
    <g>
      <circle cx={x + width / 2} cy={y} fillOpacity={0} />
      <text
        x={x + width + 2}
        y={y + 6}
        fill={fill}
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(-90, ${x}, ${y})`}
      >
        {customValue}
      </text>
    </g>
  );
};

const MultipleBarChart = ({ data, labeled }) => {
  return (
    <ResponsiveContainer height={170} className="w-full translate-x-8">
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
        barCategoryGap="0%"
        // barGap={2}
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
          fontSize={-20}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="invoiced"
          fill="#06321C"
          barSize={14}
          radius={[8, 8, 8, 8]}
        >
          {labeled && (
            <LabelList
              dataKey="invoiced"
              content={renderCustomizedLabel("2.5M", "#06321C")}
            />
          )}
        </Bar>

        <Bar dataKey="paid" fill="#045D30" barSize={14} radius={[8, 8, 8, 8]}>
          {labeled && (
            <LabelList
              dataKey="paid"
              content={renderCustomizedLabel("2.5M", "#045D30")}
            />
          )}
        </Bar>
        <Bar
          dataKey="remaining"
          fill="#009E4F"
          barSize={14}
          radius={[8, 8, 8, 8]}
        >
          {labeled && (
            <LabelList
              dataKey="remaining"
              content={renderCustomizedLabel("2.5M", "#009E4F")}
            />
          )}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default MultipleBarChart;
