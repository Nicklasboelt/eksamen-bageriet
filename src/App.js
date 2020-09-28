import React from "react";
import { BrowserRouter } from "react-router-dom";


// Layout
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

// CSS - Font
import './theme/font.css'
import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
