import React, { Component } from 'react';
import TopNav from '../TopNav';
import { getRestaurantInfo, getRestaurantMenu, getRestaurantMenuItems } from './restaurantMenuActions';
import axios from 'axios';

export default class RestaurantMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuItemToggled: false,
      orderQuantity: 1
    }
    this.menuItemClickHandler = this.menuItemClickHandler.bind(this);
    this.menuItemOrder = this.menuItemOrder.bind(this);
    this.modalCloseHandler = this.modalCloseHandler.bind(this);
  }

  componentWillMount() {
    const restaurantId = this.props.match.params.restaurantId;
    this.props.dispatch(getRestaurantInfo(restaurantId));
    this.props.dispatch(getRestaurantMenu(restaurantId));
  }

  // Called when a re-render is required, i.e. this.setState() to access props.restaurantMenu updates
  componentWillUpdate(nextProps,nextState) {
    // Dispatch to get restaurant menu items once the menus are loaded to store
    if(this.props.restaurantMenu.menu !== nextProps.restaurantMenu.menu){
      if (!!nextProps.restaurantMenu.menu.length) {
        nextProps.restaurantMenu.menu.forEach(menu => {
          if (menu.items.length === 0) this.props.dispatch(getRestaurantMenuItems(menu.id));
        });
      }
    }
  }
  menuItemClickHandler() {
    this.setState({
      isMenuItemToggled: true
    });
  }
  modalCloseHandler(){
    this.setState({
      isMenuItemToggled: false
    });
  }
  // Restaurant Header Container
  restaurantHeader(restaurantInfo) {
    return (<div className='bg-light p-3 text-dark'>
      <h1 className='order-menu__restaurant-name'>{restaurantInfo.restaurantName}</h1>
      <p className='order-menu__restaurant-tagline'>{restaurantInfo.description}</p>
    </div>);
  }

  // Menu item container
  menuItemContainer(menuItem) {
    return (<div key={menuItem.id}
      onClick={this.menuItemClickHandler}
      className='col-12 col-md-6'>
      <div className='card my-2'>
        <div className='card-body'>
          <h4 className='card-title'>{menuItem.name}</h4>
          <p className='text-muted'>{menuItem.description}</p>
          <h5 className='text-right text-success'>${menuItem.price}</h5>
        </div>
      </div>
    </div>);
  }

  // Menu item order modal
  menuItemOrder() {
    if (this.state.isMenuItemToggled) {
      return (
        <div className='order-menu-item__container'>
          <div className='order-menu-item__gradient' />
          <div className='modal-dialog order-menu-item__modal'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Order Item</h5>
                <button type='button' 
                className='close'
                onClick={this.modalCloseHandler}>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <strong>Order Up!</strong>
                <p className='text-muted'>Name of Order</p>
                <p className='text-success'>Price</p>
              </div>
                <div className='modal-footer d-flex'>
                  <div>
                    <button type='button' 
                    className='btn btn-outline-primary'>-</button>
                    <span className='m-3'>{this.state.orderQuantity}</span>
                    <button type='button' 
                    className='btn btn-outline-primary'>+</button>
                  </div>
                  <div className='ml-auto'>
                    <button className='btn btn-primary'>Add To Cart</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const menuInfo = this.props.restaurantMenu;
    return (
      <div className='container-fluid'>
        <TopNav />
        {this.menuItemOrder()}
        {// Determine if the restaurant name from getRestaurantInfo action is fulfilled
          menuInfo.isRestaurantLoaded ?
            (// Header to display restaurant name + description
              <main className='main'>
                {this.restaurantHeader(menuInfo.restaurantInfo)}
                {menuInfo.isMenuLoaded && menuInfo.menu.length > 0 ? (
                  <div className='order-menu__restaurant-menu'>
                    {
                      menuInfo.menu.map((menu, index) => (
                        <div key={menu.name}
                          className='menu-item'>
                          <h3 className='order-menu__restaurant-menu-name m-2'>
                            {menu.name}
                          </h3>
                          <div className='row'>
                            {menu.items.map(menuItem => (
                              this.menuItemContainer(menuItem)
                            ))}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
                  :
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