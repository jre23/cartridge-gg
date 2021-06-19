import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import Home from "./pages/Home";
import Games from "./pages/Games";
import About from "./pages/About";
import Footer from "./components/Footer";
import RockPaperScissors from "./pages/Games/RPS";
import CatNMouse from "./pages/Games/CatNMouse";
import CheesyPuffs from "./pages/Games/CheesyPuffs";
import ButtonClick from "./pages/Games/ButtonClick";

const App = () => {
  return (
    <Router>
      <NavLinks />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/games">
          <Games />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/rps">
          <RockPaperScissors />
        </Route>
        <Route exact path="/cnm">
          <CatNMouse />
        </Route>
        <Route exact path="/cheesypuffs">
          <CheesyPuffs />
        </Route>
        <Route exact path="/buttonclick">
          <ButtonClick />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
