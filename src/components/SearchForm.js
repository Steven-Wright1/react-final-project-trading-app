import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export const SearchForm = ({ setFavourites }) => {
  /*Set State Values*/
  const [ticker, setTicker] = useState("");

  /*Function to handle the change of the ticker box*/
  const handleOnChange = (event) => {
    setTicker(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const favouritesFromLS = getFromLocalStorage("favourites", []);
    favouritesFromLS.push(ticker);
    localStorage.setItem("favourites", JSON.stringify(favouritesFromLS));
    setFavourites(favouritesFromLS);
  };

  return (
    /*Box properties to center search form*/
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      component="form"
      onSubmit={handleOnSubmit}
    >
      <FormControl sx={{ m: 2, width: 0.5 }} variant="standard">
        {/*Box to take stock tickers*/}
        <BootstrapInput
          id="demo-customized-textbox"
          placeholder="Enter stock ticker..."
          value={ticker}
          name="ticker"
          onChange={handleOnChange}
        />
        {/*Button to add the ticket to faves*/}
      </FormControl>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        name="submit"
        value=""
      >
        Add
      </Button>
    </Box>
  );
};
