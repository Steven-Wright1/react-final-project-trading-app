import { Error } from "./Error";
import { SearchForm } from "./SearchForm";
import { StockFaves } from "./StockFaves";
import { Stack } from "react-bootstrap";

export const Favourites = () => {
    return(
        <Stack gap={2}>
            <SearchForm />
            <Error />
            <StockFaves />
        </Stack>
    );
}