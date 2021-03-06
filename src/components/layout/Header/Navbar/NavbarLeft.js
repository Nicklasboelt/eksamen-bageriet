import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import NavbarSearch from "./NavbarSearch";

// context
import { AuthDataContext } from "../../../context/AuthDataContext";

// Styling
const NavSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  /* background-color: yellow; */

  .hideLogo {
    text-decoration: none;
    h1 {
      font-size: ${(props) => props.theme.fontSizes.h1};
      font-family: ${(props) => props.theme.fontStyles.lobster};
      color: ${(props) => props.theme.colors.white};
      font-weight: ${(props) => props.theme.fontStyles.weightSmall};
    }
  }

  ul {
    display: flex;
    align-items: center;
    min-width: 0;
    height: 50px;
    list-style: none;
    justify-content: center;
    margin: 0 100px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
    background-color: cornflowerblue;
  }

  li {
    display: flex;
    padding: 0px 10px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    /* background-color: purple; */

    a {
      display: flex;
      width: 100%;
      color: ${(props) => props.theme.colors.white};
      text-decoration: none;
      transition: all 0.3s;
      /* background-color: yellow; */
      font-family: ${(props) => props.theme.fontStyles.openSans};
      text-transform: ${(props) => props.theme.fontStyles.uppercase};
    }
    a:hover {
      color: #dbdbdb;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: ${(props) => props.theme.colors.dimmedBlue};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 50px;
    transition: transform 0.3s ease-in-out;

    .hideLogo {
      display: none;
    }

    ul {
      flex-flow: column nowrap;
      justify-content: flex-start;
      height: auto;
      width: 100%;
      margin: 0;

      li {
        width: 100%;
        border-bottom: 2px solid ${(props) => props.theme.colors.white};
        padding: 0;
        /* background-color: green; */

        a {
          width: 100%;
          padding: 20px 10px;
          color: ${(props) => props.theme.colors.white};
          /* background-color: yellow; */
          text-decoration: none;
          transition: all 0.3s;
        }
      }
      .li-removeBorder {
        border-bottom: 2px solid ${(props) => props.theme.colors.white};
      }
    }
  }
`;

const NavbarLeft = ({ open }) => {
  const { loggedIn } = useContext(AuthDataContext);

  return (
    <NavSection open={open}>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/produkter">Produkter</NavLink>
        </li>
      </ul>
      <Link to="/" className="hideLogo">
        <h1>bageriet</h1>
      </Link>

      <ul>
        <li>
          <NavLink to="/Kontakt">Kontakt</NavLink>
        </li>
        {!loggedIn ? (
          <li className="li-removeBorder">
            <NavLink to="/Login">Login</NavLink>
          </li>
        ) : (
          <li className="li-removeBorder">
            <NavLink to="/Logout">Logout</NavLink>
          </li>
        )}
      </ul>
      <NavbarSearch />
    </NavSection>
  );
};

export default NavbarLeft;
