import React from 'react';
import TopNav from '../TopNav';

export default class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  addItem() {}
  removeItem() {}
  renderItem() {
    <form className="item-wrapper">
      <label htmlFor="item-name" /> Menu Item Name
      <input id="item-name" className="item-name" />
      <label htmlFor="item-price" /> Price
      <input id="item-price" className="item-price" />
      <button type="text" className="add" onClick={this.addItem}>
        Add
      </button>
      <button type="text" className="remove" onClick={this.removeItem}>
        Remove
      </button>
    </form>;
  }
  render() {
    const categories = ['Appetizers', 'Entrees', 'Desserts', 'Drinks'];
    return (
      <div>
        <TopNav />
        <h2>Edit Menu</h2>
        <div className="category-breakfast">
          {categories.map(category => {
            <h3>{category}</h3>;
            if (this.state.category === category) {
            }
          })}
        </div>
      </div>
    );
  }
}
