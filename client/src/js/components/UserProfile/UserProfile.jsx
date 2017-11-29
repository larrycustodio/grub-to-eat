import React, { Component } from 'react';
import TopNav from '../TopNav';
import { updateUserInformation, getUserInformation } from './userProfileActions';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Expected form fields in User Profile Page as this.state.formFields
      formFields: [
        {name: 'username', label: 'Username', inputType:'text'},
        {name: 'firstName', label: 'First Name', inputType:'text'},
        {name: 'lastName', label: 'Last Name', inputType:'text'},
        {name: 'email', label: 'Email', inputType:'email'},
        {name: 'phone', label: 'Phone #', inputType:'phone'},        
        {name: 'address1', label: 'Address 1', inputType:'text'},        
        {name: 'address2', label: 'Address 2', inputType:'text'},
        {name: 'city', label: 'City', inputType:'text'},
        {name: 'state', label: 'State', inputType:'text'},
        {name: 'zipcode', label: 'Zip Code', inputType:'text'},
      ],
      formValues: {}
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount(){
    // Retrieves the logged in user's information via getUserInformation action
    if(!!document.cookie){
      const cookieToken = document.cookie.substring(document.cookie.indexOf('token=')+6);
      this.props.dispatch(getUserInformation(cookieToken));
    }
  }

  onInputChange(e){
    this.setState({
      formValues: {
        ...this.state.formValues,
        [e.target.id] : e.target.value
      }
    })
  }
  
  onSubmit(e){
    // TODO on form submission
    e.preventDefault();
    this.props.dispatch(updateUserInformation(this.state.formValues,this.props.userInfo.id));
  }

  render() {
    console.log(this.state.formValues);
    return (!!document.cookie) ? 
    (
      <div className='container-fluid'>
        <TopNav />
        <h1 className='display-4 text-center'>User Profile</h1>
        <form onSubmit={this.onSubmit}>
          { 
            /* 
             * Creates form inputs for each entry in this.state.formFields
             * Prefills the input values with the userInfo store retrieved
             */ 
            this.state.formFields.map(formField => {
            const { name, label, inputType } = formField
            return (
              <div key={ name }
              className='form-group row'>
                <label htmlFor={ name }
                className='col-sm-8 col-md-2'>
                  { label }
                </label>
                <div className='col sm-8 col-md-6'>
                  <input type= { formField.inputType }
                  id={ name }
                  className='form-control'
                  placeholder = { this.props.userInfo[name] }
                  onChange = { this.onInputChange }
                  />
                </div>
              </div>
            );
          })
          }
          <div className='form-group row justify-content-center'>
            <button type='submit' className='btn btn-primary mx-1'>Save Changes</button>
            <button type='reset' className='btn btn-secondary mx-1'>Cancel</button>
          </div>
        </form>
      </div>
    )
    :
    (
      // Returns a redirect link for user log In if no log in is detected
      <div className='container-fluid'>
        <TopNav />
        <p className='lead'>Please <a href='#/login'>Log In</a> to continue</p>
      </div>
    )
  }
}
