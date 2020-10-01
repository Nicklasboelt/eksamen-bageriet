import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// api - kald
import { opretBruger } from "../helpers/API/BrugerAPI";

const OpretbrugerMain = styled.main`
  max-width: 1200px;
  height: auto;
  margin: 0 auto;

  header {
    width: 100%;
    height: auto;
    padding: 100px 0 20px 0;
    font-size: ${(props) => props.theme.fontSizes.large};
    text-align: center;

    h2 {
      font-family: ${(props) => props.theme.fontStyles.openSemiBold};
      color: ${(props) => props.theme.colors.textBlue};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 100px;

    label {
      font-family: ${(props) => props.theme.fontStyles.openSemiBold};
      color: ${(props) => props.theme.colors.textBlue};
      font-size: ${(props) => props.theme.fontSizes.medium};
    }

    input {
      width: 100%;
      min-height: 50px;
      padding-left: 20px;
      font-size: 20px;
      border: none;
      outline: none;
      color: ${(props) => props.theme.colors.textBlue};
      margin: 5px 0 30px 0;
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: auto;

      button {
        width: 150px;
        min-height: 50px;
        border: none;
        background-color: #27781d;
        color: ${(props) => props.theme.colors.white};
        font-size: 20px;
        font-family: ${(props) => props.theme.fontStyles.openSans};
        cursor: pointer;
        transition: all 0.5s;
      }
      button:hover {
        background-color: #5bc94d;
      }

      div {
        width: 150px;

        min-height: 50px;
        background-color: ${(props) => props.theme.colors.textBlue};
        cursor: pointer;
        transition: all 0.5s;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          color: ${(props) => props.theme.colors.white};
          font-size: 20px;
          font-family: ${(props) => props.theme.fontStyles.openSans};
          text-decoration: none;
        }
      }
      div:hover {
        background-color: #798b96;
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    padding: 0 10px;
  }
  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    form {
      div {
        flex-direction: column-reverse;
        div {
          width: 100%;
          justify-content: center;
          margin-top: 20px;
        }
        button {
          width: 100%;
        }
      }
    }
  }
`;

const OpretBruger = () => {
  const [Info, setInfo] = useState({});
  const [oprettet, setOprettet] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setInfo(Object.fromEntries(new FormData(e.target)));

    // opretBruger(e.target).then((response) => {
    //   console.log(response);
    //   setBrugerOprettet(true);

    let bruger = {
      brugernavn: e.target.brugernavn.value,
      fornavn: e.target.fornavn.value,
      efternavn: e.target.efternavn.value,
      email: e.target.email.value,
      //   rolle: e.target.rolle.value,
      password: e.target.password.value,
    };
    console.log(bruger);

    opretBruger(bruger).then(setOprettet(true));
  };

  console.log(Info);
  //   console.log(brugerOprettet);

  return (
    <OpretbrugerMain>
      {!oprettet ? (
        <>
          <header>
            <h2>Opret Bruger</h2>
          </header>
          <form onSubmit={handleSubmit}>
            <label htmlFor="inpBrugernavn">Indtast dit brugernavn</label>
            <input
              type="text"
              name="brugernavn"
              placeholder="Brugernavn"
              required
              id="inpBrugernavn"
            />
            <label htmlFor="inpFornavn">Indtast dit fornavn</label>
            <input
              type="text"
              name="fornavn"
              placeholder="Fornavn"
              required
              id="inpFornavn"
            />
            <label htmlFor="inpEfternavn">Indtast dit efternavn</label>
            <input
              type="text"
              name="efternavn"
              placeholder="Efternavn"
              required
              id="inpEfternavn"
            />
            <label htmlFor="inpEmail">Indtast din e-mail</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              id="inpEmail"
            />
            {/* <input type="text" name="rolle" value="medlem" hidden required /> */}
            <label htmlFor="inpPassword">Intast dit password (min. 6 tegn)</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              id="inpPassword"
            />
            <div>
              <div>
                <Link to="/Login">Login</Link>
              </div>

              <button type="submit">Opret</button>
            </div>
          </form>
        </>
      ) : (
        <header>
          <h2>Brugeren med brugernavnet {Info.brugernavn} er oprettet</h2>
        </header>
      )}
    </OpretbrugerMain>
  );
};

export default OpretBruger;
