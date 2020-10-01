import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

// Providers
import { ThemeProvider } from "styled-components";
import AuthDataProvider from "./components/context/AuthDataContext";

// Pages
import App from "./App";
import AdminHome from "./components/ADMIN/AdminHome";

//Layout
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";

// Styles
import GlobalStyles from "./theme/globalStyles";
import Theme from "./theme/theme";

// Router til admin og front-end
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styling
const IndexContainer = styled.div`
  position: relative;
  min-height: 100vh;

  .contentWrapper {
    padding-bottom: 250px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <ThemeProvider theme={Theme}>
          <AuthDataProvider>
            <GlobalStyles />
            <IndexContainer>
              <div className="contentWrapper">
                <Header />
                <Route path="/" component={App} />
                <Route exact path="*/admin/*" component={AdminHome} />
                <Footer />
              </div>
            </IndexContainer>
          </AuthDataProvider>
        </ThemeProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
