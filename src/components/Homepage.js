import React from "react";
import Welcome from "./Welcome/Welcome";
import Content from "./MainContent/Content";
import Contact from "./ContactForm/Contact";

function Homepage() {
  return (
    <div className="App parallax">
      <Welcome />
      <Content />
      <Contact />
    </div>
  );
}

export default Homepage;
