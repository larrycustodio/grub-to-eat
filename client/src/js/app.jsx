import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import SearchDisplay from './components/SearchDisplay';
import SearchResults from './components/SearchResults';
import RestaurantMenu from './components/RestaurantMenu';
import RestaurantProfile from './components/RestaurantProfile';
import UserProfile from './components/UserProfile';
import MenuItems from './components/MenuItems';
import OrderCart from './components/OrderCart';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="container-fluid no-padding-container">
          <Route exact path="/" component={SearchDisplay} />
          <Route path="/login" component={Login} />
          <Route path="/results" component={SearchResults} />
          <Route path="/edit" component={MenuItems} />
          <Route path="/menu/:restaurantId" component={RestaurantMenu} />
          <Route path="/user" component={UserProfile} />
          <Route path="/restaurant" component={RestaurantProfile} />
          <Route path="/checkout" component={OrderCart} />
        </div>
      </Router>
    );
  }
}

function mapStoreToProps(store) {
  return {
    userType: store.login.customerInfo.userType
  };
}

export default connect(mapStoreToProps)(App);
