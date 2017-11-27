import React from "react";
import TopNav from "../TopNav";
import { getRestaurantList } from './searchResultsActions';
import LoadingSearch from './LoadingSearch';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocation: this.props.searchInput.searchLocation
    }
  }
  componentWillMount() {
    this.props.dispatch(getRestaurantList(this.state.searchLocation || 92101));
  }

  render() {
    const { list, isLoaded } = this.props.searchResults;

    return (
      <div className='container-fluid'>
        <TopNav />
        { isLoaded ? 
        <div className='container'>
          <h4 className='lead'>
            Found {list.length} places near { this.state.searchLocation }!
          </h4>
          <div className='row'>
            {
              list.map((restaurant, index) => {
                return (
                  <a 
                  key={restaurant.id}
                  href={'#/results/' + restaurant.id}
                  data-result-index={index}
                  className='grid'>
                  <img className='grid__image'
                    src={restaurant.image_url || 'http://bit.ly/2hZ3y91'} />
                  <div className='grid__gradient'>
                    <div className='grid__content text-white text-center'>
                      <h4 className='grid__title'>{restaurant.name}</h4>
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
        :
        <LoadingSearch />
        }
      </div>
    );
  }
}
