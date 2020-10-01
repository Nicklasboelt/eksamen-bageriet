import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// api - kald
import { hentKategorier } from "../../helpers/API/KategorierAPI";
import { opretProdukt } from "../../helpers/API/ProductsAPI";

// context
// import { AuthDataContext } from "../../context/AuthDataContext";

// Til upload af images
import Imageuploader from "react-images-upload";

const OpretOpskriftMain = styled.main`
  max-width: 1200px;
  height: auto;
  margin: 0 auto;

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
    margin-bottom: 100px;

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
      font-size: 17px;
      color: ${(props) => props.theme.colors.textBlue};
    }

    select {
      width: 100%;
      min-height: 50px;
      padding-left: 20px;
      font-size: 20px;
      border: none;
      outline: none;
      color: ${(props) => props.theme.colors.textBlue};
      margin: 30px 0 30px 0;
      cursor: pointer;
    }
    .ButtonsContainer {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: auto;
      margin-bottom: 50px;
      

      .opretButton {
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
      .opretButton:hover {
        background-color: #5bc94d;
      }

      .ingrediensButton {
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

      .ingrediensButton:hover {
        background-color: #798b96;
      }

      div {
        width: 150px;

        min-height: 50px;
        background-color: ${(props) => props.theme.colors.textBlue};
        cursor: pointer;
        transition: all 0.5s;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          color: ${(props) => props.theme.colors.white};
          font-size: 20px;
          font-family: ${(props) => props.theme.fontStyles.openSans};
          text-decoration: none;
        }
      }
      div:hover {
        background-color: #798b96;
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    padding: 0 10px;
  }
  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    form {
      .ButtonsContainer {
        flex-direction: column-reverse;
        div {
          width: 100%;
          justify-content: center;

          margin-top: 20px;

          a {
            min-height: 50px;
          }
        }
        .opretButton {
          width: 100%;
        }
        .ingrediensButton {
          width: 100%;
        }
      }
    }
  }

  .ingrediensCardContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    margin-bottom: 100px;

    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      width: 100%;
      height: 100%;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 50px;
        margin: 10px;
        list-style-type: none;
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.infoText};
        font-family: ${(props) => props.theme.fontStyles.openSans};
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow600} {
    .ingrediensCardContainer {
      ul {
        flex-flow: column nowrap;

        li {
          width: 100%;
          margin: 5px 0;
        }
      }
    }
  }
`;

