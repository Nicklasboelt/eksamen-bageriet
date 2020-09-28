import React, { useEffect } from "react";
import styled from "styled-components";

// script til slider
import { runSlideshow, stopTimer } from "./slide";

// images til slider
import slide1 from "../../../assets/sliderImages/slide1.jpg";
import slide2 from "../../../assets/sliderImages/slide2.jpg";
import slide3 from "../../../assets/sliderImages/slide3.jpg";

// Styling
const SliderContainer = styled.div`
  display: flex;
  width: 100%;

  .slideshow-container {
    /* Slideshow container */
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    position: relative;

    /* Hide the images by default */
    figure {
      display: none;

      img {
        width: 100%;
        height: auto;
      }

      figcaption {
        /* Caption text */
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        padding: 8px 12px;
        
        text-align: center;

        color: ${(props) => props.theme.colors.white};
        font-size: ${(props) => props.theme.fontSizes.h1};
        font-family: ${(props) => props.theme.fontStyles.lobster};
        font-weight: ${(props) => props.theme.fontStyles.weightSmall};
      }
    }
  }

  .dotContainer {
    display: flex;
    justify-content: center;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 50px;

    .dot {
      cursor: pointer;
      height: 25px;
      width: 25px;
      margin: 0 5px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }

    .active,
    .dot:hover {
      background-color: #717171;
    }
  }

  .ArrowContainer {

    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;


    /* Next & previous buttons */
    .prev,
    .next {
      cursor: pointer;
      position: absolute;
      
      width: auto;
      
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
      font-size: 50px;
    }
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  /* The dots/bullets/indicators */

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 0.7;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.7;
    }
    to {
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    .slideshow-container {
      figure {
        figcaption {
          font-size: ${(props) => props.theme.fontSizes.extraLarge};
        }
      }
      .ArrowContainer{
        display: none;
      }
    }
  }
  @media ${({ theme }) => theme.mediaQueries.bellow500} {
    .slideshow-container {
      figure {
        figcaption {
          font-size: ${(props) => props.theme.fontSizes.large};
        }
      }
      .dotContainer {
        display: none;
      }
    }
  }
`;

const SlideshowStatic = () => {
  // Når componenten er loadet
  useEffect(() => {
    runSlideshow();

    // cleanup function - når component unmounter/"unloader"
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <SliderContainer id="slider">
      <div className="slideshow-container">
        <figure className="mySlides fade">
          <img src={slide1} alt="Billede af brød" />
          <figcaption className="text">Vi elsker at lave brød</figcaption>
        </figure>
        <figure className="mySlides fade">
          <img src={slide2} alt="Billede af brød" />
          <figcaption className="text">
            Vi har altid frisk brød klar til dig
          </figcaption>
        </figure>
        <figure className="mySlides fade">
          <img src={slide3} alt="Billede af brød" />
          <figcaption className="text">
            Vores brød er håndlavet fra bunden
          </figcaption>
        </figure>

        <div className="ArrowContainer">
          <span className="prev">&#10094;</span>
          <span className="next">&#10095;</span>
        </div>

        <div className="dotContainer">
          <span className="dot dot1" onclick="currentSlide(1)"></span>
          <span className="dot dot2" onclick="currentSlide(2)"></span>
          <span className="dot dot3" onclick="currentSlide(3)"></span>
        </div>
      </div>
    </SliderContainer>
  );
};

export default SlideshowStatic;
