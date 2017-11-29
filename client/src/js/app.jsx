import React from 'react';

import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SearchDisplay from "./components/SearchDisplay";
import SearchResults from "./components/SearchResults";
import RestaurantMenu from "./components/RestaurantMenu";
import UserProfile from "./components/UserProfile";
import RestaurantProfile from './components/RestaurantProfile';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (!!document.cookie) {
      console.log(document.cookie);
      const cookieString = document.cookie;
      const id = cookieString.substring(
        cookieString.indexOf('id=') + 3,
        cookieString.indexOf(';')
      );
      const token = cookieString.substring(cookieString.indexOf('token=') + 6);

      axios
        .get(
          `https://grubtoeat.herokuapp.com/api/Customers/${token}/accessTokens`
        )
        .then(res => {
          if (res.status === 200) {
            return axios
              .get(`https://grubtoeat.herokuapp.com/api/Customers/${token}`)
              .then(res => {
                console.log(res.data.username);
              });
          }
        });
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
          <Route path="/user" component={ UserProfile } />
        </div>
      </Router>
    );
  }
}
