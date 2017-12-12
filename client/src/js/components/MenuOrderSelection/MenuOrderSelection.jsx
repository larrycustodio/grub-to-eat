import React, { Component } from 'react';
import { addItemToCart } from '../OrderCart/orderCartActions';

/* Passed down from RestaurantMenu compoennt:
 * this.props.itemID, this.props.menuIndex, props.isActive 
 * */
export default class MenuOrderSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.addItemHandler = this.addItemHandler.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isActive && nextProps.itemID && nextProps.menuIndex){
            for(let menuItem of nextProps.restaurantMenu.menu[nextProps.menuIndex].items){
                if(menuItem.id == nextProps.itemID){
                    this.setState({
                        ...menuItem
                    })
                }
            }
        }
    }

    addItemHandler(e){
        this.props.dispatch(addItemToCart(this.state));
        this.props.onClose();
    }

    render() {
        if (this.props.isActive && !!this.props.itemID && !!this.props.menuIndex) {
            //store menu item information of selected item in restaurantMenu store
            let menuItemSelected = {};
            for(let menuItem of this.props.restaurantMenu.menu[this.props.menuIndex].items){
                if(menuItem.id == this.props.itemID){
                    menuItemSelected = menuItem;
                }
            }
            return (
                <div className='menu-item-selection'>
                    <div className='selection-modal'>
                        <div className='text-right'
                            onClick={this.props.onClose}>&times;</div>
                        <div className='selection-modal-header'>
                            <h3 className='selection-modal-title'>{this.state.name}</h3>
                            <p className='text-muted py-2'>{this.state.description || 'Tasty Grub'}</p>
                        </div>
                        <div className='selection-modal-footer'>
                            <div className='btn btn-success'
                            onClick={this.addItemHandler}>
                            <span>Add to cart</span> <span>${this.state.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div />
            );
        }
    }
}