import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Partials
import ProductCard from "../../Partials/ProductCard";

// api - kald
import { hentAntalNyeProdukter } from "../../helpers/API/ProductsAPI";

// Styling
const NewProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: auto;
  /* background-color: honeydew; */

  header {
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

  .newProductsTextContainer {
    width: 100%;
    height: auto;
    /* background-color: green; */
    color: ${(props) => props.theme.colors.infoText};
  }

  .newProductsArticleContainer {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    width: 100%;
    height: auto;
    margin-top: 100px;
  }

  @media ${({ theme }) => theme.mediaQueries.bellow600} {
    .newProductsArticleContainer {
      justify-content: flex-start;
      align-items: center;
      flex-flow: column nowrap;
    }
  }
`;

const NewProducts = () => {
  // State som rummer nye Produkter
  const [nyeProdukter, setNyeProdukter] = useState();

  useEffect(() => {
    hentAntalNyeProdukter(8).then(setNyeProdukter);
  }, []);

  let produktliste = <h4>Loading...</h4>;

  if (nyeProdukter && nyeProdukter.length) {
    produktliste = nyeProdukter.map((n) => {
      return (
        <ProductCard key={n._id} p={n} />
      );
    });
  }

  return (
    <NewProductsContainer>
      <header>
        <h2>Nyeste bagværk</h2>
      </header>
      <div className="newProductsTextContainer">
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfædige ord, som på ingen måde ser ægte ud
        </p>
      </div>
      <div className="newProductsArticleContainer">{produktliste}</div>
    </NewProductsContainer>
  );
};

export default NewProducts;
