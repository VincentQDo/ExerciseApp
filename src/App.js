import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
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
