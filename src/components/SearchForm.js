import * as Yup from "yup";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useState, useEffect } from "react";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const SearchForm = ({ setFavourites, setErrorMessage }) => {
  const api_key = process.env.REACT_APP_API_KEY_FMP;

  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    const fetchSymbols = async () => {
      const symbolInfo = await axios
        .get(
          `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${api_key}`
        )
        .then((res) => {
          const symbolData = res.data;
          symbolData.map((dataPoint) => {
            symbols.push(dataPoint.symbol);
            return setSymbols(symbols);
          });
          return symbols;
        });
      return symbols;
    };
    fetchSymbols();
  }, []);

  const initialValues = {
    ticker: "",
  };

  const validationSchema = Yup.object({
    ticker: Yup.string().required("Please enter a valid ticker"),
  });

  const onSubmit = ({ ticker }) => {
    const favouritesFromLS = getFromLocalStorage("favourites", []);
    console.log(symbols);

    if (
      favouritesFromLS.length < 5 &&
      favouritesFromLS.includes(ticker) === false &&
      symbols.includes(ticker) === true
    ) {
      favouritesFromLS.push(ticker);
      localStorage.setItem("favourites", JSON.stringify(favouritesFromLS));
      setFavourites(favouritesFromLS);
    } else if (favouritesFromLS.includes(ticker) === true) {
      setErrorMessage("Please ensure the stock symbol is unique");
    } else if (
      favouritesFromLS.includes(ticker) === false &&
      symbols.includes(ticker) === false
    ) {
      setErrorMessage(
        `Stock symbol is not valid - please visit https://stockanalysis.com/stocks`
      );
    } else {
      setErrorMessage("5 is the maximum");
    }
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box sx={{ my: 3 }} component="form" onSubmit={formik.handleSubmit}>
      <TextField
        sx={{ bgcolor: "#ffffff" }}
        name="ticker"
        id="ticker"
        placeholder="Add company code"
        fullWidth
        error={formik.touched.ticker && Boolean(formik.errors.ticker)}
        helperText={formik.touched.ticker && formik.errors.ticker}
        value={formik.values.ticker}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
