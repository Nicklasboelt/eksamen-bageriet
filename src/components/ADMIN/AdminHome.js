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
import AdminSletNews from "./Pages/AdminSletNews";
import AdminForside from "./Pages/AdminForside";

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
  return (
  <AdminMain>
      <AdminHeader />
      <AdminNavbar />


      {/* ADMIN */}
        
        
        <Route exact path="/admin/" component={AdminForside} />
        <Route exact path="/admin/adminnews" component={AdminNews} />
        <Route exact path="/admin/opretnews" component={AdminOpretNews} />
        
        <Route exact path="/admin/newsret/:newsid" component={AdminRetNews} />
        <Route exact path="/admin/newsslet/:newsid" component={AdminSletNews} />
  </AdminMain>);
};

export default AdminApp;
