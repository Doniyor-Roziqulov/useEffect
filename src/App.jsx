import "./App.css";
import Catigory from "./companents/catigoriy/Catigory";
import Footer from "./companents/footer/Footer";
import Goods from "./companents/goods/Goods";
import Header from "./companents/header/Header";
import Hero from "./companents/Hero/Hero";
import Popular from "./companents/popular/Popular";
import Stock from "./companents/stock/Stock";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Catigory />
            <Goods />
            <Stock />
            <Popular />
            <Footer />
        </>
    );
}

export default App;
