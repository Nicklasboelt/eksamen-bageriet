import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { soegProdukt, soegNyheder } from "../../helpers/API/SoegAPI";
import styled from "styled-components";
import ProductCard from "../../Partials/ProductCard";

// Styling
const SoegeMain = styled.main`
  max-width: 1200px;
  height: auto;
  /* background-color: violet; */
  margin: 0 auto 100px auto;

  header {
    width: 100%;
    height: auto;
    padding: 100px 0 20px 0;
    font-size: ${(props) => props.theme.fontSizes.large};
    text-align: center;

    h2 {
      font-family: ${(props) => props.theme.fontStyles.lobster};
      color: ${(props) => props.theme.colors.textBlue};
      font-weight: ${(props) => props.theme.fontStyles.weightSmall};
    }
  }

  .SearchProductsTextContainer {
    width: 100%;
    height: auto;
    /* background-color: green; */
    color: ${(props) => props.theme.colors.infoText};
    text-align: center;
  }

  .SearchProductsArticleContainer {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    width: 100%;
    height: auto;
    margin-top: 50px;
    text-align: center;
  }

  .SearchNewsArticleContainer {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 100%;
    height: auto;
    margin-top: 50px;

    article {
      display: flex;
      flex-direction: column;
      width: 250px;
      min-height: 400px;
      margin: 0 50px 50px 50px;
      text-align: center;

      figure {
        width: 100%;
        height: auto;
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
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    .SearchNewsArticleContainer {
      justify-content: flex-start;
      align-items: center;
      flex-flow: column nowrap;

      article {
        width: 90%;
        max-width: 500px;
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow600} {
    .SearchProductsArticleContainer {
      justify-content: flex-start;
      align-items: center;
      flex-flow: column nowrap;
    }
  }
`;

const Soegeresultat = () => {
  const { soegeordet } = useParams();
  const [produkter, setProdukter] = useState();
  const [nyheder, setNyheder] = useState();

  useEffect(() => {
    soegProdukt(soegeordet).then(setProdukter);
    soegNyheder(soegeordet).then(setNyheder);
  }, [soegeordet]);

  let produktliste = (
    <h2>Der er ikke nogen produkter som matcher din søgning</h2>
  );
  let antalProdukter = "";

  if (produkter && produkter.length) {
    antalProdukter = (
      <p>{produkter.length + " Produkter matcher din søgning"}</p>
    );

    produktliste = produkter.map((p) => {
      return <ProductCard key={p._id} p={p} />;
    });
  }

  let nyhedsliste = <h2>Der er ikke nogen nyheder som matcher din søgning </h2>;
  let antalNyheder = "";

  if (nyheder && nyheder.length) {
    antalNyheder = (
        <p>{nyheder.length + " Nyheder matcher din søgning"}</p>
      );
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
        </article>
      );
    });
  }

  return (
    <SoegeMain>
      <header>
        <h2>Produkter</h2>
      </header>
      <div className="SearchProductsTextContainer">
        <p>
          {"Søgeresultater for: " + soegeordet}
          
        </p>
        {antalProdukter}
      </div>
      <div className="SearchProductsArticleContainer">{produktliste}</div>

      <header>
        <h2>Nyheder</h2>
      </header>
      <div className="SearchProductsTextContainer">
        <p>
          {"Søgeresultater for: " + soegeordet}
          
        </p>
        {antalNyheder}
      </div>
      <div className="SearchNewsArticleContainer">{nyhedsliste}</div>
    </SoegeMain>
  );
};

export default Soegeresultat;
