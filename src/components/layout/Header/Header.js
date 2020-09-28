import React from "react";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 19;
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.mainRed};

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    flex-direction: column;
    min-height: 90px;
  }
`;

const Header = () => {
  return (
    <StyledHeader className="main-header">
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
