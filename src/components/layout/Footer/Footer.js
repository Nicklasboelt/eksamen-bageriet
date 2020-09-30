import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Icons
import { IoIosArrowDropupCircle } from "react-icons/io";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position:absolute;
   bottom:0;
  width: 100%;
  min-height: 250px;
  background-color: ${(props) => props.theme.colors.darkGrey};
  margin-top: 100px;

  .arrowLinkTop {
    display: flex;
    margin-top: -30px;
    font-size: 60px;
    color: honeydew;
    background-color: ${(props) => props.theme.colors.darkGrey};
    border-radius: 50%;
    padding: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: orange; */
    max-width: 600px;
    text-align: center;
    margin-bottom: 15px;

    .logo {
      text-decoration: none;
      h3 {
        font-family: ${(props) => props.theme.fontStyles.lobster};
        color: ${(props) => props.theme.colors.white};
        font-weight: ${(props) => props.theme.fontStyles.weightSmall};
        font-size: ${(props) => props.theme.fontSizes.extraLarge};
      }
    }

    p {
      margin-top: 20px;
      color: ${(props) => props.theme.colors.infoText};
    }
  }

  .copyrightContainer {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    width: 100%;
    max-width: unset;
    margin-bottom: unset;

    div {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: unset;
      height: 75px;
      background-color: ${(props) => props.theme.colors.dark};
      color: ${(props) => props.theme.colors.infoText};
      margin-bottom: unset;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href="#scroll-top" className="arrowLinkTop">
        <IoIosArrowDropupCircle />
      </a>
      <div>
        <Link to="/" className="logo">
          <h3>bageriet</h3>
        </Link>
        <p>
          Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste
          udgaver har gennegået forandringer.
        </p>
      </div>
      <div className="copyrightContainer">
        <div>
          <h4>Copyright &copy; 2017 bageriet aps</h4>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
