import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./components/Homepage";
import ExercisePage from "./components/ExercisePage";
import Food from "./components/Food";
import "./style/App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/exercise" component={ExercisePage} />
        <Route path="/food" component={Food} />
        <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
