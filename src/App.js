import React from "react";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import "./style/App.css";

function App() {
  return (
    <div className="App parallax">
      <NavBar />
      <Welcome />
    </div>
  );
}

export default App;