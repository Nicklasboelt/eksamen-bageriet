import React, { useState } from "react";
import styled from "styled-components";

// api - kald
import { opretKontakt } from "../../helpers/API/KontaktAPI";

// Styling
const KontaktMain = styled.main`
  max-width: 1200px;
  height: auto;

  margin: 0 auto;

  header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;

    padding: 100px 0 50px 0;
    font-size: ${(props) => props.theme.fontSizes.large};

    h2 {
      font-family: ${(props) => props.theme.fontStyles.lobster};
      color: ${(props) => props.theme.colors.textBlue};
      font-weight: ${(props) => props.theme.fontStyles.weightSmall};
    }
  }

  .newsTextContainer {
    width: 100%;
    height: auto;
    text-align: center;
    /* background-color: green; */
    color: ${(props) => props.theme.colors.infoText};
  }

  .Kontaktsection {
    display: flex;
    width: 100%;
    height: 500px;

    margin: 50px 0 100px 0;

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 50%;
      height: 100%;
      padding-right: 20px;

      input {
        width: 100%;
        min-height: 50px;
        padding-left: 20px;
        border: none;
        outline: none;
        font-size: 17px;
        color: ${(props) => props.theme.colors.textBlue};
        margin: 5px 0;
      }

      textarea {
        width: 100%;
        height: 100%;
        margin-top: 5px;
        resize: none;
        padding: 10px 0 0 20px;
        border: none;
        outline: none;
        font-size: 17px;
        color: ${(props) => props.theme.colors.textBlue};
      }

      button {
        width: 150px;
        min-height: 50px;
        border: none;
        background-color: ${(props) => props.theme.colors.textBlue};
        color: ${(props) => props.theme.colors.white};
        font-size: 20px;
        font-family: ${(props) => props.theme.fontStyles.openSans};
        cursor: pointer;
        transition: all 0.5s;
      }
      button:hover {
        background-color: #798b96;
      }
    }

    .KontaktSendtSection {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100%;
      padding-right: 20px;

      h3 {
        font-family: ${(props) => props.theme.fontStyles.openSans};
        color: ${(props) => props.theme.colors.textBlue};
        font-size: ${(props) => props.theme.fontSizes.medium};
      }

      div {
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 50px;
        padding-left: 20px;
        font-size: 17px;
        color: ${(props) => props.theme.colors.textBlue};
        background-color: ${(props) => props.theme.colors.white};
        margin: 5px 0;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100%;
      padding-left: 20px;

      h5 {
        font-family: ${(props) => props.theme.fontStyles.openSans};
        color: ${(props) => props.theme.colors.textBlue};
        font-size: ${(props) => props.theme.fontSizes.medium};

        span {
          color: ${(props) => props.theme.colors.infoText};
          font-family: ${(props) => props.theme.fontStyles.openLight};
        }
      }

      div {
        width: 100%;
        height: 100%;

        iframe {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    padding: 0 10px;
    .Kontaktsection {
      flex-direction: column;
      height: auto;

      form {
        width: 100%;
        padding: 0;

        textarea {
          height: 200px;
        }
      }

      .KontaktSendtSection {
        width: 100%;
        padding: 0;
      }

      section {
        width: 100%;
        padding: 0;
        margin-top: 50px;

        div {
          iframe {
            height: 300px;
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow500} {
    section {
      form {
        button {
          width: 100%;
        }
      }
    }
  }
`;

const Kontakt = () => {
  const [kontaktInfo, setKontaktInfo] = useState({});
  const [kontaktSendt, setKontaktSendt] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setKontaktInfo(Object.fromEntries(new FormData(e.target)));

    opretKontakt(e.target).then((response) => {
      console.log(response);
      setKontaktSendt(true);
    });
  };

  console.log(kontaktInfo);
  return (
    <KontaktMain>
      <header>
        <h2>Kontakt os</h2>
      </header>
      <div className="newsTextContainer">
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfædige ord, som på ingen måde ser ægte ud
        </p>
      </div>

      <section className="Kontaktsection">
        {!kontaktSendt ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="navn"
              placeholder="Dit navn...."
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Din  e-mail...."
              required
            />

            <input type="text" name="emne" placeholder="Emne...." required />

            <textarea
              name="besked"
              placeholder="Din besked...."
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        ) : (
          <section className="KontaktSendtSection">
            <h3>Føglende oplysninger er sendt</h3>
            <div>
              <p>Navn: {kontaktInfo.navn}</p>
            </div>
            <div>
              <p>Email: {kontaktInfo.email}</p>
            </div>
            <div>
              <p>Emne: {kontaktInfo.emne}</p>
            </div>
            <div>
              <p>Besked: {kontaktInfo.besked}</p>
            </div>
          </section>
        )}

        <section>
          <h5>
            adresse: <span>Øster uttrupvej 1 9200 aalborg</span>
          </h5>
          <h5>
            telefon: <span>+45 25 26 95 40</span>
          </h5>
          <div>
            <iframe
              title="Adresse"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=%C3%B8ster%20uttrupvej%201%209200+(bageriet)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </section>
      </section>
    </KontaktMain>
  );
};

export default Kontakt;
