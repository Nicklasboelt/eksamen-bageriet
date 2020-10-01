import React from "react";
import {NavLink} from 'react-router-dom'
import styled from "styled-components";

const AdminNavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  min-height: 50px;
  /* background-color: firebrick; */

  ul {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;

        li{
            display:flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 50px;
            list-style-type: none;
            background-color: ${(props) => props.theme.colors.textBlue};
            
            
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                min-width: 150px;
                height: 50px;
                color: ${(props) => props.theme.colors.white};
                text-decoration: none;
                background-color: ${(props) => props.theme.colors.textBlue};
                transition: all 0.5s;
            }
            a:hover {
                background-color: #798b96;
        }
        
            span {
                width: 10px;
                height: 20px;
                border-right: 1px solid white;
                z-index: 1;
            }
        }
        
  }

  @media ${({ theme }) => theme.mediaQueries.bellow500} {
      ul {
          flex-wrap: wrap;
          
        
            li {
                flex-direction: column;
                width: 100%;
                
                a{
                    width: 100%;
                }

                span {
                    width: 100%;
                    height: 1px;
                    border: none;
                    border-bottom: 1px solid white;
                }
            }
      }
    }
`;

const AdminNavbar = () => {
  return (
    <AdminNavbarContainer>
      <ul>
        <li>
          <NavLink  to="/admin/">Forside</NavLink>
          <span></span>
        </li>
        <li>
          <NavLink  to="/admin/adminnews">News</NavLink>
          <span></span>
        </li>
        <li>
          <NavLink to="#">Kategorier</NavLink>
          
        </li>
      </ul>
    </AdminNavbarContainer>
  );
};

export default AdminNavbar;
