import React,{useContext} from "react";
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

// Auth
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import OpretBruger from "./components/auth/OpretBruger";


// context
import { AuthDataContext } from './components/context/AuthDataContext'

// CSS - Font
import './theme/font.css'
import styled from 'styled-components'


const AppContainer = styled.div`
position: relative;
  min-height: 100vh;

  .contentWrapper {
    padding-bottom: 250px;
  }
`


function App() {

  const {loggedIn} = useContext(AuthDataContext)

  return (
    <AppContainer className="App">
      <div className="contentWrapper">
      
        <Header />
        <div id="scroll-top"></div>

        
        
        {/* Routing */}

        {/* Søg og login */}
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Logout" component={Logout} />
        <Route exact path="/Opretbruger" component={OpretBruger} />
        <Route exact path="/soeg/:soegeordet?" component={Soegeresultat} />

        {/* Home */}
        <Route exact path="/" component={Home} />

        {/* Produkter */}
        <Route exact path="/produkter" component={Produkter} />
        <Route exact path="/produkter/:produktid" component={Produkt} />

        {/* Kontakt */}
        <Route exact path="/kontakt" component={Kontakt} />
        </div>

        <Footer />

    </AppContainer>
  );
}

export default App;
