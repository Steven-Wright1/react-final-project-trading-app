import { Container } from "react-bootstrap";
import { Banner } from "../components/Banner";
import { Favourites } from "../components/Favourites";

export const Watchlist = () => {
    return (
        <div>
            <Banner /> 
            <Container>
                <Favourites />
            </Container>
        </div>
    );
}