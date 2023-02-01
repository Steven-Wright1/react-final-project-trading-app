import { React, useState } from "react";
import { Container } from "react-bootstrap";
import { Banner } from "../components/Banner";
import { Error } from "../components/Error";
import { SearchForm } from "../components/SearchForm";
import { StockFaves } from "../components/StockFaves";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { Stack } from "@mui/material";

export const Watchlist = () => {
  const [favourites, setFavourites] = useState(
    getFromLocalStorage("favourites", [])
  );

   const[errorMessage, setErrorMessage] = useState("");

   const error1= "you have no faves"

  return (
    <div>
      <Banner />
      <Container>
        <SearchForm setFavourites={setFavourites} />
    
    


      {
      favourites.length === 2 ? (
        setErrorMessage(error1)) : 
        ( <Error />)
        }



        <Error errorMessage={errorMessage}/>



        {
          favourites.map((favourite)=>{
            return  <StockFaves favourite={favourite}/>
          })
        }
      </Container>
    </div>
  );
};
