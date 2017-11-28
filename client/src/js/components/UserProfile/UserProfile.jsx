import React, { Component } from 'react';
import TopNav from '../TopNav';
import axios from 'axios';
import { updateUserInformation, getUserInformation } from './userProfileActions';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      ]
    };

    this.onFormFocus = this.onFormFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentWillMount(){

  }

  onFormFocus(){

  }

  onSubmit(e){
    e.preventDefault();

  }

  render() {
    const userInfo = this.props.userInfo;
    return (
      <div className='container-fluid'>
        <TopNav />
        <h1 className='display-4 text-center'>User Profile</h1>
        <form onSubmit={this.onSubmit}>
          { this.state.formFields.map(formField => {
            return (
              <div key={ formField.name }
              className='form-group row'>
                <label htmlFor={ formField.name }
                className='col-sm-12 col-md-2'>
                  { formField.label }
                </label>
                <div className='col sm-10 col-md-6-offset-3'>
                  <input type= { formField.inputType }
                  className='form-control-plaintext'
                  id={ formField.name }
                  value = { userInfo[formField.name] } 
                  readOnly />
                </div>
              </div>
            );
          })
          }
        </form>
      </div>
    );
  }
}
