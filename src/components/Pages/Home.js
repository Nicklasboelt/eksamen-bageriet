import React from "react";
import styled from 'styled-components'

// Pages
import Slider from "./Slideshow/Slider";
import News from "./News/News";
import NewsLetter from "./NyhedsBrev/NewsLetter";
import NewProducts from "./NewProducts/NewProducts";


// Styling
const StyledMain = styled.main`
    max-width: 1200px;
    min-height: auto;
    /* background-color: violet; */
    margin: 0 auto;

    
`

const Home = () => {
  return (
    <div>
      <Slider />
      <StyledMain>
        <News />  
      </StyledMain>
      <NewsLetter />

      <StyledMain>
        <NewProducts />
      </StyledMain>

    </div>
  );
};

export default Home;
