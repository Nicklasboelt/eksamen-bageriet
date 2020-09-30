import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import parse from "html-react-parser";
import dayjs from "dayjs";

// api - kald
import { hentUdvalgtProdukt, likeProdukt } from "../../helpers/API/ProductsAPI";

// Icons
import { FiHeart } from "react-icons/fi";
import { FaHeart, FaRegComments, FaPencilAlt } from "react-icons/fa";

// Styling
const ProductMain = styled.main`
  max-width: 1200px;
  height: auto;
  /* background-color: violet; */
  margin: 0 auto;

  article {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 50px;

    /*--------------------------------Header Section------------------------------------*/
    header {
      display: flex;
      width: 100%;

      min-height: 100px;

      div {
        display: flex;
        flex-direction: column;
        width: 60%;
        height: 100%;
        /* background-color: firebrick; */

        h3 {
          font-size: ${(props) => props.theme.fontSizes.large};
          font-family: ${(props) => props.theme.fontStyles.openSans};
          text-transform: ${(props) => props.theme.fontStyles.uppercase};
          color: ${(props) => props.theme.colors.textBlue};
        }
        h4 {
          font-size: ${(props) => props.theme.fontSizes.medium};
          font-family: ${(props) => props.theme.fontStyles.openSans};
          text-transform: ${(props) => props.theme.fontStyles.uppercase};
          color: ${(props) => props.theme.colors.infoText};
        }
      }

      .likeButtonContainer {
        align-items: flex-end;

        width: 40%;
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 225px;
          height: 50px;
          border: solid 2px ${(props) => props.theme.colors.textBlue};
          border-radius: 5px;
          color: ${(props) => props.theme.colors.textBlue};
          transition: all 0.5s;
          font-family: ${(props) => props.theme.fontStyles.openSans};
          text-transform: ${(props) => props.theme.fontStyles.uppercase};
          background-color: unset;
          cursor: pointer;

          .Heart {
            color: red;
            margin-left: 10px;
          }
        }
        button:hover {
          background-color: ${(props) => props.theme.colors.textBlue};
          color: ${(props) => props.theme.colors.white};
        }
        .LikeActive {
          background-color: crimson;
          color: ${(props) => props.theme.colors.white};
          border: none;

          .HeartActive {
            margin-left: 10px;
          }
        }
        .LikeActive:hover {
          background-color: crimson;
          color: ${(props) => props.theme.colors.white};
        }
      }
    }

    /*--------------------------------Produkt Section------------------------------------*/

    .produktInfoContainer {
      display: flex;
      width: 100%;
      height: 100%;

      .pictureAndTextContainer {
        display: flex;

        p {
          line-height: 30px;
          padding: 0 25px 50px 0;
          color: ${(props) => props.theme.colors.infoText};
        }
      }
      figure {
        min-width: 250px;
        height: 250px;
        margin: 0 15px 15px 0;

        overflow: hidden;

        img {
          width: 250px;
          height: 250px;
          object-fit: cover;
        }
      }

      .ingrediensContainer {
        display: flex;
        flex-direction: column;
        min-width: 400px;
        height: auto;

        h3 {
          color: ${(props) => props.theme.colors.textBlue};
          margin-bottom: 20px;
        }

        ul {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;

          li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 70px;
            margin: 5px 0;
            list-style-type: none;
            background-color: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.infoText};
            font-family: ${(props) => props.theme.fontStyles.openSans};
          }
        }
      }
    }
  }

  /*--------------------------------Kommentar Section------------------------------------*/
  .kommentarSection {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 100px;

    .kommentarHeading {
      display: flex;
      width: 100%;
      height: 50px;
      /* background-color: firebrick; */
      padding-left: 30px;
      border: 1px solid ${(props) => props.theme.colors.infoText};
      background-color: ${(props) => props.theme.colors.white};

      div {
        display: flex;
        align-items: center;
        width: 100%;

        p {
          font-family: ${(props) => props.theme.fontStyles.openSemiBold};
          font-size: ${(props) => props.theme.fontSizes.medium};
          color: ${(props) => props.theme.colors.textBlue};
        }
      }
      figure {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: auto;
        color: ${(props) => props.theme.colors.infoText};
        font-family: ${(props) => props.theme.fontStyles.openSans};
        font-size: ${(props) => props.theme.fontSizes.p};

        .kommentarIcon {
          margin-left: 10px;
        }
      }
    }

    form {
      display: flex;
      width: 100%;
      height: 50px;
      padding-left: 30px;

      border: 1px solid ${(props) => props.theme.colors.infoText};
      margin: 10px 0;
      background-color: ${(props) => props.theme.colors.white};

      .iconInputContainer {
        display: flex;
        width: 100%;
        height: auto;
        div {
          display: flex;
          align-items: center;
          min-width: 30px;
          height: 50px;
          color: ${(props) => props.theme.colors.textBlue};
          font-size: 19px;
        }
      }

      input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 20px;
        color: ${(props) => props.theme.colors.textBlue};
      }
      button {
        min-width: 150px;
        height: 50px;
        border: none;
        background-color: ${(props) => props.theme.colors.textBlue};
        color: ${(props) => props.theme.colors.white};
        font-size: 16px;
        font-family: ${(props) => props.theme.fontStyles.openSemiBold};
        text-transform: ${(props) => props.theme.fontStyles.uppercase};
        cursor: pointer;
        transition: all 0.5s;
      }
      button:hover {
        background-color: #798b96;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;

      article {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 250px;
        border: 1px solid ${(props) => props.theme.colors.infoText};
        background-color: ${(props) => props.theme.colors.white};
        padding: 20px;
        margin: 5px 0;

        h4 {
          color: ${(props) => props.theme.colors.textBlue};
          font-size: ${(props) => props.theme.fontSizes.large};
          font-family: ${(props) => props.theme.fontStyles.openSemiBold};
        }

        h5 {
          color: ${(props) => props.theme.colors.textBlue};
          font-size: ${(props) => props.theme.fontSizes.medium};
          font-family: ${(props) => props.theme.fontStyles.openSemiBold};
          margin: 20px 0 10px 0;
        }

        p {
          color: ${(props) => props.theme.colors.infoText};
          font-size: ${(props) => props.theme.fontSizes.p};
          font-family: ${(props) => props.theme.fontStyles.openSemiBold};
        }
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    article {
      align-items: center;
      header {
        display: flex;
        width: 95%;
      }

      .produktInfoContainer {
        flex-direction: column;

        .pictureAndTextContainer {
          display: flex;
          flex-direction: column;
          align-items: center;

          p {
            line-height: 30px;
            padding: 50px;
            color: ${(props) => props.theme.colors.infoText};
          }

          figure {
            width: 95%;
            height: auto;
            margin: 0;

            img {
              width: 100%;

              height: 400px;

              object-fit: cover;
            }
          }
        }

        .ingrediensContainer {
          width: 100%;
          min-width: unset;
          text-align: center;
          margin-top: 50px;

          ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;

            li {
              width: 285px;
              margin: 5px;
            }
          }
        }
      }
    }

    .kommentarSection {
      padding: 0 10px;
      form {
        flex-direction: column;
        height: auto;
        padding: 0;
        .iconInputContainer {
          div {
            justify-content: center;
            min-width: 50px;
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    article {
      .produktInfoContainer {
        .pictureAndTextContainer {
          flex-direction: column;
          align-items: center;
          p {
            padding: 20px;
            line-height: 25px;
          }
        }
        figure {
          width: 95%;
          height: auto;
          margin: 0;

          img {
            width: 100%;

            height: 300px;

            object-fit: cover;
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow600} {
    article {
      header {
        flex-direction: column;
        height: auto;
        margin-bottom: 40px;

        div {
          width: 100%;
          text-align: center;
        }

        .likeButtonContainer {
          width: 100%;
          align-items: center;
          button {
            width: 300px;
            max-width: 300px;
          }
        }
      }
      .produktInfoContainer {
        .ingrediensContainer {
          ul {
            li {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

const Produkt = () => {
  // State og Funktioner------------------------------------------
  const { produktid } = useParams();
  const [produktet, setProduktet] = useState({});
  const [produktLiket, setProduktLiket] = useState(false);

  useEffect(() => {
    hentUdvalgtProdukt(produktid).then(setProduktet);
  }, [produktid]);

  const handleOnclick = () => {
    likeProdukt(produktid);
    setProduktLiket(true);
  };

  //----------- KommentarListe -----------------
  let kommentarliste = <h2>Ingen kommentare at vise</h2>;

  if (produktet.kommentar && produktet.kommentar.length) {
    kommentarliste = produktet.kommentar.map((k) => {
      return (
        <article key={k._id}>
          <h4>{k.bruger.brugernavn}</h4>
          <p>{dayjs(k.oprettet).format("DD. MMMM kl. HH:mm YYYY ")}</p>
          <h5> {k.titel}</h5>
          <p> {k.kommentaren}</p>
        </article>
      );
    });
  }

  //----------- Ingrediensliste -----------------
  let ingrediensliste = <h2>Ingen ingredienser at vise</h2>;

  if (produktet.ingredienser && produktet.ingredienser.length) {
    ingrediensliste = produktet.ingredienser.map((i) => {
      return <li key={i._id}>{i.ingrediens_titel}</li>;
    });
  }

  // let beskrivelseJson = JSON.stringify(produktet.beskrivelse)
  // let beskrivelse = JSON.parse(beskrivelseJson)

  // console.log(beskrivelse)

  return (
    <ProductMain>
      <article>
        <header>
          <div>
            <h3>{produktet.titel}</h3>
            <h4>Kategori</h4>
          </div>
          <div className="likeButtonContainer">
            {produktLiket ? (
              <button className="LikeActive">
                Produktet er Liked <FaHeart className="HeartActive" />
              </button>
            ) : (
              <button onClick={handleOnclick}>
                Like!
                <FiHeart className="Heart" />
              </button>
            )}
          </div>
        </header>

        <div className="produktInfoContainer">
          <div className="pictureAndTextContainer">
            <figure>
              <img
                src={"http://localhost:5033/images/" + produktet.image}
                alt=""
              />
            </figure>
            <p>{produktet.beskrivelse}</p>
          </div>

          <div className="ingrediensContainer">
            <h3>Ingredienser</h3>
            <ul>{ingrediensliste}</ul>
          </div>
        </div>
      </article>

      <section className="kommentarSection">
        <div className="kommentarHeading">
          <div>
            <p>Kommentar</p>
          </div>
          <figure>
            <figcaption>{kommentarliste.length}</figcaption>
            <FaRegComments className="kommentarIcon" />
          </figure>
        </div>
        <form>
          <div className="iconInputContainer">
            <div>
              <FaPencilAlt />
            </div>

            <input placeholder="fortæl os hvad du synes...." />
          </div>
          <button>Indsæt</button>
        </form>

        <section>{kommentarliste}</section>
      </section>
    </ProductMain>
  );
};

export default Produkt;
