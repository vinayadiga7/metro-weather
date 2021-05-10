import React from "react";
import Styled from "styled-components";

const WeatherCardContainer = Styled.div`
    font-size: 1.4rem;
    background-color: white;
    width: 17rem; 
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    & > div {
      margin-top: 1rem;
      text-align: center;
    }
`;

const WeatherCardHeading = Styled.div`
  font-size: 1.8rem;
`;

const WeatherCardTemperature = Styled.div`
    font-size: 3rem;
    font-width: 900;
`;

const CurrentWeatherCard = (props) => {
  if (props.currentCityWeather) {
    const { wind_speed, humidity, weather, temp } = props.currentCityWeather;

    return (
      <WeatherCardContainer>
        <WeatherCardHeading>Today</WeatherCardHeading>
        <WeatherCardTemperature>
          {weather[0].main == "Clouds" ? (
            <i className="bi bi-cloud-sun-fill"></i>
          ) : (
            weather[0].main
          )}
          {(temp - 273.15).toFixed(2)} &deg;C
        </WeatherCardTemperature>
        <div>Bengaluru ~ {weather[0].description}</div>
        <div>WindSpeed: {wind_speed} </div>
        <div>Humidity: {humidity}</div>
      </WeatherCardContainer>
    );
  }
  return (
    <WeatherCardContainer>
      <WeatherCardHeading>Today</WeatherCardHeading>
    </WeatherCardContainer>
  );
};

export default CurrentWeatherCard;
