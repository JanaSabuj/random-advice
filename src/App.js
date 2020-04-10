import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Box from "./components/Box";
import Version from "./components/Version";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="row" style={{ height: "75px" }}>
          {" "}
        </div>
        <Switch>
          <Route exact path="/" component={Box} />
          <Route exact path="/version" component={Version} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
