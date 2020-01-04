import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import Content from "./components/MainContent/Content";
import "./style/App.css";

function App() {
  return (
    <div className="App parallax">
      <NavBar />
      <Welcome />
      <Content />
    </div>
  );
}

export default App;
