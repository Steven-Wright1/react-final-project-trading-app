import Box from "@mui/material/Box";
import { React } from "react";

export const StockPrices = ({ stocks, favourites }) => {
  return stocks.map(({ data }, index) => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          m: 3,
          bgcolor: "#ffffff",
        }}
        key={index}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {favourites[index]}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <div>high: {data.h} </div>
          <div>low :{data.l} </div>
          <div>open: {data.o} </div>
          <div>close: {data.c}</div>
          <div>% change: {data.pc} %</div>
        </Box>
      </Box>
    );
  });
};