const OpretOpskrift = () => {
  const [kategorier, setKategorier] = useState();
  const [ingredienser, setIngredienser] = useState([]);

  const [oprettet, setOprettet] = useState(false);

  // // context
  // const { brugerData } = useContext(AuthDataContext);

  useEffect(() => {
    hentKategorier().then(setKategorier);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let produkt = {
      titel: e.target.titel.value,
      teaser: e.target.teaser.value,
      beskrivelse: e.target.beskrivelse.value,
      tilberedningstid: e.target.tilberedningstid.value,
      antal: e.target.antal.value,
      pris: e.target.pris.value,
      kategori: e.target.kategori.value,
      ingredienser: ingredienser,
    };
    console.log(produkt);

    let image = e.target.image.files[0];

    opretProdukt(produkt, image).then(setOprettet(true));

    console.log("image", image);
  };

  function addIngrediens(e) {
    e.preventDefault();

    // setKontaktInfo(Object.fromEntries(new FormData(e.target)));

    const ingrediens = Object.fromEntries(new FormData(e.target));
    console.log(ingrediens);

    setIngredienser((ingredienser) => [...ingredienser, ingrediens]);
  }

  console.log(ingredienser);

  let kategoriliste = <option>Vent venlist ... indlæses</option>;

  if (kategorier && kategorier.length) {
    kategoriliste = kategorier.map((k) => {
      return (
        <option key={k._id} value={k._id}>
          {k.titel}
        </option>
      );
    });
  }

  let ingrediensliste;

  if (ingredienser && ingredienser.length) {
    ingrediensliste = ingredienser.map((i) => {
      return (
        <li key={i._id}>
          {i.ingrediens_titel} {i.maengde} {i.enhed_forkortet}
        </li>
      );
    });
  }

  return (
    <OpretOpskriftMain>
      {!oprettet ? (
        <>
          <header>
            <h2>Opret Opskrift</h2>
          </header>
          <form onSubmit={handleSubmit} id="opretForm">
            <label htmlFor="inpTitel">Indtast opskriftens titel</label>
            <input
              type="text"
              name="titel"
              placeholder="Titel..."
              required
              id="inpTitel"
            />
            <label htmlFor="inpTeaser">Indtast opskriftens teaser</label>
            <input
              type="text"
              name="teaser"
              placeholder="Teaser..."
              required
              id="inpTeaser"
            />
            <label htmlFor="inpBeskrivelse">
              Indtast opskriftens beskrivelse
            </label>
            <textarea
              type="text"
              name="beskrivelse"
              placeholder="Beskrivelse..."
              required
              id="inpBeskrivelse"
            />
            <label htmlFor="inpTilberedningstid">
              Indtast opskriftens tilberedningstid i minutter
            </label>
            <input
              type="number"
              name="tilberedningstid"
              placeholder="Tilberedningstid..."
              required
              id="inpTilberedningstid"
            />
            {/* <input type="text" name="rolle" value="medlem" hidden required /> */}
            <label htmlFor="inpAntal">Intast opskriftens antal</label>
            <input
              name="antal"
              type="number"
              placeholder="Antal..."
              required
              id="inpAntal"
            />

            <input
              name="pris"
              type="number"
              placeholder="Pris..."
              required
              id="inpPris"
            />

            <Imageuploader
              name="image"
              withIcon={true}
              buttonText="Vælg et billede"
              withLabel={true}
              imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
              singleImage={true}
              withPreview={true}
              required={true}
            />
            <select name="kategori" defaultValue="DEFAULT" id="kategoriselect">
              <option value="DEFAULT" disabled>
                Vælg kategori
              </option>
              {kategoriliste}
            </select>

           
          </form>
          <header>
            <h2>Ingredienser</h2>
          </header>
          <form onSubmit={addIngrediens}>
            <label htmlFor="inpIngrediensTitel">
              Intast Ingrediensens titel
            </label>
            <input
              type="text"
              placeholder="Titel..."
              name="ingrediens_titel"
              required
              id="inpIngrediensTitel"
            />
            <label htmlFor="inpIngrediensMaengde">
              Intast Ingrediensens maengde (ikke påkrævet)
            </label>
            <input
              type="number"
              placeholder="Mængde..."
              name="maengde"
              id="inpIngrediensMaengde"
            />
            <label htmlFor="inpIngrediensEnhedForkortet">
              Intast Ingrediensens forkortet enhed (ikke påkrævet)
            </label>
            <input
              type="text"
              placeholder="Forkortet enhed..."
              name="enhed_forkortet"
              id="inpIngrediensEnhedForkortet"
            />
            <label htmlFor="inpIngrediensEnhedNavn">
              Intast Ingrediensens fulde enheds navn (ikke påkrævet)
            </label>
            <input
              type="text"
              placeholder="Enhedens Fulde navn..."
              name="enhed_navn"
              id="inpIngrediensEnhedNavn"
            />

            <div className="ButtonsContainer">
              <button className="ingrediensButton" type="submit">
                Tilføj ingrediens
              </button>
            </div>

            <div className="ButtonsContainer">
              <div>
                <Link to="/produkter">Tilbage</Link>
              </div>

              <button className="opretButton" type="submit" form="opretForm" >
                Opret
              </button>
            </div>
          </form>
          <section className="ingrediensCardContainer">
            <ul>{ingrediensliste}</ul>
          </section>
         
        </>
      ) : (
        <header>
          <h2>Opskrift oprettet</h2>
        </header>
      )}
    </OpretOpskriftMain>
  );
};

export default OpretOpskrift;
