import React from "react";
import { Container, Typography } from "@mui/material";
import StockTable from "../components/StockTable";
import { mockStocks } from "../data/stocks";

const StockPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Stock Overview
      </Typography>
      <StockTable stocks={mockStocks} />
    </Container>
  );
};

export default StockPage;
