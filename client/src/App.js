import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import Home from "./pages/Home";
import Games from "./pages/Games";
import About from "./pages/About";
import Footer from "./components/Footer";
import RockPaperScissors from "./pages/Games/RockPaperScissors";

const App = () => {
  return (
    <Router>
      <div>
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
          <Route>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
