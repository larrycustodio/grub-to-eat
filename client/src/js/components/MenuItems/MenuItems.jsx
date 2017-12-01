import React from 'react';
import TopNav from '../TopNav';
import { postItem, getItem, deleteItem, updateItem } from './MenuItemsAction';
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
  //loads list of items on load
  componentWillMount() {
    this.props.dispatch(getItem());
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
    if (this.state.edit) {
      this.setState({ edit: false });
    } else {
      this.setState({ edit: true });
    }
  }
  //removes item TODO: figure out how to remove from list without/refresh
  removeItem(e) {
    this.props.dispatch(deleteItem(e.target.parentNode.id));

    console.log('remove');
  }
  //renders the form to input items TODO:I will stye this later today
  renderForm() {
    return (
      <form className="item-wrapper">
        <div className="form-group">
          <label htmlFor="username">Menu Item Category</label>
          <input
            id="item-cat"
            className="item-cat form-control"
            value={this.state.category}
            onChange={this.handleInputChange('category')}
          />
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
          onClick={this.addItem}
        >
          Add
        </button>
      </form>
    );
  }
  //renders the list of items, maybe I should rename this method?
  renderEdit() {
    let counter = 0;
    const menuItem = this.props.menuItem.menu[0];

    return (
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
                    <div className="item-name w-100">
                      Description: {items.description}
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
            <div>Loading</div>
          )}
        </div>
      </div>
    );
  }
  render() {
    const menuItem = this.props.menuItem.menu[0];

    return (
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
    );
  }
}
