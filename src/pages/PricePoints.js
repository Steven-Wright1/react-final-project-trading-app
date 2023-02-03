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
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    favourites.map((favourite) => {
      axios
        .get(
          `https://finnhub.io/api/v1/quote?symbol=${favourite}&token=${api_key}`
        )
        .then((response) => {
          const data = response.data;
          stocks.push(data);
          return stocks;
        });
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
