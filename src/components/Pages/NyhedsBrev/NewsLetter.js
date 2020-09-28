import React, { useState } from "react";
import styled from "styled-components";

// api - kald
import { tilmeldNyhedsbrev } from "../../helpers/API/NewsLetterAPI";

// Image
import BgImage from "../../../assets/NewsLetterImage/newsletterbg.jpg";

// Icons
import { FiMail } from "react-icons/fi";

// Styling
const NewsLetterContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-image: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 150px;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1200px;
    max-width: 1200px;
    height: 500px;

    .TilmeldtText {
      font-size: ${(props) => props.theme.fontSizes.extraLarge};
      color: ${(props) => props.theme.colors.white};
      margin-top: 50px;
    }

    .NewsLetterTextContainer {
      width: 100%;
      height: auto;

      h3 {
        font-size: ${(props) => props.theme.fontSizes.extraLarge};
        font-family: ${(props) => props.theme.fontStyles.lobster};
        color: ${(props) => props.theme.colors.white};
        font-weight: ${(props) => props.theme.fontStyles.weightSmall};
      }

      p {
        font-size: ${(props) => props.theme.fontSizes.p};
        color: ${(props) => props.theme.colors.white};
      }
    }

    form {
      display: flex;
      width: 100%;
      margin-top: 50px;

      .inputContainer {
        display: flex;
        width: 100%;

        .iconContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 50px;
          background-color: ${(props) => props.theme.colors.infoText};
          color: ${(props) => props.theme.colors.white};
          font-size: 23px;
        }

        input {
          width: 100%;
          height: 50px;
          border: none;
          font-size: 25px;
          padding-left: 10px;
        }
      }

      button {
        width: 200px;
        height: 50px;
        border: none;
        background-color: ${(props) => props.theme.colors.textBlue};
        color: ${(props) => props.theme.colors.white};
        font-size: 20px;
        font-family: ${(props) => props.theme.fontStyles.openSans};
        text-transform: ${(props) => props.theme.fontStyles.uppercase};
        cursor: pointer;
        transition: all 0.5s;
      }
      button:hover {
        background-color: #798b96;
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    .NewsLetterTextContainer {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 100%;
      height: auto;
    }
    main {
      width: 95%;
      text-align: center;
      form {
        flex-direction: column;

        button {
          width: 100%;
        }
      }
    }
  }
`;

const NewsLetter = () => {
  const [tilmeldt, setTilmeldt] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tilmelding = {
      email: e.target.emailadresse.value,
    };

    tilmeldNyhedsbrev(tilmelding).then((response) => {
      console.log(response);
      setTilmeldt(true);
    });
  };

  return (
    <NewsLetterContainer>
      <main>
        <div className="NewsLetterTextContainer">
          <h3>Tilmeld dig vores nyhedsbrev</h3>
          <p>
            Der er mange tilgængelige ugaver af Lorem ipsum, men de fleste
            udgaver
          </p>
        </div>

        {!tilmeldt ? (
          <form onSubmit={handleSubmit}>
            <div className="inputContainer">
              <div className="iconContainer">
                <FiMail />
              </div>
              <input
                type="email"
                name="emailadresse"
                placeholder="Indtast din email"
                required
              />
            </div>
            <button>Tilmeld</button>
          </form>
        ) : (
          <h3 className="TilmeldtText">Tak for din tilmelding!</h3>
        )}
      </main>
    </NewsLetterContainer>
  );
};

export default NewsLetter;
