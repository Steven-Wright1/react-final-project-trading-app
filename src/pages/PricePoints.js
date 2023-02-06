import { React, useState, useEffect } from "react";
import { StockPrices } from "../components/StockPrices";
import Container from "@mui/material/Container";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import axios from "axios";

export const PricePoints = () => {
  const favourites = getFromLocalStorage("favourites", []);
  const [stocks, setStocks] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const promises = favourites.map((favourite) => {
        return axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${favourite}&token=${api_key}`
        );
      });
      const data = await Promise.all(promises);
      setStocks(data);
    };
    fetchData();
  }, []);

  console.log(stocks);

  return (
    <Container>
      <h1 className="price-points-header">Price Points</h1>
      {stocks.length !== 0 && (
        <StockPrices stocks={stocks} favourites={favourites} />
      )}
    </Container>
  );
};
