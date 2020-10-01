import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import ImageUploader from "react-images-upload";

// api - kald
import { retNyhed, hentUdvalgtNyhed } from "../../helpers/API/NyhederAPI";

const RetNyhedAdminSection = styled.section`
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

    figure {
    width: 100%;
    height: auto;
    text-align: center;
    overflow: hidden;
    

    img {
      width: 400px;
      height: 250px;
      object-fit: cover;
      border-radius: 5px;
    }
  }

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

    .RetNyhedButtonsContainer {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: auto;
      margin-bottom: 50px;

      .GemNyhedButton {
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
      .GemNyhedButton:hover {
        background-color: #5bc94d;
      }

      .FortrydNyhedButton {
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

      .FortrydNyhedButton:hover {
        background-color: #798b96;
      }
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow500} {
    form {
      .RetNyhedButtonsContainer {
        flex-direction: column;

        .GemNyhedButton {
          width: 100%;
          margin: 5px 0;
        }
        .FortrydNyhedButton {
          width: 100%;
          margin: 5px 0;
        }
      }
    }
  }
`;

const AdminRetNews = () => {
  const [nyhed, setNyhed] = useState({});
  const [nyhedbillede, setNyhedbillede] = useState();
  const history = useHistory();
  const { newsid } = useParams();

  useEffect(() => {
    hentUdvalgtNyhed(newsid).then((n) =>
      setNyhed({
        titel: n.titel,
        teaser: n.teaser,
        nyhedstekst: n.nyhedstekst,
        image: n.image,
      })
    );
  }, [newsid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    retNyhed(newsid, nyhed, nyhedbillede).then((data) => {
      console.log(data);
      history.push("/admin/adminnews");
    });
  };

  return (
    <RetNyhedAdminSection>
      <header>
        <h2>Ret Nyhed</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inpTitel">Indtast opskriftens titel</label>
        <input
          type="text"
          name="titel"
          placeholder="Titel..."
          required
          id="inpTitel"
          defaultValue={nyhed.titel}
          onChange={(e) => setNyhed({ ...nyhed, titel: e.target.value })}
        />
        <label htmlFor="inpTeaser">Indtast opskriftens teaser</label>
        <textarea
          type="text"
          name="teaser"
          placeholder="Teaser..."
          required
          id="inpTeaser"
          defaultValue={nyhed.teaser}
          onChange={(e) => setNyhed({ ...nyhed, titel: e.target.value })}
        />
        <label htmlFor="inpNyhedsTekst">Indtast opskriftens teaser</label>
        <textarea
          type="text"
          name="nyhedstekst"
          placeholder="Nyhedstekst..."
          required
          id="inpNyhedsTekst"
          defaultValue={nyhed.nyhedstekst}
          onChange={(e) => setNyhed({ ...nyhed, titel: e.target.value })}
        />

        <figure>
          <img
            src={"http://localhost:5033/images/" + nyhed.image}
            alt={nyhed.titel}
          />
        </figure>

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
        <div className="RetNyhedButtonsContainer">
          <button className="FortrydNyhedButton" onClick={() => {history.push('/admin/adminnews')}}>Fortryd</button>
          <button className="GemNyhedButton" type="submit">Gem</button>
        </div>
      </form>
    </RetNyhedAdminSection>
  );
};

export default AdminRetNews;
