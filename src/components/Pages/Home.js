import React from "react";
import News from "./News/News";
import styled from 'styled-components'

// Pages
import Slider from "./Slideshow/Slider";


// Styling
const StyledMain = styled.main`
    max-width: 1200px;
    height: 2000px;
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
    </div>
  );
};

export default Home;
