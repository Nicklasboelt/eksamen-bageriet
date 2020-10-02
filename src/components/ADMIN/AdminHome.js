import React, { useContext } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import AdminNavbar from "./layout/AdminNavbar";

//Layout
import AdminHeader from "./layout/AdminHeader";

//Pages
import AdminNews from "./Pages/AdminNews";
import AdminRetNews from "./Pages/AdminRetNews";
import AdminOpretNews from "./Pages/AdminOpretNews";
import AdminSletNews from "./Pages/AdminSletNews";
import AdminForside from "./Pages/AdminForside";
import Login from "../auth/Login";

// context
import { AuthDataContext } from "../context/AuthDataContext";

const AdminMain = styled.main`
  max-width: 1200px;
  height: auto;
  margin: 0 auto 100px auto;
  /* background-color: violet; */

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    padding: 0 10px;
  }
`;

const AdminApp = () => {
  const { loggedIn } = useContext(AuthDataContext);

  // skjuler private routes hvis der ikke er en bruger i context
  const PrivateRoute = ({ component, ...options }) => {
    const { loggedIn } = useContext(AuthDataContext);
    console.log("privateroute: loggedIn", loggedIn);

    // hvis context har loggedIn/true (= der er logget ind) så vis den (private) component - ellers send til login
    const finalComponent = loggedIn ? component : Login;
    return <Route {...options} component={finalComponent} />;
  };

  return (
    <AdminMain>
      {!loggedIn ? (
        <Route exact path="/Login" component={Login} />
      ) : (
        <>
          <AdminHeader />
          <AdminNavbar />
        </>
      )}

      {/* ADMIN */}

      <PrivateRoute exact path="/admin/" component={AdminForside} />
      <PrivateRoute exact path="/admin/adminnews" component={AdminNews} />
      <PrivateRoute exact path="/admin/opretnews" component={AdminOpretNews} />

      <PrivateRoute
        exact
        path="/admin/newsret/:newsid"
        component={AdminRetNews}
      />
      <PrivateRoute
        exact
        path="/admin/newsslet/:newsid"
        component={AdminSletNews}
      />
    </AdminMain>
  );
};

export default AdminApp;
