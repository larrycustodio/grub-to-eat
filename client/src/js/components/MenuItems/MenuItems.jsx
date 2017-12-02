import React from 'react';
import TopNav from '../TopNav';
import { checkRestaurantId, getMenu, postItem, getItem, deleteItem, updateItem } from './MenuItemsActions';
// import { POST_ITEM } from './MenuItemsAction';
export default class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //was thinking of maybe utilizing this menu state for adding/deleting items?
      menus: {},
      name: '',
      description: '',
      price: '',
      prepTime: '',
      category: '',
      add: false,
      remove: false,
      edit: true,
      done: false
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount() {
    //Determine if restaurantID exists & if user logged in is a restaurantOwner
    this.props.dispatch(checkRestaurantId(document.cookie));
  }

  componentWillUpdate(nextProps, nextState) {
    /* Dispatch a change if:
     * Add menu form is visible (this.state.edit true 
     * menuList is empty
     * valid restaurantId
     */
    if(this.state.edit 
      && !this.props.menuItems.menuList.length 
      && this.props.menuItems.isRestaurantIdValid){
      this.props.dispatch(getMenu(this.props.menuItems.restaurantId));
    };
    //nextProps.menuItems.isRestaurantIdValid ;
  }

  //Method to handle the input field change states
  handleInputChange(key) {
    return e => this.setState({ [key]: e.target.value });
  }
  //Method to add items TODO:have it add without having to to refresh the page
  addItem() {
    const item = { ...this.state };
    this.props.dispatch(postItem(item));
    alert('Your item has been added succesfully!');
  }
  //Method to update item TODO:get it to work
  updateItem(e) {
    this.props.dispatch(updateItem(e.target.parentNode.id, { ...state }));
  }
  //Toggles between the input form and the actual list of items
  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  //removes item TODO
  removeItem(e) {
    this.props.dispatch(deleteItem(e.target.parentNode.id));
    console.log('remove');
  }

  //renders the form to input items TODO
  renderForm() {
    return (
      <form className="item-wrapper">
        <div className="form-group">
          <label htmlFor="menuSelect">Menu Item Category</label>
          {
            !!this.props.menuItems.menuList.length ? (
              <select id="menuSelect"
                className="form-control">
                { this.props.menuItems.menuList.map(menuItem =>(
                  <option value={menuItem.id}>{menuItem.name}</option>
                )) }
              </select>
            ) : (
            <select id="menuSelect"
            className="form-control"
            disabled>
            <option>Finding restaurant menu(s)...</option>
            </select>
          )}
          <small className="form-text text-muted">
            You can edit your menu <a href="#/restaurant">here</a>
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="item-name" /> Menu Item Name
          <input
            id="item-name"
            className="item-name form-control"
            value={this.state.name}
            onChange={this.handleInputChange('name')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="item-price" /> Price
          <input
            id="item-price"
            className="item-price form-control"
            value={this.state.price}
            onChange={this.handleInputChange('price')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="item-desc" /> Menu Item Description
          <textarea
            id="item-desc"
            className="item-desc form-control"
            value={this.state.description}
            onChange={this.handleInputChange('description')}
          />
        </div>
        <button
          type="text"
          className="add btn btn-primary btn-block"
          onClick={this.addItem}>
          Add
        </button>
      </form>
    );
  }
  //renders the list of items, maybe I should rename this method?
  renderEdit() {
    let counter = 0;
    const menuItem = this.props.menuItems.menuItemList;
    return (
      // Current list of restaurant menu items
      <div>
        <div id="accordion" role="tablist">
          {!!menuItem ? (
            menuItem.map(items => {
              counter++;
              return (
                <div key={items.id} id={items.id} className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>Category: {items.category}</h5>
                    </div>
                    <div className="card-text w-100">
                      <div className="item-name w-25" />Item Name: {items.name}
                    </div>
                    <div className="item-name w-25">Price: ${items.price}</div>
                    <div className="item-name w-25">
                      Prep Time: {items.prepTime}min
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={this.removeItem}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={this.updateItem}
                  >
                    Edit
                  </button>
                </div>
              );
            })
          ) : (
              //Return if restaurant's menu items are empty
              <div className='lead'>
                To add a menu item, click on 'Add to Menu' button!
              </div>
            )
          }
        </div>
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
            <button className="btn btn-primary mr-3" onClick={this.toggleEdit}>
              <h2 className="d-inline">Edit Menu</h2>
            </button>
            <button className="btn btn-primary " onClick={this.toggleEdit}>
              <h2 className="d-inline">Add to Menu</h2>
            </button>
            {this.state.edit ? this.renderEdit() : this.renderForm()}
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
