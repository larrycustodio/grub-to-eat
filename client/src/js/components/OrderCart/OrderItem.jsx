import React, { Component } from 'react';

export default class OrderItem extends Component {

    render() {
        return (
            <div className='card'>
                <ul className='list-group list-group-flush'>
                    {
                        this.props.orderItems.map(item => (
                            <li key={item.id}
                                className='list-group-item'>
                                <h4>{item.name}</h4>
                                <p>{item.price}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}