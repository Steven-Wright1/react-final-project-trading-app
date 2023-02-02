import React from "react";
import Box from "@mui/material/Box";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

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
          colour: "#ffffff",
          borderColor: "#f8a4d8",
          borderRadius: 5,
          fontSize: "2rem",
          fontWeight: "700",
          justifyContent: "space-between",
        }}
      >
        <div>{favourite}</div>
        <RemoveCircleOutlineIcon
          sx={{ fontSize: 60, color: "red" }}
          name={favourite}
          onClick={() => handleRemove(favourite)}
        />
      </Box>
    );
  });
};
