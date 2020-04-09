import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import Box from "./components/Box";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row" style={{ height: "75px" }}>
        {" "}
      </div>
      <Box />
    </div>
  );
}
