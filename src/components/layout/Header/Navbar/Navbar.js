import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: green; */

  figure {
    display: none;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    /* background-color: blue; */

    a {
      color: ${(props) => props.theme.colors.white};
      font-size: 35px;
      font-weight: bold;
      text-decoration: none;

      
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    figure {
      display: flex;

      span{
        font-family: ${(props) => props.theme.fontStyles.lobster};
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      {/* <div className="logo">
                Nav Bar
            </div> */}
      <figure className="logoSection">
        <Link to="/">
            <span>bageriet</span> 
        </Link>
      </figure>
      <Burger />
    </Nav>
  );
};

export default Navbar;
