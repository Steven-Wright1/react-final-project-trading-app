
import { useState } from "react";
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { Button } from '@material-ui/core';
import Box from "@material-ui/core/Box";


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

export const SearchForm = () => {

    /*Set State Values*/
    const [ticker, setTicker] = useState("");
    const [favourites, setFavourites] = useState([]);

    /*Function to handle the change of the ticker box*/
    const handleOnChange = (event) => {
        setTicker(event.target.value);
        console.log(ticker)
      };


    const handleOnClick = (event) => {
        const new_arr = [...favourites,ticker];
        setFavourites(new_arr)
    }


    console.log(favourites)
    return(

        /*Box properties to center search form*/
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        >

        
        <FormControl sx={{ m:2, width:0.5}} variant="standard">
            
            {/*Box to take stock tickers*/}
            <BootstrapInput
            id="demo-customized-textbox"
            placeholder='Enter stock ticker...'
            value={ticker}
            name='ticker'
            onChange={handleOnChange}

            />
           {/*Button to add the ticket to faves*/}
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            name='submit'
            value=""
            onClick={handleOnClick}
            >
            Add
            </Button>
        </FormControl>
        </Box>
    );
}