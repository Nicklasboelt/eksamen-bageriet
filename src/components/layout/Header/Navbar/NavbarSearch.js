import React from "react";
import styled from "styled-components";

const StyledSearch = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  /* background-color: cornflowerblue; */

  form {
    display: flex;

    align-items: center;
    justify-content: space-between;

    button {
      width: 95px;
      height: 50px;
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.mainRed};
      font-size: 15px;
      font-weight: bold;
      border: none;
      transition: all 0.3s;
      cursor: pointer;
      
    }
    button:hover {
      background-color: #1c1c1c;
    }
    input {
      height: 40px;
      border: 2px solid ${(props) => props.theme.colors.black};
      margin: 0 10px;
      padding: 0 5px;
      background-color: ${(props) => props.theme.colors.mainRed};
      color: ${(props) => props.theme.colors.white};
      font-size: 15px;
      font-weight: bold;
    }
    input::placeholder {
      color: ${(props) => props.theme.colors.white};
    }
    h3 {
      font-size: 14px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.white};
      margin-right: 40px;
      cursor: pointer;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    height: 65%;

    form {
      width: 100%;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column-reverse;

      button {
        width: 95%;
      }
      input {
        width: 95%;
        height: 50px;
        margin: 5px 0;
      }
      h3 {
        margin: 10px 0;
      }
    }
  }
`;

const NavbarSearch = () => {
  return (
    <StyledSearch>
      <form>
        <button>SØG</button>
        <input type="text" placeholder="Søg her..." name="search" />
        <h3>Advanceret søg</h3>
      </form>
    </StyledSearch>
  );
};

export default NavbarSearch;
