import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useEffect } from "react";

export const StockPrices = ({ favourites }) => {
  /*
  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

    favourites.map((favourite) => {
      const fetchNames = async () => {
        console.log(api_key);
        try {
          const res = await Promise.all([
            axios.get(
              `https://finnhub.io/api/v1/quote?symbol=${favourite}token=${api_key}`
            ),
          ]);
          const data = res.map((res) => res.data);
          console.log(data.flat());
        } catch {
          throw Error("Promise failed");
        }
      };
    });
    */

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", m: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}></Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <div>high: 261 </div>
        <div>low :245</div>
        <div>open: 250</div>
        <div>close:258</div>
        <div>% change: 3.5%</div>
      </Box>
    </Box>
  );
};
