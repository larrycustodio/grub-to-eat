import React from "react";
import TopNav from "../TopNav";
import { getRestaurantList, filterRestaurantList } from "./searchResultsActions";
import LoadingSearch from "./LoadingSearch";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocation: this.props.searchInput.searchLocation
    }
  }
  componentWillMount() {
    this.props.dispatch(
      getRestaurantList(this.state.searchLocation || 92101)
    );
  }
  render() {
    let { list, isLoaded } = this.props.searchResults;
    if (list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        let address1 = list[i].address1;
        console.log(address1);
        let state = list[i].state;
        console.log(state);
        let zipcode = list[i].zipcode;
        console.log(zipcode);
        let city = list[i].city;
        console.log(city);
        console.log(this.props);
        // this.props.dispatch(filterRestaurantList(address1,state,zipcode,city))
      }
    }

    // this.dispatch.get
    // console.log(list[i], list[i].address1, typeof list[i].address1);
    // if(list[i].address1 == undefined){
    //   console.log('address is undefined');
    // }
    // console.log(typeof list[i].address1);
    return (
      <div className='container-fluid'>
        <TopNav />
        { isLoaded ? 
        <div className='container'>
          <h4 className='lead'>
            Found { list.length } places near { this.state.searchLocation }!
          </h4>
          <div className='row'>
            {
              list.map((restaurant, index) => {
                return (
<<<<<<< Updated upstream
                  <a 
                  key={restaurant.id}
                  href={'#/menu/' + restaurant.id}
                  data-result-index={index}
                  className='grid'>
                  <img className='grid__image'
                    src={restaurant.featuredImage || 'http://bit.ly/2hZ3y91'} />
                  <div className='grid__gradient'>
                    <div className='grid__content text-white text-center'>
                      <h4 className='grid__title'>{ restaurant.restaurantName }</h4>
                      <p className='grid__info info-delivery-fee'>Delivery Fee: $3.99</p>
                      <p className='grid__info info-eta'>ETA:30 - 40 min</p>
=======
                  <a
                    key={restaurant.id}
                    href={"#/menu/" + restaurant.id}
                    data-result-index={index}
                    className="grid"
                  >
                    <img
                      className="grid__image"
                      src={restaurant.featuredImage || "http://bit.ly/2hZ3y91"}
                    />
                    <div className="grid__gradient">
                      <div className="grid__content text-white text-center">
                        <h4 className="grid__title">
                          {restaurant.restaurantName}
                        </h4>
                        <p className="grid__info info-delivery-fee">
                          Delivery Fee: $3.99
                        </p>
                        <p className="grid__info info-eta">ETA:30 - 40 min</p>
                      </div>
>>>>>>> Stashed changes
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
