
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
html{
  scroll-behavior: smooth;
}

body {
  background-color: #F7F7F7;
}

`;

export default GlobalStyle;
