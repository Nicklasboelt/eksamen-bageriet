import React from "react";
import styled from "styled-components";

const ForsideContainer = styled.section`
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
`;

const AdminForside = () => {
  return (
    <ForsideContainer>
      <header>
        <h2>Velkommen til admin forsiden</h2>
      </header>
    </ForsideContainer>
  );
};

export default AdminForside;
