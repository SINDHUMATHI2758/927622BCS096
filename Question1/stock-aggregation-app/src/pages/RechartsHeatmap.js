import React from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Scatter,
} from "recharts";
import { rechartsData, tickers } from "../data/correlationForRecharts";
import { Box, Typography } from "@mui/material";

const getColor = (value) => {
  const blue = 255 - Math.round(value * 255);
  return `rgb(${blue}, ${blue}, 255)`;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { x, y, value } = payload[0].payload;
    return (
      <Box sx={{ backgroundColor: "white", p: 1, border: "1px solid #ccc" }}>
        <Typography variant="body2">
          {x} & × {y}
        </Typography>
        <Typography variant="caption">Correlation: {value}</Typography>
      </Box>
    );
  }
  return null;
};

const RechartsHeatmap = () => {
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Recharts Correlation Heatmap
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis type="category" dataKey="x" name="X" />
          <YAxis type="category" dataKey="y" name="Y" />
          <ZAxis type="number" dataKey="value" range={[100, 500]} />
          <Tooltip content={<CustomTooltip />} />
          <Scatter
            data={rechartsData}
            shape={(props) => {
              const { cx, cy, payload } = props;
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={20}
                  fill={getColor(payload.value)}
                  stroke="#333"
                />
              );
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RechartsHeatmap;
