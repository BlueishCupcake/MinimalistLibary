//Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "pages/Home";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </Router>
);

export default Routes;
