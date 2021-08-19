//Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "pages/Home";
import BookDetails from "pages/BookDetails";
import SearchResults from "pages/SearchResults";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />

      <Route path="/results/:page" component={SearchResults} exact />

      <Route path="/details/:id" component={BookDetails} exact />
    </Switch>
  </Router>
);

export default Routes;
