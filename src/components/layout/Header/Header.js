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
  background-color: #617685;
  /* background: rgb(39,54,66);
background: linear-gradient(180deg, rgba(39,54,66,1) 0%, rgba(83,111,135,1) 100%); */

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
