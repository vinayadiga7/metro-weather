import { shallow } from "enzyme";
import SideBar from "./SideBar";
import Navigation from "./Navigation";
import React from "react";

describe("Sidebar", () => {
  it("check if the sidebar is loaded", () => {
    const sideBarWrapper = shallow(<SideBar />);
  });

  it("check if the app name is present", () => {
    const sideBarWrapper = shallow(<SideBar />);
    expect(sideBarWrapper.find("h1").text()).toContain("MetroWeather");
  });

  it("navigation menu", () => {
    const sideBarWrapper = shallow(<SideBar />);
    expect(sideBarWrapper.find(<Navigation />));
  });

  it("", () => {
    const sideBarWrapper = shallow(<SideBar />);
    expect(sideBarWrapper.find(".current-city-weather-card")).toHaveLength(1);
  });
});
