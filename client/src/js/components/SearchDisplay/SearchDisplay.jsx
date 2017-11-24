import React from "react";
import TopNav from "../TopNav";

import { updateLocation } from "./searchDisplayActions";

export default class SearchDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleInputChange(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateLocation(value));
  }
  handleClick(e) {
    const { dispatch, selectedLocation } = this.props;
    dispatch(getRestaurants(selectedLocation));
  }
  render() {
    const selectedLocation = this.props.selectedLocation;
    return (
      <div>
        <TopNav />
        <div className="text-center">
          <h1>As easy as 3.14</h1>
          <p>Get grub right at your door in just a few clicks</p>
          <div className="input-group">
            <input
              id="searchLocationField"
              onChange={this.handleInputChange}
              value={selectedLocation}
              type="text"
              className="form-control"
              placeholder="Address..."
            />
            <span className="input-group-btn">
              <button onClick={this.handleClick} className="btn btn-success">
                Go!
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
