import React from "react";
import ReactDOM from "react-dom";

// Providers
import { ThemeProvider } from "styled-components";
import AuthDataProvider from "./components/context/AuthDataContext";

// Pages
import App from "./App";
import AdminApp from "./components/ADMIN/AdminApp";

// Styles
import GlobalStyles from "./theme/globalStyles";
import Theme from "./theme/theme";

// Router til admin og front-end
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <ThemeProvider theme={Theme}>
          <AuthDataProvider>
            <GlobalStyles />

            <Route exact path="*/admin/*" component={AdminApp} />
            <Route path="/" component={App} />
          </AuthDataProvider>
        </ThemeProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
