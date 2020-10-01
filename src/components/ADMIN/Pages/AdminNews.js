import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { hentAlleNyheder } from "../../helpers/API/NyhederAPI";

// Styling
const AdminNewsContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: auto;
  /* background-color: honeydew; */

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

  .OpretNyhedButtonContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    /* background-color: yellow; */
    margin-top: 10px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 100%;
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.textBlue};
      font-size: 20px;
      font-family: ${(props) => props.theme.fontStyles.openSans};
      text-decoration: none;
      transition: all 0.5s;
    }

    a:hover {
      background-color: #798b96;
    }
  }

  .AdminNewsArticleContainer {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 100%;
    height: auto;
    margin-top: 30px;

    article {
      display: flex;
      flex-direction: column;
      width: 250px;
      min-height: 400px;
      margin: 0 50px 50px 50px;

      figure {
        width: 100%;
        height: auto;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 30px;

        h3 {
          font-size: ${(props) => props.theme.fontSizes.medium};
          text-transform: ${(props) => props.theme.fontStyles.uppercase};
          color: ${(props) => props.theme.colors.textBlue};
          margin-top: 30px;
        }

        p {
          margin-top: 20px;
          line-height: 30px;
          color: ${(props) => props.theme.colors.infoText};
        }
      }
      .RetSletButtonContainer {
        align-items: flex-end;
        div {
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50px;
            border: solid 1.5px ${(props) => props.theme.colors.textBlue};
            border-radius: 5px;
            color: ${(props) => props.theme.colors.textBlue};
            transition: all 0.5s;
            text-decoration: none;
            font-family: ${(props) => props.theme.fontStyles.openSans};
            text-transform: ${(props) => props.theme.fontStyles.uppercase};
            margin: 5px;
          }
          a:hover {
            background-color: ${(props) => props.theme.colors.textBlue};
            color: ${(props) => props.theme.colors.white};
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    .AdminNewsArticleContainer {
      justify-content: flex-start;
      align-items: center;
      flex-flow: column nowrap;

      article {
        width: 90%;
        max-width: 500px;
      }
    }
  }
`;

const AdminNews = () => {
  // State som rummer nyheder
  const [nyheder, setNyheder] = useState();

  useEffect(() => {
    hentAlleNyheder().then(setNyheder);
  }, []);

  let nyhedsliste = <h4>Loading...</h4>;

  if (nyheder && nyheder.length) {
    nyhedsliste = nyheder.map((n) => {
      return (
        <article key={n._id}>
          <figure>
            <img
              src={"http://localhost:5033/images/" + n.image}
              alt={n.titel}
            />
          </figure>
          <div>
            <h3>{n.titel}</h3>
          </div>
          <div>
            <p>{n.teaser}</p>
          </div>
          <div className="RetSletButtonContainer">
            <div>
              <Link to={"/admin/newsret/" + n._id}>Ret Nyheden</Link>
            </div>
            <div>
              <Link to={"/admin/newsslet/" + n._id}>Slet Nyheden</Link>
            </div>
          </div>
        </article>
      );
    });
  }

  return (
    <AdminNewsContainer>
      <header>
        <h2>Nyheder</h2>
      </header>
      <div className="OpretNyhedButtonContainer">
        <Link to="/admin/opretnews">Opret Nyhed</Link>
      </div>

      <div className="AdminNewsArticleContainer">{nyhedsliste}</div>
    </AdminNewsContainer>
  );
};

export default AdminNews;
