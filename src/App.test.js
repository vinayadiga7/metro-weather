import App from "./App";
import { shallow } from "enzyme";

//we will describe our first test suite
describe("App", () => {
  // our first test case
  it("check if SideBar is loaded", () => {
    const appWrapper = shallow(<App />);
    const sidebar = appWrapper.find("SideBar");
  });
});
