import React from "react";
import { Redirect } from "react-router";
import axios from "axios";
import Navbar from "../TopNav";
import {
  postCustomer,
  postRestaurant,
  fetchCustomer,
  fetchRestaurant
} from "./loginActions";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      username: "",
      userType: "Restaurant Owner",
      email: "",
      password: "",
      fireRedirect: false
    };
    this.renderLogin = this.renderLogin.bind(this);
    this.handleLoginState = this.handleLoginState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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
  handleLogin() {
    const customerInfo = { ...this.state };
    if (this.state.userType === "Customer") {
      this.props.dispatch(fetchCustomer(customerInfo));
    }
    if (this.state.userType === "Restaurant Owner") {
      this.props.dispatch(fetchRestaurant(customerInfo));
    }
  }
  handleSignUp() {
    const customerInfo = { ...this.state };
    if (
      this.state.email != "" &&
      this.state.password != "" &&
      this.state.username != ""
    ) {
      if (this.state.userType === "Customer") {
        this.props.dispatch(postCustomer(customerInfo));
        alert("Thank you for signing up, go ahead and login :)");
        this.setState({ signUp: false });
      }
      if (this.state.userType === "Restaurant Owner") {
        this.props.dispatch(postRestaurant(customerInfo));
        alert("Thank you for signing up, go ahead and login :)");
        this.setState({ signUp: false });
      }
    }
  }
  renderLogin() {
    const { from } = this.props.location.state || "/";
    const { fireRedirect } = this.state;
    if (this.state.signUp) {
      return (
        <div>
          <h3>Sign Up</h3>
          <form onSubmit={this.handleSignUp}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                className="form-control"
                id="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange("username")}
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
                onChange={this.handleChange("email")}
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
                onChange={this.handleChange("password")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="registerType">Register as</label>
              <select
                className="form-control"
                id="registerType"
                value={this.state.userType}
                onChange={this.handleChange("userType")}
              >
                <option>Restaurant Owner</option>
                <option>Customer</option>
              </select>
            </div>
            <button
              className="submit-btn btn btn-primary"
              type="submit"
              onClick={this.handleSignUp}
            >
              Sign Up!
            </button>
            <button
              type="button"
              className="login btn btn-secondary"
              onClick={this.handleLoginState}
            >
              Already have an account? Login
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Login</h3>
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <label htmlFor="inputEmail" className="label name">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUser"
                value={this.state.username}
                onChange={this.handleChange("username")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                aria-describedby="passwordHelp"
                value={this.state.password}
                onChange={this.handleChange("password")}
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
              <select
                className="form-control"
                id="restaurantOwner"
                value={this.state.userType}
                onChange={this.handleChange("userType")}
              >
                <option>Restaurant Owner</option>
                <option>Customer</option>
              </select>
            </div>
            <button
              className="submit-btn btn btn-primary"
              type="submit"
              onClick={this.handleLogin}
            >
              Login
            </button>

            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.handleLoginState}
            >
              Need to Sign Up?
            </button>
          </form>
          {fireRedirect && <Redirect to={from || "/#"} />}
        </div>
      );
    }
  }
  render() {
    return (
      <div className="jumbotron login-wrapper">
        <Navbar />
        {this.renderLogin()}
      </div>
    );
  }
}
