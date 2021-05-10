import React from "react";
import Styled from "styled-components";
import SearchBar from "./SearchBar";
import StyledButton from "./StyledButton";

const ToolBarContainer = Styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #eee7f9;
`;

const ContainerForLastElements = Styled.div`
  display: flex;
  margin: 1rem;
`;

class ToolBar extends React.Component {
  render() {
    return (
      <ToolBarContainer>
        <SearchBar />
        <ContainerForLastElements>
          <StyledButton>
            <i className="bi bi-bell-fill"></i>
          </StyledButton>
          <StyledButton>
            <i className="bi bi-person-circle"></i>
          </StyledButton>
        </ContainerForLastElements>
      </ToolBarContainer>
    );
  }
}

export default ToolBar;
