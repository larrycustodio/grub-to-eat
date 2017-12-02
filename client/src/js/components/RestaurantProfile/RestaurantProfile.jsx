import React from "react";
import { Redirect } from "react-router";
import TopNav from "../TopNav";
import {
  updateRestaurantInformation,
  getRestaurantInformation,
  getMenus,
  removeMenu,
  addMenu
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
      formValues: {},
      fireRedirect: false,
      toggleProfile: false,
      toggleRemoveMenu: false,
      toggleAddMenu: false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleProfileToggle = this.handleProfileToggle.bind(this);
    this.handleRemoveMenuToggle = this.handleRemoveMenuToggle.bind(this);
    this.handleAddMenuToggle = this.handleAddMenuToggle.bind(this);
    this.addMenu = this.addMenu.bind(this);
    this.removeMenu = this.removeMenu.bind(this);
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
    e.preventDefault();
    this.props.dispatch(
      updateRestaurantInformation(
        this.state.formValues,
        this.props.restaurantInfo.id
      )
    );
    this.setState({ fireRedirect: true });
  }
  handleCancel(e) {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  }
  handleProfileToggle(e) {
    this.state.toggleProfile
      ? this.setState({ toggleProfile: false })
      : this.setState({ toggleProfile: true });
    this.setState({
      toggleAddMenu: false,
      toggleRemoveMenu: false
    });
  }
  handleRemoveMenuToggle(id) {
    this.state.toggleRemoveMenu
      ? this.setState({ toggleRemoveMenu: false })
      : this.setState({ toggleRemoveMenu: true });
    this.setState({
      toggleAddMenu: false,
      toggleProfile: false
    });
    if (typeof this.props.restaurantInfo.id !== "undefined") {
      this.props.dispatch(getMenus(this.props.restaurantInfo.id));
    }
  }
  handleAddMenuToggle(id) {
    this.state.toggleAddMenu
      ? this.setState({ toggleAddMenu: false })
      : this.setState({ toggleAddMenu: true });
    this.setState({
      toggleRemoveMenu: false,
      toggleProfile: false
    });
  }
  addMenu(e) {
    e.preventDefault();
    let menuName = document.getElementById("menuNameInput").value;
    this.props.dispatch(addMenu(this.props.restaurantInfo.id, menuName));
    this.setState({ toggleRemoveMenu: true });
    let profileCheckBox = document.getElementById('profileCheckBox');
    let menuCheckBox= document.getElementById('menuCheckBox');
    let addMenuCheckbox = document.getElementById('addMenuCheckbox')
    profileCheckBox.checked = false;
    menuCheckBox.checked = true;
    if (typeof this.props.restaurantInfo.id !== "undefined") {
      this.props.dispatch(getMenus(this.props.restaurantInfo.id));
    }
  }
  removeMenu(e) {
    this.props.dispatch(removeMenu(e.target.id, this.props.restaurantInfo.id));
  }
  render() {
    const { from } = this.props.location.state || "/";
    const { fireRedirect } = this.state;
    if (this.state.toggleProfile === true) {
      return !!document.cookie ? (
        <div className="container-fluid">
          <TopNav />
          <h1 className="display-4 text-center'">Restaurant</h1>
          <form role="form">
            <div className="row">
              <div className="col-sm-3 text-center">
                <label htmlFor="profileCheckBox">
                  <input
                    type="radio"
                    id="profileCheckBox"
                    name="profileCheckBoxes"
                    onClick={this.handleProfileToggle}
                  />
                  profile
                </label>
                <label htmlFor="menuCheckBox">
                  <input
                    type="radio"
                    id="menuCheckBox"
                    name="profileCheckBoxes"
                    onClick={this.handleRemoveMenuToggle}
                  />
                  view/remove menu
                </label>
                <label htmlFor="addMenuCheckBox">
                  <input
                    type="radio"
                    id="addMenuCheckBox"
                    name="profileCheckBoxes"
                    onClick={this.handleAddMenuToggle}
                  />
                  add menu
                </label>
              </div>
            </div>
          </form>
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
                      name="profileCheckBoxes"
                      className="form-control"
                      placeholder={this.props.restaurantInfo[name]}
                      onClick={this.onInputChange}
                    />
                  </div>
                </div>
              );
            })}
            <div className="form-group row justify-content-center">
              <button type="submit" className="btn btn-primary mx-1">
                Save Changes
              </button>
              <button
                type="reset"
                onClick={this.handleCancel}
                className="btn btn-secondary mx-1"
              >
                Cancel
              </button>
            </div>
          </form>
          {fireRedirect && <Redirect to={from || "/#"} />}
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
    if (
      this.state.toggleRemoveMenu === true &&
      typeof this.props.restaurantInfo.menus !== "undefined"
    ) {
      return !!document.cookie ? (
        <div className="container-fluid">
          <TopNav />
          <h1 className="display-4 text-center'">Restaurant</h1>
          <form role="form">
            <div className="row">
              <div className="col-sm-3 text-center">
                <label htmlFor="profileCheckBox">
                  <input
                    type="radio"
                    id="profileCheckBox"
                    name="profileCheckBoxes"
                    onClick={this.handleProfileToggle}
                  />
                  profile
                </label>
                <label htmlFor="menuCheckBox">
                  <input
                    type="radio"
                    id="menuCheckBox"
                    name="profileCheckBoxes"
                    onClick={this.handleRemoveMenuToggle}
                  />
                  view/remove menu
                </label>
                <label htmlFor="addMenuCheckBox">
                  <input
                    type="radio"
                    id="addMenuCheckBox"
                    name="profileCheckBoxes"
                    onClick={this.handleAddMenuToggle}
                  />
                  add menu
                </label>
              </div>
            </div>
          </form>
          <div>
            <h2>Your Menus</h2>
            <p>
              Check a menu to remove it or click the add menu button to add a
              new one!
            </p>
            {this.props.restaurantInfo.menus.map(menu => {
              return (
                <div className="row" key={menu.id}>
                  <label htmlFor="menuCheckbox">
                    <input type="radio" onClick={this.removeMenu} name="profileCheckBoxes" id={menu.id} />
                    {menu.name}
                  </label>
                </div>
              );
            })}
          </div>
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
    if (this.state.toggleAddMenu === true) {
      return (
        <div className="container-fluid">
          <TopNav />
          <h1 className="display-4 text-center'">Restaurant</h1>
          <form role="form">
            <div className="row">
              <div className="col-sm-3 text-center">
                <label htmlFor="profileCheckBox">
                  <input
                    type="radio"
                    id="profileCheckBox"
                    name="profileCheckBoxes"
                    onClick={this.handleProfileToggle}
                  />
                  profile
                </label>
                <label htmlFor="menuCheckBox">
                  <input
                    type="radio"
                    id="menuCheckBox"
                    name="profileCheckBoxes"
                    onClick={this.handleRemoveMenuToggle}
                  />
                  view/remove menu
                </label>
                <label htmlFor="addMenuCheckBox">
                  <input
                    type="radio"
                    id="addMenuCheckBox"
                    name="profileCheckBoxes"
                    onClick={this.handleAddMenuToggle}
                  />
                  add menu
                </label>
              </div>
            </div>
          </form>
          <div>
            <h2>Add Menu</h2>
            <p>Fill in the forms and click add to submit your new menu!</p>
            <form onSubmit={this.addMenu}>
              <div className="form-group row">
                <label htmlFor="menuName">Menu Name</label>
                <div className="col-sm-8 col-md-6">
                  <input
                    type="text"
                    id="menuNameInput"
                    className="form-control"
                    placeholder="Enter a menu name..."
                    onClick={this.onInputChange}
                  />
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <button type="submit" className="btn btn-primary mx-1">
                  Add Menu
                </button>
                <button
                  type="reset"
                  onClick={this.handleCancel}
                  className="btn btn-secondary mx-1"
                >
                  Cancel
                </button>
              </div>
            </form>
            {fireRedirect && <Redirect to={from || "/#"} />}
          </div>
        </div>
      );
    }
    return !!document.cookie ? (
      <div className="container-fluid">
        <TopNav />
        <h1 className="display-4 text-center'">Restaurant</h1>
        <form role="form">
          <div className="row">
            <div className="col-sm-3 text-center">
              <label htmlFor="profileCheckBox">
                <input
                  type="radio"
                  id="profileCheckBox"
                  name="profileCheckBoxes"
                  onClick={this.handleProfileToggle}
                />
                profile
              </label>
              <label htmlFor="menuCheckBox">
                <input
                  type="radio"
                  id="menuCheckBox"
                  name="profileCheckBoxes"
                  onClick={this.handleRemoveMenuToggle}
                />
                view/remove menu
              </label>
              <label htmlFor="addMenuCheckBox">
                <input
                  type="radio"
                  id="addMenuCheckBox"
                  name="profileCheckBoxes"
                  onClick={this.handleAddMenuToggle}
                />
                add menu
              </label>
            </div>
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
