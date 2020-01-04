import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import Content from "./components/MainContent/Content";
import Contact from "./components/ContactForm/Contact";
import "./style/App.css";

function App() {
  return (
    <div className="App parallax">
      <NavBar />
      <Welcome />
      <Content />
      <Contact />
    </div>
  );
}

export default App;
