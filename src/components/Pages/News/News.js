import React, { useState, useEffect } from "react";
import styled from "styled-components";

// api - kald
import { hentAntalNyheder } from "../../helpers/API/NyhederAPI";

// Styling
const NewsContainer = styled.section`
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
    }
  }

  .newsTextContainer {
    width: 100%;
    height: auto;
    /* background-color: green; */
  }

  .newsArticleContainer {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 100%;
    height: auto;
    margin-top: 100px;

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
        }
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    .newsArticleContainer {

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

const News = () => {
  // State som rummer nyheder
  const [nyheder, setNyheder] = useState();

  useEffect(() => {
    hentAntalNyheder(3).then(setNyheder);
  }, []);

  let nyhedsliste = <h4>Loading...</h4>;

  if (nyheder && nyheder.length) {
    nyhedsliste = nyheder.map((n) => {
      return (
        <article key={n._id}>
          <figure>
            <img src={"http://localhost:5033/images/" + n.image} alt="" />
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
    <NewsContainer>
      <header>
        <h2>Vi skaber lækkert! brød</h2>
      </header>
      <div className="newsTextContainer">
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfædige ord, som på ingen måde ser ægte ud
        </p>
      </div>
      <div className="newsArticleContainer">{nyhedsliste}</div>
    </NewsContainer>
  );
};

export default News;
