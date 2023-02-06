import React from "react";
import Box from "@mui/material/Box";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
/*import TrendingUpIcon from "@mui/icons-material/TrendingUp";*/
/*import LozArrow from "../Images/loz.PNG";*/

export const StockFaves = ({ favourites, setFavourites }) => {
  const handleRemove = (event) => {
    const favouritesFromLS = getFromLocalStorage("favourites", []);
    const newFavourites = favouritesFromLS.filter((each) => {
      return each !== event;
    });
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
    setFavourites(newFavourites);
  };

  return favourites.map((favourite) => {
    return (
      <Box
        sx={{
          display: "flex",
          m: 1,
          p: 1,
          bgcolor: "#ffffff",
          borderRadius: 5,
          fontSize: "2rem",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ fontWeight: "bold" }}>{favourite}</Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <RemoveCircleOutlineIcon
            sx={{ fontSize: 30, color: "red" }}
            name={favourite}
            onClick={() => handleRemove(favourite)}
          />
        </Box>
      </Box>
    );
  });
};
