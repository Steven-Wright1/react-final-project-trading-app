import {Routes, Route} from "react-router-dom";

import { Watchlist } from "./pages/Watchlist";
import { PricePoints } from "./pages/PricePoints";
import { MarketNews } from "./pages/MarketNews";
import { SentimentAnalysis } from "./pages/SentimentAnalysis";
import { Contact } from "./pages/Contact";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/price-points" element={<PricePoints />} />
            <Route path="/market-news" element={<MarketNews />} />
            <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
            <Route path="/contact" element={<Contact /> } />
        </Routes>
    );
}