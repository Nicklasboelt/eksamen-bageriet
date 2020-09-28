import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.theme.colors.dark};;

  figure {
    display: flex;
    align-items: center;

    width: 25%;
    height: 100%;
    
    /* background-color: green; */

    a {
      color: ${(props) => props.theme.colors.white};
      font-size: 75px;
      text-decoration: none;
      font-weight: bold;

      span {
        color: ${(props) => props.theme.colors.mainRed};
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    figure{
      width: 100%;
      justify-content: center;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <figure className="logoSection">
        <Link to="/">
          RUN'<span>IT</span>
        </Link>
      </figure>
    </StyledFooter>
  );
};

export default Footer;
