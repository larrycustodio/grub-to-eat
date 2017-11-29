import React from "react";
import TopNav from "../TopNav";
import {
  updateRestaurantInformation,
  getRestaurantInformation
} from "./restaurantProfileActions";

export default class RestaurantProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: [
        { name: "email", label: "Email", inputType: "email" },
        { name: "firstName", label: "First Name", inputType: "text" },
        { name: "lastName", label: "Last Name", inputType: "text" },
        { name: "restaurantName", label: "Restaurant Name", inputType: "text" },
        { name: "address1", label: "Address1", inputType: "text" },
        { name: "address2", label: "Address2", inputType: "text" },
        { name: "state", label: "State", inputType: "text" },
        { name: "zipcode", label: "Zip Code", inputType: "text" },
        { name: "city", label: "City", inputType: "text" },
        { name: "phone", label: "Phone", inputType: "phone" },
        { name: "featuredImage", label: "Featured Image", inputType: "text" },
        { name: "description", label: "Description", inputType: "text" },
        { name: "category", label: "Category", inputType: "text" },
        { name: "hours", label: "Hours", inputType: "text" },
        { name: "username", label: "Username", inputType: "text" }
      ],
      formValues: {}
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    // Retrieves the logged in restaurant's information via getRestaurantInformation action
    if (!!document.cookie) {
      const cookieToken = document.cookie.substr(
        document.cookie.indexOf("restaurantID=") + 13,
        24
      );
      this.props.dispatch(getRestaurantInformation(cookieToken));
    }
  }
  onInputChange(e) {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [e.target.id]: e.target.value
      }
    });
  }
  onSubmit(e) {
    // TODO on form submission
    e.preventDefault();
    this.props.dispatch(
      updateRestaurantInformation(
        this.state.formValues,
        this.props.restaurantInfo.id
      )
    );
  }
  render() {
    return !!document.cookie ? (
      <div className="container-fluid">
        <TopNav />
        <h1 className="display-4 text-center'">Restaurant Profile</h1>
        <form onSubmit={this.onSubmit}>
          {// Creates form inputs for each entry in this.state.formFields
          // Prefills the input values with the restaurantInfo store retrieved
          this.state.formFields.map(formField => {
            const { name, label, inputType } = formField;
            return (
              <div key={name} className="form-group row">
                <label htmlFor={name} className="col-sm-8 col-md-2">
                  {label}
                </label>
                <div className="col-sm-8 col-md-6">
                  <input
                    type={formField.inputType}
                    id={name}
                    className="form-control"
                    placeholder={this.props.restaurantInfo[name]}
                    onChange={this.onInputChange}
                  />
                </div>
              </div>
            );
          })}
          <div className="form-group row justify-content-center">
            <button type="submit" className="btn btn-primary mx-1">
              Save Changes
            </button>
            <button type="reset" className="btn btn-secondary mx-1">
              Cancel
            </button>
          </div>
        </form>
      </div>
    ) : (
      // Returns a redirect link for restaurant log in if no log in is detected
      <div className="container-fluid">
        <TopNav />
        <p className="lead">
          Please <a href="#/login">Log In</a> to continue
        </p>
      </div>
    );
  }
}

{
  /* <form>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-12 col-md-2">Email</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="text" readonly className="form-control-plaintext" id="email" placeholder="Email" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-12 col-md-2">First Name</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="firstName" readonly className="form-control-plaintext" id="firstName" placeholder="First Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-12 col-md-2">Last Name</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="lastName" readonly className="form-control-plaintext" id="lastName" placeholder="Last Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="restaurantName" className="col-sm-12 col-md-2">Restaurant Name</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="restaurantName" readonly className="form-control-plaintext" id="restaurantName" placeholder="Restaurant Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address1" className="col-sm-12 col-md-2">Address1</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="address1" readonly className="form-control-plaintext" id="address1" placeholder="Address1"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address2" className="col-sm-12 col-md-2">Address2</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="address2" readonly className="form-control-plaintext" id="address2" placeholder="Address2"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="state" className="col-sm-12 col-md-2">State</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="state" readonly className="form-control-plaintext" id="state" placeholder="State"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="zipcode" className="col-sm-12 col-md-2">Zipcode</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="zipcode" readonly className="form-control-plaintext" id="zipcode" placeholder="Zipcode"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="city" className="col-sm-12 col-md-2">City</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="city" readonly className="form-control-plaintext" id="city" placeholder="City"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone" className="col-sm-12 col-md-2">Phone</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="phone" readonly className="form-control-plaintext" id="phone" placeholder="Phone"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="featuredImage" className="col-sm-12 col-md-2">Featured Image</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="featuredImage" readonly className="form-control-plaintext" id="featuredImage" placeholder="Featured Image"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="description" className="col-sm-12 col-md-2">Description</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="description" readonly className="form-control-plaintext" id="description" placeholder="Description"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="category" className="col-sm-12 col-md-2">Category</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="category" readonly className="form-control-plaintext" id="category" placeholder="Category"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="hours" className="col-sm-12 col-md-2">Hours</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="hours" readonly className="form-control-plaintext" id="hours" placeholder="Hours"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-12 col-md-2">Username</label>
          <div className="col-sm-10 col-md-6-offset-3">
            <input type="username" readonly className="form-control-plaintext" id="username" placeholder="Username"/>
          </div>
        </div>
      </form> */
}
