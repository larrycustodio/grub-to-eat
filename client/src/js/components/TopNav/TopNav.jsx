import React from "react";

export default class TopNav extends React.Component {
  constructor(props){
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler(){
    console.log('logging out');
  }
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-dark bg-dark fixed-top">
        <div className="brand-wrapper">
          <a href="#" className="navbar-center text-white">
            Grub To Eat
          </a>
        </div>
        <div className="login">
          {// Looks for login cookies to determine login user type
          !!document.cookie ? (
            <div>
              {document.cookie.indexOf("restaurantID") > 0 ? (
                <a href="#/restaurant" className="mx-1 text-white">
                  Hello Owner
                </a>
              ) : (
                <a href="#/user" className="mx-1 text-white">
                  Hi Person
                </a>
              )}
              <a href="#/" 
                onClick={this.logoutHandler()}
                className="mx-1 text-white">
                Logout
              </a>
            </div>
          ) : (
            <a href="#/login" className="mx-1 text-white">
              Log In
            </a>
          )}
        </div>
      </nav>
    );
  }
}
