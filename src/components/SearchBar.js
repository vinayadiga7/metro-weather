import React from "react";
import Styled from "styled-components";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";
import { GEOCODE_APIKEY } from "../Constants";
import axios from "axios";

const SearchBarContainer = Styled.div`
    padding: 1rem;
    width: 100%;
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.handleChangeSearchTerm = this.handleChangeSearchTerm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeSearchTerm(e) {
    let value = e.target.value;
    console.log(value);
    this.setState({
      searchTerm: value,
    });
  }

  handleSubmit(e) {
    console.log("From submit handler");
    e.preventDefault();
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchTerm}&key=${GEOCODE_APIKEY}&sensor=false`;
    axios
      .get(url)
      .then((response) => console.log(response))
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <SearchBarContainer>
        <StyledButton click={this.handleSubmit}>
          <i className="bi bi-search"></i>
        </StyledButton>
        <StyledInput
          placeholder="Search for city"
          width="70%"
          fontSize="1.6rem"
          fontWeight="700"
          value={this.state.searchTerm}
          change={this.handleChangeSearchTerm}
        ></StyledInput>
      </SearchBarContainer>
    );
  }
}

export default SearchBar;
