import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// Icons
import { FaSearch } from "react-icons/fa";

// Styles
const StyledSearch = styled.section`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  width: auto;
  height: auto;
  border: 2px solid ${(props) => props.theme.colors.white};
  margin-right: 10px;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 40px;
      height: 40px;
      background-color: unset;
      color: ${(props) => props.theme.colors.white};
      font-size: 15px;
      font-weight: bold;
      border: none;
      transition: all 0.3s;
      cursor: pointer;
    }
    button:hover {
      color: ${(props) => props.theme.colors.textBlue};
    }
    input {
      width: 150px;
      height: 40px;
      padding: 0 5px;
      background-color: unset;
      color: ${(props) => props.theme.colors.white};
      font-size: 15px;
      font-weight: bold;
      border: none;
      outline: none;
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
    position: relative;
    width: auto;
    height: auto;
    margin-top: 30px;

    form {
      width: 100%;
      height: 40px;
      justify-content: center;
      flex-direction: row;

      button {
        min-width: 40px;
      }
      input {
        width: 100%;
        height: 40px;
      }
      h3 {
        margin: 10px 0;
      }
    }
  }
`;

const NavbarSearch = () => {
  let history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();

    // history.push("soeg/" + e.target.soeg.value);
    history.push("/soeg/" + e.target.soeg.value);

    e.target.reset()
  };

  return (
    <StyledSearch>
      <form onSubmit={handleSearch}>
        <input type="search" placeholder="Søg her..." name="soeg" />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </StyledSearch>
  );
};

export default NavbarSearch;
