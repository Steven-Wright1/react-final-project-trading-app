import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Banner } from "../components/Banner";
import { Error } from "../components/Error";
import { SearchForm } from "../components/SearchForm";
import { StockFaves } from "../components/StockFaves";


export const Watchlist = () => {

    const faves =  JSON.parse(localStorage.getItem("favourites")); 

    console.log(faves)

    return (
        <div>
            <Banner /> 
            <Container>
                <SearchForm />
                <Error /> 
                <StockFaves />
            </Container>
        </div>
    );
}