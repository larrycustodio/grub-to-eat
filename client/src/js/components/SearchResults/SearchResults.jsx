import React from "react";
import TopNav from "../TopNav";
import axios from "axios";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const restaurantList = this.props.restaurantList.restaurantList;
    return (
      <div className='container-fluid'>
        <TopNav />
        <div className='container'>
          Found { restaurantList.length } places!
          <div className='row'>
            { restaurantList.map(restaurant => {
              return(
                <div key={restaurant.restaurantName.toLowerCase()}
                className='grid grid-result text-center p-2 bg-secondary text-white'>
                  <h4 className='grid-title'>{ restaurant.restaurantName }</h4>
                  <p className='grid-info'>Delivery Fee: $3.99</p>
                  <p className='grid-info'>ETA:30 - 40 min</p>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    );
  }
}
