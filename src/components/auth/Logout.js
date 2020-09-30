import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

// api - kald
import { logout } from "../helpers/API/Auth";
import { AuthDataContext } from "../context/AuthDataContext";

// Styling
const LogoutMain = styled.main`
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
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 100px;

    div {
      display: flex;
      justify-content: space-between;
      width: 700px;
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
        background-color: #821e1e;
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
        background-color: #e26363;
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    padding: 0 10px;
  }
  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    form {
      div {
        flex-direction: column;
        width: 100%;
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
const Logout = () => {
  const history = useHistory();
  const { onLogout, loggedIn } = useContext(AuthDataContext);

  const handleLogout = (e) => {
    e.preventDefault();

    logout().then((data) => {
      onLogout(data);
    });
  };

  return (
    <LogoutMain>
      {!loggedIn ? (
        <header>
          <h2>Du er logget ud!</h2>
        </header>
      ) : (
        <>
          <header>
            <h2>Er du sikker på at du vil logge ud?</h2>
          </header>
          <form onSubmit={handleLogout}>
            <div>
              <button type="submit">Ja</button>

              <div>
                <Link onClick={() => history.push("/")}>Nej</Link>
              </div>
            </div>
          </form>
        </>
      )}
    </LogoutMain>
  );
};

export default Logout;
