import Box from "@mui/material/Box";
import { React } from "react";

export const StockPrices = ({ stocks, favourites }) => {
  const commonStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1.2em",
    fontWeight: "bold",
  };

  return stocks.map(({ data }, index) => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          m: 3,
          bgcolor: "#43a3af",
          borderRadius: 3,
          border: 3,
          borderColor: data.dp > 0 ? "#00FF00" : "#D0342C",
        }}
        key={index}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          {favourites[index]}
        </Box>
        <Box sx={{ ...commonStyles }}>
          <Box>high: {data.h.toFixed(2)} </Box>
          <Box>low :{data.l.toFixed(2)} </Box>
        </Box>
        <Box sx={{ ...commonStyles }}>
          <Box>open: {data.o.toFixed(2)} </Box>
          <Box>close: {data.c.toFixed(2)}</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: data.dp && data.dp > 0 ? "#00FF00" : "#D0342C",
            fontWeight: "bold",
            fontSize: "1.4em",
          }}
        >
          % change: {data.dp && data.dp.toFixed(2)} %
        </Box>
      </Box>
    );
  });
};
