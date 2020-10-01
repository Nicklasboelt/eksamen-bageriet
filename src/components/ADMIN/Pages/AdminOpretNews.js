import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ImageUploader from "react-images-upload";

// api - kald
import { opretNyhed } from "../../helpers/API/NyhederAPI";

const OpretNyhedAdminSection = styled.section`
  width: 100%;
  height: auto;

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

    textarea {
      width: 100%;
      height: 200px;
      margin: 5px 0 30px 0;
      resize: none;
      padding: 10px 0 0 20px;
      border: none;
      outline: none;
      font-size: 20px;
      color: ${(props) => props.theme.colors.textBlue};
    }

    .OpretNyhedButtonsContainer {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: auto;
      margin-bottom: 50px;

      .OpretNyhedButton {
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
      .OpretNyhedButton:hover {
        background-color: #5bc94d;
      }

      .FortrydOpretNyhedButton {
        width: 150px;
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

      .FortrydOpretNyhedButton:hover {
        background-color: #798b96;
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow500} {
    form {
      .OpretNyhedButtonsContainer {
        flex-direction: column;

        .OpretNyhedButton {
          width: 100%;
          margin: 5px 0;
        }
        .FortrydOpretNyhedButton {
          width: 100%;
          margin: 5px 0;
        }
      }
    }
  }
`;

const AdminOpretNews = () => {
  const [nyhed, setNyhed] = useState();
  const [nyhedbillede, setNyhedbillede] = useState();
  const [oprettet, setOprettet] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    opretNyhed(nyhed, nyhedbillede).then(setOprettet(true));
  };

  return (
    <OpretNyhedAdminSection>
      {!oprettet ? (
        <>
          <header>
            <h2>Opet Nyhed</h2>
          </header>
          <form onSubmit={handleSubmit}>
            <label htmlFor="inpTitel">Indtast Nyhedens titel</label>
            <input
              type="text"
              name="titel"
              placeholder="Titel..."
              required
              id="inpTitel"
              onChange={(e) => setNyhed({ ...nyhed, titel: e.target.value })}
            />
            <label htmlFor="inpTeaser">Indtast Nyhedens teaser</label>
            <textarea
              type="text"
              name="teaser"
              placeholder="Teaser..."
              required
              id="inpTeaser"
              onChange={(e) => setNyhed({ ...nyhed, teaser: e.target.value })}
            />
            <label htmlFor="inpNyhedsTekst">Indtast Nyhedens beskrivelse</label>
            <textarea
              type="text"
              name="nyhedstekst"
              placeholder="Nyhedstekst..."
              required
              id="inpNyhedsTekst"
              onChange={(e) =>
                setNyhed({ ...nyhed, nyhedstekst: e.target.value })
              }
            />

            <ImageUploader
              withIcon={true}
              buttonText="Vælg et billede"
              withLabel={true}
              imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
              singleImage={true}
              withPreview={true}
              maxFileSize={5242880}
              required={true}
              onChange={(image) => {
                setNyhedbillede(image[0]);
              }}
            />
            <div className="OpretNyhedButtonsContainer">
              <button
                className="FortrydOpretNyhedButton"
                onClick={() => {
                  history.push("/admin/adminnews");
                }}
              >
                Fortryd
              </button>
              <button className="OpretNyhedButton" type="submit">
                Gem
              </button>
            </div>
          </form>
        </>
      ) : (
        <header>
          <h2>Nyheden er oprettet!</h2>
        </header>
      )}
    </OpretNyhedAdminSection>
  );
};

export default AdminOpretNews;
