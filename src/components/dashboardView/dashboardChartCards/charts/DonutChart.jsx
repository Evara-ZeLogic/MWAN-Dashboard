import { ResponsivePie } from "@nivo/pie";
// import "./DonutChart.css";
export default function DonutChart({ data }) {
  // const colors = ["#304FFD", "#FFD240", "#FD7972", "#FF965D"];
  const colors = [
    "#304FFD", // Blue
    "#FFD240", // Yellow
    "#FD7972", // Red
    "#FF965D", // Orange
    "#4CAF50", // Green
    "#990606", // Dark Red
    "#9C27B0", // Purple
    "#00BCD4", // Cyan
    "#8BC34A", // Light Green
    "#FF5722", // Deep Orange
    "#607D8B", // Blue Grey
    "#E91E63", // Pink
    "#673AB7", // Deep Purple
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  function Tooltip({ datum }) {
    return (
      <div className="p-2 border rounded shadow-md text-sm bg-[#1E1E1E]">
        <span className="flex items-center justify-center gap-1">
          <span
            className="block w-3 h-3 rounded-full"
            style={{ backgroundColor: datum.color }}
          />
          <span>{datum.label}</span>
        </span>
        <span
          className="flex flex-col items-center justify-center text-xs"
          style={{ color: datum.color }}
        >
          <span>{datum.value} </span>
          <span>({((datum.value / total) * 100).toFixed(2)}%)</span>
        </span>
      </div>
    );
  }

  function ArcLinkLabel({ datum }) {
    const percentage = ((datum.value / total) * 100).toFixed(2);

    return (
      <tspan style={{ fontSize: "12px", textAlign: "center", fill: "white" }}>
        <tspan x="0" dy="0em">
          {datum.value}
        </tspan>
        <tspan x="0" dy="1em">
          ({percentage}%)
        </tspan>
      </tspan>
    );
  }

  function CenteredLabel({ centerX, centerY }) {
    return (
      <>
        <text
          x={centerX}
          y={centerY - 10}
          textAnchor="middle"
          dominantBaseline="central"
          className="text-lg font-bold font-cairo"
          fill="white"
        >
          {total}
        </text>
        <text
          x={centerX}
          y={centerY + 10}
          textAnchor="middle"
          dominantBaseline="central"
          className="text-sm"
          fill="white"
        >
          الكل
        </text>
      </>
    );
  }

  const customTheme = {
    legends: {
      text: {
        fontSize: 14,
        fontFamily: "Cairo",
        fill: "#B7B7B7",
      },
    },
  };
  return (
    <section
      className="donut-chart-container h-40"
      // style={{ display: "flex" }}
    >
      {/* Custom Legends */}
      {/* {data.length > 7 && (
        <div
          style={{
            flex: 0.3,
            maxHeight: "350px",
            overflowY: "auto",
            backgroundColor: "red",
            fontSize: 12,
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
              className="gap-2"
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: item.color || "#000", // Use the color from your data
                  marginRight: "1px",
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )} */}

      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 0, bottom: 40, left: -150 }}
        innerRadius={0.76}
        sortByValue={true}
        padAngle={2}
        cornerRadius={3}
        arcLinkLabelsTextOffset={5}
        activeOuterRadiusOffset={5}
        arcLinkLabelsTextColor="rgb(231, 231, 231)"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLinkLabelsStraightLength={15}
        arcLinkLabelsDiagonalLength={15}
        enableArcLabels={false}
        tooltip={({ datum }) => <Tooltip datum={datum} />}
        arcLinkLabel={(datum) => <ArcLinkLabel datum={datum} />}
        colors={colors}
        legends={
          // data.length < 7
          //   ?
          [
            {
              anchor: "bottom",
              direction: "column",
              justify: false,
              translateX: 185,
              translateY: -20,
              itemsSpacing: 12,
              itemWidth: 300,
              itemHeight: 10,
              itemTextColor: "#FFF",
              itemDirection: "right-to-left",
              itemOpacity: 1,
              symbolSize: 15,
              symbolShape: "circle",
              // itemTextStyle: {
              //   fontFamily: "cairo",
              //   fontSize: 16,
              // },
            },
          ]
          // : []
        }
        layers={[
          "arcs",
          "arcLabels",
          "arcLinkLabels",
          "legends",
          ({ centerX, centerY }) => (
            <CenteredLabel centerX={centerX} centerY={centerY} />
          ),
        ]}
        theme={customTheme}
      />
      <style>
        {`
          .nivo-legend {
            max-height: 350px; /* Adjust height */
            overflow-y: auto; /* Enable scrolling */
          }
        `}
      </style>
    </section>
  );
}
