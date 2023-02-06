import Box from "@mui/material/Box";
import { React } from "react";

export const StockPrices = ({ stocks, favourites, setStocks }) => {
  return stocks.map((stock) => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          m: 3,
          bgcolor: "#ffffff",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {stock.name.favourite}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <div>high: {stock.h} </div>
          <div>low :{stock.l} </div>
          <div>open: {stock.o} </div>
          <div>close: {stock.c}</div>
          <div>% change: {stock.pc} %</div>
        </Box>
      </Box>
    );
  });
};
