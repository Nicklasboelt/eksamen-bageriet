import React, { useContext } from "react";
import { Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

// Pages
import Home from "./components/Pages/Home";
import Produkter from "./components/Pages/ProduktPage/Produkter";
import Produkt from "./components/Pages/ProduktPage/Produkt";
import Kontakt from "./components/Pages/Kontakt/Kontakt";
import Soegeresultat from "./components/Pages/Soegeresultat/Soegeresultat";
import OpretOpskrift from "./components/Pages/ProduktPage/OpretOpskrift";

//Admin pages
import AdminHome from "./components/ADMIN/AdminHome";
import AdminNews from "./components/ADMIN/Pages/AdminNews";

// Auth
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import OpretBruger from "./components/auth/OpretBruger";

// context
import { AuthDataContext } from "./components/context/AuthDataContext";

// CSS - Font
import "./theme/font.css";

function App() {

  // skjuler private routes hvis der ikke er en bruger i context
  const PrivateRoute = ({ component, ...options }) => {
    const { loggedIn } = useContext(AuthDataContext);
    console.log("privateroute: loggedIn", loggedIn);

    // hvis context har loggedIn/true (= der er logget ind) så vis den (private) component - ellers send til login
    const finalComponent = loggedIn ? component : Login;
    return <Route {...options} component={finalComponent} />;
  };

  return (
    <>
      
        
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
        <Route exact path="/Opretopskrift" component={OpretOpskrift} />

        {/* Kontakt */}
        <Route exact path="/kontakt" component={Kontakt} />


        

     

      
    </>
  );
}

export default App;
