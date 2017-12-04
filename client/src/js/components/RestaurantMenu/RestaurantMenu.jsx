import React, { Component } from 'react';
import TopNav from '../TopNav';
import { getRestaurantInfo, getRestaurantMenu, getRestaurantMenuItems } from './RestaurantMenuActions';
import axios from 'axios';
import MenuOrderSelection from '../MenuOrderSelection';

export default class RestaurantMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuItemSelected: false,
      menuItemIdSelected: '',
      menuIndexSelected: ''
    }
    this.menuItemClickHandler = this.menuItemClickHandler.bind(this);
    this.itemOrderCloseHandler = this.itemOrderCloseHandler.bind(this);
  }

  componentWillMount() {
    const restaurantId = this.props.match.params.restaurantId;
    this.props.dispatch(getRestaurantInfo(restaurantId));
    this.props.dispatch(getRestaurantMenu(restaurantId));
  }

  // Called when a re-render is required, i.e. this.setState() to access props.restaurantMenu updates
  componentWillUpdate(nextProps, nextState) {
    // Dispatch to get restaurant menu items once the menus are loaded to store
    if (this.props.restaurantMenu.menu !== nextProps.restaurantMenu.menu) {
      if (!!nextProps.restaurantMenu.menu.length) {
        nextProps.restaurantMenu.menu.forEach(menu => {
          if (menu.items.length === 0) this.props.dispatch(getRestaurantMenuItems(menu.id));
        });
      }
    }
  }

  // Handler for clicking the selected menu item
  menuItemClickHandler(e){
    // Stores menu item ID in state.menuItemIdSelected
    this.setState({
      isMenuItemSelected: true,
      menuItemIdSelected: !!e.target.dataset.itemId ? e.target.dataset.itemId : e.target.parentNode.dataset.itemId,
      menuIndexSelected: !!e.target.dataset.menuIndex ? e.target.dataset.menuIndex : e.target.parentNode.dataset.menuIndex
    })
  }
  // Handler for closing the selection modal
  itemOrderCloseHandler(e){
    this.setState({
      isMenuItemSelected: false,
    })
  }

  // Restaurant header render
  restaurantHeader(restaurantInfo) {
    return (<div className='bg-light p-3 text-dark'>
      <h1 className='order-menu__restaurant-name'>{restaurantInfo.restaurantName}</h1>
      <p className='order-menu__restaurant-tagline'>{restaurantInfo.description}</p>
    </div>);
  }

  // Menu item container render
  menuItemContainer(menuItem, menuIndex) {
    return (<div key={menuItem.id}
      className='col-sm-12 col-md-6'>
      <div className='card my-1 py-4 px-3 d-flex flex-row'
        data-item-id={menuItem.id}
        data-menu-index={menuIndex}
        onClick={this.menuItemClickHandler}>
        <span className='text-dark menu-item-name'>{menuItem.name}</span>
        <span className='ml-auto text-info menu-item-price'>{`$${menuItem.price.toFixed(2)}`}</span>
      </div>
    </div>);
  }

  // Main component route render
  render() {
    const menuInfo = this.props.restaurantMenu;
    return (
      <div className='container-fluid'>
        <TopNav />
        <MenuOrderSelection
        itemID = {this.state.menuItemIdSelected}
        menuIndex={this.state.menuIndexSelected}
        isActive={this.state.isMenuItemSelected} 
        onClose={this.itemOrderCloseHandler} />
        {// Determine if the restaurant name from getRestaurantInfo action is fulfilled
          menuInfo.isRestaurantLoaded ?
            (// Header to display restaurant name + description
              <main className='main'>
                {this.restaurantHeader(menuInfo.restaurantInfo)}
                {menuInfo.isMenuLoaded && menuInfo.menu.length > 0 ? (
                  <div className='menu-container'>
                    {
                      menuInfo.menu.map((menu, menuIndex) => (
                        <div key={menu.name}
                          className='menu-item-container'>
                          <h3 className='menu-title m-2'>
                            {menu.name}
                          </h3>
                          <div className='row'>
                            {menu.items.map(menuItem => (
                              this.menuItemContainer(menuItem, menuIndex)
                            ))}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                ) :
                  (<div className='row'>
                    <h3>Finding menu...</h3>
                  </div>)
                }
              </main>
            ) :
            (// Loading restaurant information
              <main className='main'>
                <h2>Finding restaurant data...</h2>
              </main>)
        }
      </div>
    )
  }
}