// eslint-disable-next-line

import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main-section">
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
