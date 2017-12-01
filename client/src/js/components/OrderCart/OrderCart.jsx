import React, { Component } from 'react';
import TopNav from '../TopNav';

export default class OrderCart extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='container-fluid'>
                <TopNav />
                <div className='shopping-cart-container'>
                    <h1>My MOTHERFUCKING SHOPPING CART</h1>
                </div>
            </div>
        )
    }
} 