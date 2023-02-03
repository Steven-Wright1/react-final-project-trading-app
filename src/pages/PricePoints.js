import { React, useEffect, useState } from "react";
import { StockPrices } from "../components/StockPrices";
import Container from "@mui/material/Container";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import axios from "axios";

export const PricePoints = () => {
  const [favourites, setFavourites] = useState(
    getFromLocalStorage("favourites", [])
  );

  const stocks = [];

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

    favourites.map((favourite) => {
      const data = axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${favourite}&token=${api_key}`
      );

      stocks.push(data);

      return stocks;
    });

    console.log(stocks);
  });

  return (
    <Container>
      <div>PricePoints</div>
      <StockPrices favourites={favourites} />
    </Container>
  );
};
