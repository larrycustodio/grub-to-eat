import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SearchDisplay from "./components/SearchDisplay";
import SearchResults from "./components/SearchResults";
import RestaurantMenu from "./components/RestaurantMenu";
import UserProfile from "./components/UserProfile";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={SearchDisplay} />
          <Route path="/login" component={Login} />
          <Route path="/results" component={SearchResults} />
          <Route path="/menu" component={RestaurantMenu} />
          <Route path="/user" component={ UserProfile } />
        </div>
      </Router>
    );
  }
}
