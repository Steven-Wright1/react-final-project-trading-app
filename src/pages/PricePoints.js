import { React, useEffect, useState } from "react";
import { StockPrices } from "../components/StockPrices";
import Container from "@mui/material/Container";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const PricePoints = () => {
  const [favourites, setFavourites] = useState(
    getFromLocalStorage("favourites", [])
  );

  return (
    <Container>
      <div>PricePoints</div>
      <StockPrices favourites={favourites} />
    </Container>
  );
};
