import React, { Component } from "react";
import TopNav from "../TopNav";
import axios from "axios";

export default class RestaurantMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      menuItems: [],
      isRestaurantLoaded: false,
      isMenuLoaded: false
    }
  }

  componentWillMount() {
    const restaurantId = this.props.match.params.restaurantId;
    const url = 'https://grubtoeat.herokuapp.com/api';
    axios.get(`${url}/Restaurants/${restaurantId}`)
      .then(res => {
        this.setState({
          ...res.data,
          isRestaurantLoaded: true
        });
        axios.get(`${url}/Restaurants/${restaurantId}/menus`)
          .then(menuSuccess => {
            this.setState({
              ...this.state,
              menu: menuSuccess.data,
              isMenuLoaded: true
            })
            menuSuccess.data.forEach(menuCategory => {
              console.log('finding menu item');
              axios.get(`${url}/Menus/${menuCategory.id}/menuItems`)
                .then(menuItemSuccess => {
                  this.setState({
                    ...this.state,
                    menuItems: [...this.state.menuItems, menuItemSuccess.data]
                  });
                })
                .catch(console.error);
            });
          })
          .catch(console.error);
      })
      .catch(console.error);
  }

  render() {
    console.log(this.state);
    return (
      <div className='container-fluid'>
        <TopNav />
        {
          this.state.isRestaurantLoaded ?
            (
              <main className='main'>
                <div className='jumbotron'>
                  <h1 className='display-4'>{this.state.restaurantName}</h1>
                </div>
                <div className='container'>
                  {this.state.menu.map((menuCategory, menuIndex) => (
                        <div key={menuCategory.id}>
                          <h1 className='my-2'>
                            {menuCategory.category}
                          </h1>
                          {
                            (this.state.menu.length == this.state.menuItems.length) ?
                              (
                                <div className='row justify-content-left'>
                                  {
                                    this.state.menuItems[menuIndex].map(menuItem => (
                                      <div
                                        key={menuItem.id}
                                        className='col-12 col-md-6 my-2'>
                                        <div className='card'>
                                          <div className='card-body'>
                                            <h3>{menuItem.name}</h3>
                                            <p className='text-muted'>{menuItem.description || ''}</p>
                                            <h5 className='text-right'>{`$${menuItem.price.toFixed(2)}`}</h5>
                                          </div>
                                        </div>
                                      </div>
                                    ))
                                  }
                                </div>
                              )
                              :
                              (<div>Looking for menu items...</div>)
                          }
                        </div>
                      )
                    )}
                </div>
              </main>
            )
            :
            (
              <main className='main'>
                <p className='display-4'>Finding menu...</p>
              </main>
            )
        }
      </div>
    )
  }
}