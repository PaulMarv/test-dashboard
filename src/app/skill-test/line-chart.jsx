import React, { useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DynamicPercentileGraph = ({ userPercentile, chartKey }) => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    axisX: {
      interval: 25,
      minimum: 0,
      maximum: 100,
      stripLines: [
        {
          value: userPercentile,
          thickness: 1,
          color: "lightgray",
          label: `Your Score percentile`,
          labelAlign: "center",
          labelFontColor: "lightgray",
          labelPlacement: "inside",
          labelFontSize: 14,
        },
      ],
    },
    axisY: {
      gridThickness: 0,
      labelFormatter: () => "",
      lineThickness: 0,
    },
    data: [
      {
        type: "spline",
        lineThickness: 1,
        markerType: "circle",
        markerSize: 12,
        markerBorderColor: "#A78BFA",
        markerColor: "transparent",
        toolTipContent: "Percentile: {x}%<br>Students: {y}",
        dataPoints: [
          { x: 0, y: 50 },
          { x: 5, y: 70 },
          { x: 10, y: 100 },
          { x: 15, y: 130 },
          { x: 20, y: 150 },
          { x: 25, y: 180 },
          { x: 30, y: 250 },
          { x: 35, y: 300 },
          { x: 40, y: 320 },
          { x: 45, y: 250 },
          { x: 50, y: 220 },
          { x: 55, y: 200 },
          { x: 60, y: 250 },
          { x: 65, y: 270 },
          { x: 70, y: 250 },
          { x: 75, y: 180 },
          { x: 80, y: 160 },
          { x: 85, y: 140 },
          { x: 90, y: 100 },
          { x: 95, y: 70 },
          { x: 100, y: 50 },
        ].map((point) => ({
          ...point,
          markerColor: point.x === userPercentile ? "#A78BFA" : "transparent",
          markerBorderColor: "#A78BFA",
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-3xl">
        <CanvasJSChart key={chartKey} options={options} />
      </div>
    </div>
  );
};

export default DynamicPercentileGraph;
