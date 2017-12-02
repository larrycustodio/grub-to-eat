import React from "react";

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler() {
    console.log('logging out');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'customerID=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'restaurantID=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.reload(true);
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
            <span>
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
                onClick={this.logoutHandler}
                className="mx-1 text-white">
                Logout
              </a>
            </span>
          ) : (
              <a href="#/login" className="mx-1 text-white">
                Log In
            </a>
            )}
      </div>
      <a href="#/cart" className='user-cart text-white'>
          MY CART(0)
      </a>
      </nav>
    );
  }
}
