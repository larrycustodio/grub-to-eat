import React, { Component } from 'react';
import TopNav from '../TopNav';
import OrderItem from './OrderItem';

export default class OrderCart extends Component {
  constructor(props) {
    super(props);
  }

    render(){
        return(
            <div className='container'>
                <TopNav />
                <div className='shopping-cart-container'>
                    <h1>My Order</h1>
                </div>
                {
                    (!!this.props.orderCart.activeOrder.menuItems.length)?
                    <div>
                    <OrderItem orderItems={this.props.orderCart.activeOrder.menuItems} />
                    <div><strong>Subtotal: ${ this.props.orderCart.activeOrder.subTotal }</strong></div>
                    <div><strong>Total: ${ this.props.orderCart.activeOrder.total }</strong></div>
                    </div>: 
                    <div className='lead'>Your Order Cart is Empty!</div>
                }
            </div>
        )
    }
} 
