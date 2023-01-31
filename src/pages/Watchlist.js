import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Banner } from "../components/Banner";
import { Error } from "../components/Error";
import { SearchForm } from "../components/SearchForm";
import { StockFaves } from "../components/StockFaves";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const Watchlist = () => {
  const [favourites, setFavourites] = useState(
    getFromLocalStorage("favourites", [])
  );

  console.log(favourites);

  return (
    <div>
      <Banner />
      <Container>
        <SearchForm setFavourites={setFavourites} />
        {JSON.stringify(favourites, null, 2)}
        <Error />
        <StockFaves />
      </Container>
    </div>
  );
};
