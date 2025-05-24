import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const StockTable = ({ stocks }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.symbol}>
              <TableCell>{stock.symbol}</TableCell>
              <TableCell>{stock.name}</TableCell>
              <TableCell>${stock.price}</TableCell>
              <TableCell>{stock.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockTable;
