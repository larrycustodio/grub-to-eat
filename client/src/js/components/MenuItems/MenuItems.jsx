import React from 'react';
import TopNav from '../TopNav';
import { postItem } from './MenuItemsAction';
// import { POST_ITEM } from './MenuItemsAction';
export default class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: {},
      name: '',
      description: '',
      price: '',
      prepTime: '',
      category: '',
      add: false,
      remove: false,
      done: false
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(key) {
    return e => this.setState({ [key]: e.target.value });
  }
  addItem() {
    const item = { ...this.state };
    this.props.dispatch(postItem(item));
  }
  removeItem() {}
  renderMenu() {
    this.props.dispatch(getMenu());
  }
  renderItem() {
    return (
      <form className="item-wrapper">
        <label htmlFor="item-cat" /> Menu Item Category
        <input
          id="item-cat"
          className="item-cat"
          onChange={this.handleInputChange('category')}
        />
        <label htmlFor="item-name" /> Menu Item Name
        <input
          id="item-name"
          className="item-name"
          onChange={this.handleInputChange('name')}
        />
        <label htmlFor="item-price" /> Price
        <input
          id="item-price"
          className="item-price"
          onChange={this.handleInputChange('price')}
        />
        <label htmlFor="item-desc" /> Menu Item Description
        <input
          id="item-desc"
          className="item-desc"
          onChange={this.handleInputChange('description')}
        />
        <button type="text" className="add" onClick={this.addItem}>
          Add
        </button>
        <button type="text" className="remove" onClick={this.removeItem}>
          Remove
        </button>
      </form>
    );
  }
  render() {
    return (
      <div>
        <TopNav />
        <h2>Edit Menu</h2>
        <div className="menu">{this.props.menuItem}</div>
        <div className="menuItems">{this.renderItem()}</div>
        <div className="category-breakfast" />
      </div>
    );
  }
}
