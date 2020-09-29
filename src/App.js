import React from "react";
import { Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

// Pages
import Home from "./components/Pages/Home";
import Produkter from "./components/Pages/ProduktPage/Produkter";
import Produkt from "./components/Pages/ProduktPage/Produkt";

// CSS - Font
import './theme/font.css'



function App() {
  return (
    <div className="App">

      
        <Header />
        <div id="scroll-top"></div>
        
        {/* Routing */}
        <Route exact path="/" component={Home} />
        <Route exact path="/produkter" component={Produkter} />
        <Route exact path="/produkter/:produktid" component={Produkt} />

        <Footer />

    </div>
  );
}

export default App;
