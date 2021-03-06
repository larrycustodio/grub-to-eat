import React from 'react';
import TopNav from '../TopNav';
import { updateSearchLocation } from './searchDisplayActions';
export default class SearchDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    var input = document.getElementById('searchLocationField');
    var options = { componentRestrictions: { country: 'us' } };
    new google.maps.places.Autocomplete(input, options);
  }
  handleClick(e) {
    const { dispatch } = this.props;
    var input = document.getElementById('searchLocationField').value;
    dispatch(updateSearchLocation(input));
  }
  render() {
    const selectedLocation = this.props.selectedLocation;
    return (
      <div className="page-wrapper home">
        <TopNav />
        <div className="text-center content-wrapper">
          <h1> Let's get started. Where are we delivering to?</h1>
          <p>Get grub right at your door in just a few clicks</p>
          <div className="input-group">
            <input
              ref="searchField"
              id="searchLocationField"
              onChange={this.handleInputChange}
              value={selectedLocation}
              type="text"
              className="form-control"
              placeholder="Where are we delivering to?"
            />
            <span className="input-group-btn">
              <a href="#/results">
                <button onClick={this.handleClick} className="btn btn-success">
                  Lets Go!
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
