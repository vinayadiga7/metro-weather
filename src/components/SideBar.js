import React from "react";
import Navigation from "./Navigation";
import CurrentWeatherCard from "./CurrentWeatherCard";
import styled from "styled-components";
import axios from "axios";
import { OPENWEATHERMAP_APIKEY } from "../Constants";

const AppHeading = styled.h1`
  color: #f2f2f2;
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem 0;
`;

const SideBarContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCityWeather: null,
      currentCityGeoCode: null,
    };
    this.changeCurrentCity = this.changeCurrentCity.bind(this);
  }

  changeCurrentCity(geolocation) {
    this.setState({
      currentCityGeoCode: {
        latitude: geolocation.coords.latitude,
        longitude: geolocation.coords.longitude,
      },
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (geolocation) => {
        this.changeCurrentCity(geolocation);
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.currentCityGeoCode.latitude}&lon=${this.state.currentCityGeoCode.longitude}&appid=${OPENWEATHERMAP_APIKEY}`;
        axios.get(url).then((result) => {
          this.setState({
            currentCityWeather: result.data.current,
          });
        });
      },
      () => {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${12.972442}&lon=${77.580643}&appid=${OPENWEATHERMAP_APIKEY}`;
        axios.get(url).then((result) => {
          this.setState({
            currentCityWeather: result.data.current,
          });
        });
      }
    );
  }

  render() {
    console.log(this.state);
    return (
      <SideBarContainer>
        <div>
          <AppHeading>MetroWeather</AppHeading>
          <Navigation />
        </div>
        <div style={{ alignSelf: "center" }}>
          <CurrentWeatherCard
            currentCityWeather={this.state.currentCityWeather}
          />
        </div>
      </SideBarContainer>
    );
  }
}

export default SideBar;
