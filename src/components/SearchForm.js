import * as Yup from "yup";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const SearchForm = ({ setFavourites, setErrorMessage }) => {
  const initialValues = {
    ticker: "",
  };

  const validationSchema = Yup.object({
    ticker: Yup.string().required("Please enter a valid ticker"),
  });

  const onSubmit = ({ ticker }) => {
    const favouritesFromLS = getFromLocalStorage("favourites", []);

    if (favouritesFromLS.length < 5) {
      favouritesFromLS.push(ticker);

      localStorage.setItem("favourites", JSON.stringify(favouritesFromLS));

      setFavourites(favouritesFromLS);
    } else {
      setErrorMessage("5 is max");
    }
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
