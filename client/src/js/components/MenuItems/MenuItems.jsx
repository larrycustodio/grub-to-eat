import React from 'react';
import TopNav from '../TopNav';
import { checkRestaurantId, getMenu, postItem, getItem, deleteItem, updateItem } from './MenuItemsActions';
// import { POST_ITEM } from './MenuItemsAction';
export default class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //was thinking of maybe utilizing this menu state for adding/deleting items?
      name: '',
      description: '',
      price: '',
      category: '',
      addFormEnabled: false,
      edit: false,
      done: false
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
    this.toggleAddMenuItem = this.toggleAddMenuItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount() {
    //Determine if restaurantID exists & if user logged in is a restaurantOwner
    this.props.dispatch(checkRestaurantId(document.cookie));
  }

  componentWillUpdate(nextProps, nextState) {
    /* Dispatch a change if:
     * menuList is empty
     * valid restaurantId
     */
    if (!this.props.menuItems.menuList.length
      && nextProps.menuItems.isRestaurantIdValid) {
      this.props.dispatch(getMenu(nextProps.menuItems.restaurantId));
    };
    if (!this.props.menuItems.menuList.length
      && !!nextProps.menuItems.menuList.length) {
      for (let menuList of nextProps.menuItems.menuList) {
        this.props.dispatch(getItem(menuList.id));
      }
    }
  }

  //Method to handle input changes on add menu item
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //Toggles between the input form and the actual list of items
  toggleAddMenuItem() {
    this.setState({ addFormEnabled: !this.state.addFormEnabled });
  }

  //Method to add items 
  addItem(e) {
    e.preventDefault();
    const { name, price, description } = this.state;
    //Ensure that menuId (via category) contains a value
    let menuId = !this.state.category ? document.querySelector('#menuSelect').value : this.state.category;
    this.props.dispatch(postItem({ name, menuId, price, description }));
  }
  //Method to update item TODO:get it to work
  updateItem(e) {
    this.props.dispatch(updateItem(e.target.parentNode.id, { ...state }));
  }

  //removes item TODO
  removeItem(e) {
    this.props.dispatch(deleteItem(e.target.dataset.refId));
  }

  //renders the form to input items TODO
  renderForm() {
    return (
      <form className="item-wrapper" onSubmit={this.addItem}>
        <div className="form-group">
          <label htmlFor="menuSelect">Menu Item Category</label>
          {
            !!this.props.menuItems.menuList.length ? (
              <select id="menuSelect"
                name="category"
                className="form-control"
                onChange={this.handleInputChange}
                defaultValue={this.props.menuItems.menuList[0].id}>
                {this.props.menuItems.menuList.map(menuItem => (
                  <option key={menuItem.id} value={menuItem.id}>{menuItem.name}</option>
                ))}
              </select>
            ) : (
                <select id="menuSelect" className="form-control" disabled>
                  <option>Finding restaurant menu(s)...</option>
                </select>
              )}
          <small className="form-text text-muted">
            You can add/edit your active menu <a href="#/restaurant">here</a>
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="item-name" /> Menu Item Name
          <input
            id="item-name"
            name="name"
            className="item-name form-control"
            value={this.state.name}
            onChange={this.handleInputChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="item-price" /> Price
          <input
            type="number"
            id="item-price"
            name="price"
            className="item-price form-control"
            value={this.state.price}
            onChange={this.handleInputChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="item-desc" /> Menu Item Description
          <textarea
            id="item-desc"
            name="description"
            className="item-desc form-control"
            value={this.state.description}
            onChange={this.handleInputChange} />
        </div>
        <button
          type="text"
          className="add btn btn-primary btn-block">
          Add
        </button>
      </form>
    );
  }
  //renders the list of menu items
  renderMenuItems() {
    return (
      // Current list of restaurant menu items
      <div className="row">
        {!!this.props.menuItems.menuItemList.length ? (
          this.props.menuItems.menuItemList.map((menuItem,menuItemIndex) => {
            const menuIndex = this.props.menuItems.menuList.findIndex(menuList => menuList.id == menuItem.menuId);
            return (
              <div key={menuItem.id}
                className="col-sm-12 col-md-6 my-2">
                <div className="card">
                  <div className="card-body d-flex">
                    <div className="card-text">
                      <h3 className="text-dark">{menuItem.name}</h3>
                      <small>{menuIndex > -1 ? this.props.menuItems.menuList[menuIndex].name.toUpperCase() : 'MISC'}</small>
                    </div>
                    <div className="ml-auto">Price: ${menuItem.price.toFixed(2)}</div>
                    <button
                      className="btn btn-primary"
                      onClick={this.removeItem}
                      data-ref-id={menuItem.id}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
            //Return if restaurant's menu items are empty
            <div className='lead'>
              <p>It looks like you got an empty menu!</p>
              <p>To add a menu item, click on 'Add to Menu' button!</p>
            </div>
          )
        }
      </div>
    );
  }
  render() {
    return this.props.menuItems.isRestaurantIdValid ?
      (
        <div>
          <TopNav />
          <div className="container" />
          <div className="menuItems">
            <div className="display-4 text-center">Edit Menu</div>
            <button className="btn btn-primary " onClick={this.toggleAddMenuItem}>
              Add to Menu
            </button>
            {this.renderMenuItems()}
            {this.state.addFormEnabled ? this.renderForm() : <div />}
          </div>
          <div className="category-breakfast" />
        </div>
      ) : (
        <div className="container">
          <TopNav />
          <div className="lead">
            <p>Verifying restaurant information...</p>
          </div>
        </div>
      )
  }
}
