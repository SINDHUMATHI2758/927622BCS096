import React from "react";
import { Container, Typography, Box, Tooltip } from "@mui/material";
import { correlationMatrix } from "../data/correlation";
import "./Heatmap.css";

const getColor = (value) => {
  if (value === "-" || typeof value !== "number") return "#e0e0e0";
  const intensity = Math.round(255 - value * 255);
  return `rgb(${intensity}, ${intensity}, 255)`;
};

const HeatmapPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Correlation Heatmap
      </Typography>
      <Box className="heatmap-grid">
        {correlationMatrix.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isLabel = rowIndex === 0 || colIndex === 0;
            const displayValue =
              typeof cell === "number" ? cell.toFixed(2) : cell;

            return (
              <Tooltip
                key={`${rowIndex}-${colIndex}`}
                title={isLabel ? "" : `Corr: ${displayValue}`}
                arrow
                disableHoverListener={isLabel}
              >
                <Box
                  className="heatmap-cell"
                  sx={{
                    backgroundColor: getColor(cell),
                    fontWeight: isLabel ? "bold" : "normal",
                  }}
                >
                  {displayValue}
                </Box>
              </Tooltip>
            );
          })
        )}
      </Box>
      <Box mt={4}>
        <Typography variant="body2" mb={1}>
          Correlation Scale
        </Typography>
        <Box
          sx={{
            height: "20px",
            width: "300px",
            background:
              "linear-gradient(to right, rgb(255,255,255), rgb(0,0,255))",
            border: "1px solid #ccc",
          }}
        />
        <Box display="flex" justifyContent="space-between" width="300px">
          <Typography variant="caption">0</Typography>
          <Typography variant="caption">1</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HeatmapPage;
