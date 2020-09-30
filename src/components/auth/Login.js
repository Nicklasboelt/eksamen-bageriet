import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// api - kald
import {login} from '../helpers/API/Auth'

// context
import { AuthDataContext } from "../context/AuthDataContext";

// Styling
const LoginMain = styled.main`
  max-width: 1200px;
  height: auto;
  /* background-color: violet; */
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

const Login = () => {
  const { onLogin } = useContext(AuthDataContext);
  const { loggedIn, brugerData} = useContext(AuthDataContext);
  // const [bruger, setBruger] = useState();

  console.log(loggedIn)

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   console.log(e.target.email.value, e.target.password.value);

  //   login({
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //   }).then((data) => {
  //     console.log("LOGIN Her", data);
  //     setBruger(data);
  //     onLogin(data);
  //   });
  // };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(e.target.email.value, e.target.password.value);

    login({
      email: e.target.email.value,
      password: e.target.password.value,
    }).then((data) => {
      console.log("LOGIN Her", data);
      onLogin(data);
      
    });
  };

  return (
    <LoginMain>
    {!loggedIn ?<> <header>
        <h2>Login</h2>
      </header>

      
      <form onSubmit={handleLogin}>
        <label>Indtast din e-mail</label>
        <input type="email" name="email" placeholder="E-mail" required />
        <label>Intast dit password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <div>
          <div>
            <Link to="/Opretbruger">Opret Bruger</Link>
          </div>

          <button type="submit">Login</button> 
        </div>
      </form> </> : <header><h2>Du er logget ind som brugeren {brugerData.brugernavn}</h2></header>  }
    </LoginMain>
  );
};

export default Login;
