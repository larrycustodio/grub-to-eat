import React from "react";
import TopNav from "../TopNav";
import { getRestaurantList } from './searchResultsActions';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchLocation: this.props.searchInput
    }
  }
  componentWillMount() {
    this.props.dispatch(getRestaurantList(this.state.searchLocation));
  }
  render() {
    const restaurantList = this.props.restaurantList.list;
    return (
      <div className='container-fluid'>
        <TopNav />
        <div className='container'>
          Found {restaurantList.length} places!
          <div className='row'>
            {restaurantList.map((restaurant, index) => {
              return (
                <a key={restaurant.id}
                  href={'#/results/' + restaurant.id}
                  data-result-index={index}
                  className='grid'>
                  <img className='grid__image'
                    src='http://bit.ly/2hZ3y91' />
                  <div className='grid__gradient'>
                    <div className='grid__content text-white text-center'>
                      <h4 className='grid__title'>{restaurant.restaurantName}</h4>
                      <p className='grid__info info-delivery-fee'>Delivery Fee: $3.99</p>
                      <p className='grid__info info-eta'>ETA:30 - 40 min</p>
                    </div>
                  </div>
                </a>
              )
            })
            }
          </div>
        </div>
      </div>
    );
  }
}
