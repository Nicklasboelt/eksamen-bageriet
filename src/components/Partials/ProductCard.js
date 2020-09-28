import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";

// Icons
import { FaRegComments } from "react-icons/fa";

//Styling
const NewProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 400px;
  margin: 0 50px 50px 50px;

  figure {
    width: 100%;
    height: auto;

    overflow: hidden;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
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

  .ProduktLinkContainer {
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    width: 100%;
    height: 50px;
    /* background-color: orange; */

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
    }
    a:hover {
      background-color: ${(props) => props.theme.colors.textBlue};
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow600} {
    width: 90%;

    figure {
      img {
        width: 100%;
        
        height: 300px;
        
        object-fit: cover;
      }
    }
  }
`;

const ProductCard = (props) => {
  return (
    <NewProductContainer>
      <figure>
        <img src={"http://localhost:5033/images/" + props.n.image} alt="" />
      </figure>
      <div>
        <p>23</p>
        <FaRegComments />
      </div>
      <div>
        <h3>{props.n.titel}</h3>
      </div>
      <div>
        <p>
          {props.n.teaser.length > 90
            ? parse(props.n.teaser.substr(0, 90) + "...")
            : parse(props.n.teaser)}
        </p>
      </div>
      <div className="ProduktLinkContainer">
        <Link to="/">Se Mere</Link>
      </div>
    </NewProductContainer>
  );
};

export default ProductCard;
