import React from "react";
import Styled from "styled-components";

const WeatherForecastHeading = Styled.span`
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    color: #706e72;
    text-transform: uppercase;
    margin: 1rem;
    padding: 1rem;
`;

class WeatherForecasts extends React.Component {
  render() {
    return (
      <div>
        <WeatherForecastHeading>Weather Forecast</WeatherForecastHeading>
      </div>
    );
  }
}

export default WeatherForecasts;
