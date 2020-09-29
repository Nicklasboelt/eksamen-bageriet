import React, { useState, useEffect } from "react";
import $ from "jquery";
import styled from "styled-components";

// Partials
import ProductCard from "../../Partials/ProductCard";

// api - kald
import { hentAlleProdukter } from "../../helpers/API/ProductsAPI";
import { hentKategorier } from "../../helpers/API/KategorierAPI";

// Styling
const ProductsMain = styled.main`
  max-width: 1200px;
  height: auto;
  /* background-color: violet; */
  margin: 0 auto;

  .allProductsHeadingContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: auto;
    /* background-color: honeydew; */
  }

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

  .allProductsTextContainer {
    width: 100%;
    height: auto;
    /* background-color: green; */
    color: ${(props) => props.theme.colors.infoText};
  }

  .kategoriHeading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 30px;
    margin-top: 100px;
    font-family: ${(props) => props.theme.fontStyles.openSemiBold};
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.colors.textBlue};
    text-transform: ${(props) => props.theme.fontStyles.uppercase};
  }

  .allProductsContainer {
    display: flex;
    width: 100%;
    height: auto;
    margin-top: 50px;
    text-align: center;
    nav {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: auto;
      height: 100%;

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        height: 100%;

        li {
          list-style-type: none;
          margin: 10px 0;
          text-align: end;
          color: ${(props) => props.theme.colors.infoText};
          cursor: pointer;

          a {
            text-decoration: none;
            font-size: ${(props) => props.theme.fontSizes.medium};
            font-family: ${(props) => props.theme.fontStyles.openSemiBold};
            text-transform: ${(props) => props.theme.fontStyles.uppercase};
            transition: 0.5s;
          }
        }

        .kategoriActive {
          color: ${(props) => props.theme.colors.textBlue};
          a {
            transition: 0.5s;
            font-size: 25px;
            font-weight: bolder;
          }
        }
      }
    }

    .allProductsArticleContainer {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      width: 100%;
      height: auto;
    }

    @media ${({ theme }) => theme.mediaQueries.bellow768} {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;

      nav {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        width: 100%;
        height: 100%;

        ul {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;

          li {
            margin: 10px;
            text-align: center;

            a {
              text-decoration: none;
              font-size: ${(props) => props.theme.fontSizes.medium};
              font-family: ${(props) => props.theme.fontStyles.openSemiBold};
              text-transform: ${(props) => props.theme.fontStyles.uppercase};
              color: ${(props) => props.theme.colors.infoText};
            }
          }
        }
      }
    }

    @media ${({ theme }) => theme.mediaQueries.bellow600} {
      .allProductsArticleContainer {
        justify-content: flex-start;
        align-items: center;
        flex-flow: column nowrap;
      }
    }
  }
`;

const Produkter = () => {
  // State som rummer nye Produkter
  const [produkter, setProdukter] = useState({});
  const [kategorier, setKategorier] = useState();
  const [valgtKategori, setValgtKategori] = useState(
    "5f63b9f9702cca37f87ce06f"
  );

  // state til kategori header
  const [headerKategori, setHeaderKategori] = useState("");

  useEffect(() => {
    hentAlleProdukter().then(setProdukter);
    hentKategorier().then(setKategorier);
  }, []);

  // Checker om li har class active og skifter dem ud
  $(".nav-list").on("click", "li", function () {
    $(".nav-list li.kategoriActive").removeClass("kategoriActive");
    $(this).addClass("kategoriActive");
  });

  // KATEGORIER indlæses på siden
  let kategoriliste = <li>Vent venlist ... indlæses</li>;

  if (kategorier && kategorier.length) {
    kategoriliste = kategorier.map((k) => (
      <li
        onClick={() => setValgtKategori(k._id) + setHeaderKategori(k.titel)}
        key={k._id}
      >
        <a> {k.titel}</a>
      </li>
    ));
  }

  // Når component Loader og der endnu ikke er events i event-state
  let produktliste = <h2>Loading...</h2>;
  // Når der er noget i event-state
  if (produkter && produkter.length) {
    // Over 10 km: e.distance > 10000 & e.distance < 999999999
    // Under 10 km: e.distance > 0 & e.distance < 10001
    produktliste = produkter
      .filter((p) => {
        return p.kategori._id === valgtKategori;
      })
      .map((p) => {
        return (
          <>
            <ProductCard key={p._id} p={p} />
          </>
        );
      });
  }

  return (
    <ProductsMain>
      <div className="allProductsHeadingContainer">
        <header>
          <h2>Nyeste bagværk</h2>
        </header>
        <div className="allProductsTextContainer">
          <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
            udgaver har gennemgået forandringer, når nogen har tilføjet humor
            eller tilfædige ord, som på ingen måde ser ægte ud
          </p>
        </div>
      </div>
      <div className="kategoriHeading">{headerKategori}</div>
      <section className="allProductsContainer">
        <nav>
          <ul className="nav-list">{kategoriliste}</ul>
        </nav>

        <div className="allProductsArticleContainer">{produktliste}</div>
      </section>
    </ProductsMain>
  );
};

export default Produkter;
