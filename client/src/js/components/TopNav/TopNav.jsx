import React from "react";

export default class TopNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-dark bg-dark fixed-top">
        <div className="brand-wrapper">
          <a href="#" className="navbar-center text-white">Grub To Eat</a>
        </div>
        <div className="login">
          {
            !! document.cookie ?
            (
              <div>
                <a href="#/user" className="text-white">
                  Hello
                </a>
                <a href="#/" className="text-white">
                  Logout
                </a>
              </div>
            )
            :( 
              <a href="#/login" className="text-white">
                Log In
              </a>
            )
          }
        </div>
      </nav>
    );
  }
}
