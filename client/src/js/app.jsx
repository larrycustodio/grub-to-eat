import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import SearchDisplay from './components/SearchDisplay';
import SearchResults from './components/SearchResults';
import RestaurantMenu from './components/RestaurantMenu';
import RestaurantProfile from './components/RestaurantProfile';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (!!document.cookie) {
    }
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={SearchDisplay} />
          <Route path="/login" component={Login} />
          <Route path="/results" component={SearchResults} />
          <Route path="/menu" component={RestaurantMenu} />
          <Route path="/profile" component={RestaurantProfile} />
        </div>
      </Router>
    );
  }
}
