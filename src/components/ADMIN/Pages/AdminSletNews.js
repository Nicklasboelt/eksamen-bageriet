import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

// api - kald
import { sletNyhed, hentUdvalgtNyhed } from "../../helpers/API/NyhederAPI";

const SletNyhedAdminSection = styled.section`
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

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    div {
      display: flex;
      align-items: center;
      width: 100%;
      min-height: 100px;
      margin: 10px 0;
      padding: 10px;
      background-color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.fontStyles.openSemiBold};
      color: ${(props) => props.theme.colors.textBlue};
      font-size: ${(props) => props.theme.fontSizes.medium};
      border-radius: 5px;

      span {
        font-family: ${(props) => props.theme.fontStyles.openSemiBold};
        color: ${(props) => props.theme.colors.infoText};
        font-size: ${(props) => props.theme.fontSizes.medium};
        margin-left: 10px;
      }
    }
  }
  .SletNyhedButtonsContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin-bottom: 50px;

    .SletNyhedButton {
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
    .SletNyhedButton:hover {
      background-color: #5bc94d;
    }

    .FortrydSletNyhedButton {
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

    .FortrydSletNyhedButton:hover {
      background-color: #798b96;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow500} {
    .SletNyhedButtonsContainer {
      flex-direction: column;

      .SletNyhedButton {
        width: 100%;
        margin: 5px 0;
      }
      .FortrydSletNyhedButton {
        width: 100%;
        margin: 5px 0;
      }
    }
  }
`;

const AdminSletNews = () => {
  const [nyhed, setNyhed] = useState({});
  const [slettet, setSlettet] = useState(false);
  const { newsid } = useParams();
  const history = useHistory();

  useEffect(() => {
    hentUdvalgtNyhed(newsid).then(setNyhed);
  }, [newsid]);

  const handleSletNyhed = (e) => {
    e.preventDefault();

    sletNyhed(newsid)
      .then(() => {
        setSlettet(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SletNyhedAdminSection>
      {!slettet ? (
        <>
          {" "}
          <header>
            <h2>Er du sikker på du vil slette denne nyhed</h2>
          </header>
          <section>
            <div>
              Titel: <span>{nyhed.titel}</span>
            </div>
            <div>
              Teaser: <span>{nyhed.teaser}</span>
            </div>
            <div>
              Bekrivelse: <span>{nyhed.nyhedstekst}</span>
            </div>
            <div>
              Billedtekst: <span>{nyhed.image}</span>
            </div>
          </section>
          <div className="SletNyhedButtonsContainer">
            <button
              className="FortrydSletNyhedButton"
              onClick={() => {
                history.push("/admin/adminnews");
              }}
            >
              Fortryd
            </button>
            <button className="SletNyhedButton" onClick={handleSletNyhed}>Slet</button>
          </div>
        </>
      ) : (
        <header>
          <h2>Nyheden er nu slettet!</h2>
        </header>
      )}
    </SletNyhedAdminSection>
  );
};

export default AdminSletNews;
