import React from 'react';
import axios from 'axios';
import { postCustomer, postRestaurant } from './loginActions';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: true,
      username: '',
      userType: '',
      firstName: '',
      lastName: '',
      email: '',
      password: 'test',
      address1: '',
      address2: '',
      city: '',
      state: ''
    };
    this.renderLogin = this.renderLogin.bind(this);
    this.handleLoginState = this.handleLoginState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLoginState() {
    this.state.signUp
      ? this.setState({
          signUp: false
        })
      : this.setState({
          signUp: true
        });
  }
  handleChange(key) {
    return e => this.setState({ [key]: e.target.value });
  }
  handleSubmit() {
    const customerInfo = { ...this.state };
    if (this.state.userType === 'Customer') {
      this.props.dispatch(postCustomer(customerInfo));
    }
    if (this.state.userType === 'Restaurant Owner') {
      this.props.dispatch(postRestaurant(customerInfo));
    }
  }
  renderLogin() {
    if (this.state.signUp) {
      return (
        <form>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              className="form-control"
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control"
              id="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange('firstName')}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control"
              id="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange('lastName')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail" className="label name">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address1"
              value={this.state.address1}
              onChange={this.handleChange('address1')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={this.state.city}
              onChange={this.handleChange('city')}
            />
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              value={this.state.state}
              onChange={this.handleChange('state')}
            />
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              value={this.state.zip}
              onChange={this.handleChange('zip')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registerType">Register as</label>
            <select
              className="form-control"
              id="registerType"
              value={this.state.userType}
              onChange={this.handleChange('userType')}
            >
              <option>Restaurant Owner</option>
              <option>Customer</option>
            </select>
          </div>
          <button
            className="submit-btn btn btn-primary"
            type="submit"
            onClick={this.handleSubmit}
          >
            Sign Up!
          </button>
          <button
            className="login btn btn-secondary"
            onClick={this.handleLoginState}
          >
            Already have an account? Login
          </button>
        </form>
      );
    } else {
      return (
        <div>
          <h3>Login</h3>
          <div className="form-group">
            <label htmlFor="inputEmail" className="label name">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              aria-describedby="passwordHelp"
            />

            <small id="passwordHelp" className="form-text text-muted">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={this.forgotPassword}
                  />
                  Forgot your password?
                </label>
              </div>
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="restaurantOwner">Sign in as</label>
            <select className="form-control" id="restaurantOwner">
              <option>Restaurant Owner</option>
              <option>Customer</option>
            </select>
          </div>
          <button className="submit-btn btn btn-primary" type="submit">
            Login
          </button>

          <button className="btn btn-secondary" onClick={this.handleLoginState}>
            Need to Sign Up?
          </button>
        </div>
      );
    }
  }
  render() {
    return <div className="jumbotron login-wrapper">{this.renderLogin()}</div>;
  }
}
