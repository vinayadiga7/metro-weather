import React from "react";
import ToolBar from "./ToolBar";
import WeatherForecasts from "./WeatherForecasts";

class Home extends React.Component {
  render() {
    return (
      <>
        <header>
          <ToolBar />
        </header>
        <main>
          <section>
            <WeatherForecasts></WeatherForecasts>
          </section>
          <section>
            Weather Forecast for the specfic city for next 7 days and today
          </section>
          <section>Weather Graph</section>
        </main>
      </>
    );
  }
}

export default Home;
