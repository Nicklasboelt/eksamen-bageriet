import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import AdminNavbar from "./layout/AdminNavbar";

//Layout
import AdminHeader from "./layout/AdminHeader";

//Pages
import AdminNews from "./Pages/AdminNews";
import AdminRetNews from "./Pages/AdminRetNews";
import AdminOpretNews from "./Pages/AdminOpretNews";

const AdminMain = styled.main`
  max-width: 1200px;
  height: auto;
  margin: 0 auto 100px auto;
  background-color: violet;

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
      padding: 0 10px;
  }
`;

const AdminApp = () => {
  return (
  <AdminMain>
      <AdminHeader />
      <AdminNavbar />

      {/* ADMIN */}
        
        <Route exact path="/admin/adminnews" component={AdminNews} />
        <Route exact path="/admin/adminnews/opretnews" component={AdminOpretNews} />
        
        <Route exact path="/admin/adminnews/:newsid" component={AdminRetNews} />
  </AdminMain>);
};

export default AdminApp;
