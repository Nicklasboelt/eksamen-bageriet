import React from "react";
import { Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

// Pages
import Home from "./components/Pages/Home";
import Produkter from "./components/Pages/ProduktPage/Produkter";
import Produkt from "./components/Pages/ProduktPage/Produkt";
import Kontakt from "./components/Pages/Kontakt/Kontakt";
import Soegeresultat from './components/Pages/Soegeresultat/Soegeresultat'

// CSS - Font
import './theme/font.css'




function App() {
  return (
    <div className="App">

      
        <Header />
        <div id="scroll-top"></div>

        
        
        {/* Routing */}

        {/* Søgeresultat */}
        <Route exact path="/soeg/:soegeordet?" component={Soegeresultat} />

        {/* Home */}
        <Route exact path="/" component={Home} />

        {/* Produkter */}
        <Route exact path="/produkter" component={Produkter} />
        <Route exact path="/produkter/:produktid" component={Produkt} />

        {/* Kontakt */}
        <Route exact path="/kontakt" component={Kontakt} />

        <Footer />

    </div>
  );
}

export default App;
