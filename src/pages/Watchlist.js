import { React, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Banner } from "../components/Banner";
import { Error } from "../components/Error";
import { SearchForm } from "../components/SearchForm";
import { StockFaves } from "../components/StockFaves";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import Box from "@mui/material/Box";

export const Watchlist = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [favourites, setFavourites] = useState(
    getFromLocalStorage("favourites", [])
  );

  useEffect(() => {
    if (favourites.length === 0) {
      setErrorMessage("You have no faves");
    } else {
      setErrorMessage("");
    }
  }, [favourites]);

  return (
    <Box>
      <Banner />
      <Container>
        <SearchForm
          setFavourites={setFavourites}
          setErrorMessage={setErrorMessage}
        />

        {errorMessage && <Error errorMessage={errorMessage} />}

        {favourites.length !== 0 && (
          <StockFaves favourites={favourites} setFavourites={setFavourites} />
        )}
      </Container>
    </Box>
  );
};
