import React from "react";
import Box from "@mui/material/Box";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export const StockFaves = ({ favourites }) => {
  return favourites.map((favourite) => {
    return (
      <Box
        sx={{
          display: "flex",
          m: 1,
          p: 1,
          colour: "#ffffff",
          borderColor: "#f8a4d8",
          borderRadius: 5,
          fontSize: "2rem",
          fontWeight: "700",
          justifyContent: "space-between",
        }}
      >
        <div>{favourite}</div>
        <RemoveCircleOutlineIcon sx={{ fontSize: 60, color: "red" }} />
      </Box>
    );
  });
};
