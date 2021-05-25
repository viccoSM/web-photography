import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default Routes;