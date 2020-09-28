import React from "react";
import { BrowserRouter } from "react-router-dom";


// Layout
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

// CSS - Font
import './theme/font.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
  
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
