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
                { !!this.props.restaurantProfile.userType ?
                (
                  <a href="#/restaurant" className="mx-1 text-white">
                    Restaurant Owner
                  </a>
                ) :
                (
                  <a href="#/user" className="mx-1 text-white">
                    User
                  </a>
                )
                }
                <a href="#/" className="mx-1 text-white">
                  Logout
                </a>
              </div>
            )
            :
            ( 
              <a href="#/login" className="mx-1 text-white">
                Log In
              </a>
            )
          }
        </div>
      </nav>
    );
  }
}
