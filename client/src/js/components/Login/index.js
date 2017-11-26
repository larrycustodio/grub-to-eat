import { connect } from 'react-redux';
import Login from './Login';

function mapStoreToProps(store) {
  return {
    customerInfo: store.login.customerInfo
  };
}

export default connect(mapStoreToProps)(Login);
