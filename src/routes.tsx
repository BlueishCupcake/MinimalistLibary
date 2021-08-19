//Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "pages/Home";
import SearchResults from "pages/SearchResults";
import BookDetails from "pages/BookDetails";
import FavoritesPage from "pages/FavoritesPage";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />

      <Route path="/results/:page" component={SearchResults} exact />

      <Route path="/details/:id" component={BookDetails} exact />

      <Route path="/favorites" component={FavoritesPage} exact />
    </Switch>
  </Router>
);

export default Routes;
