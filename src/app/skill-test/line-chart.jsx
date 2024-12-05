import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer, Cell, Dot } from 'recharts';

const DynamicPercentileGraph = ({ userPercentile }) => {

  const data = [
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
  ];


  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-3xl">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="x"
              ticks={[0, 25, 50, 75, 100]} 
            />
            <YAxis
              ticks={[0, 25, 50, 75, 100]} 
              axisLine={false} 
              tick={false}
            />
            
            <Line
              type="monotone"
              dataKey="y"
              stroke="#A78BFA"
              strokeWidth={1} 
            >
              {/* Add circle dots on all data points */}
              {data.map((point, index) => (
                <Dot key={index} cx={point.x} cy={point.y} r={4} fill="#A78BFA" />
              ))}
            </Line>

            <ReferenceLine
              x={userPercentile}
              stroke="lightgray" 
              strokeWidth={1} 
              label={`Your Score: ${userPercentile}`}
              labelAlignment="center"
              labelPosition="top"
            />
            
            <Tooltip formatter={(value) => [`Percentile: ${value}`, 'Students']} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DynamicPercentileGraph;
