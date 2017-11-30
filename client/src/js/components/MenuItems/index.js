import { connect } from 'react-redux';
import MenuItems from './MenuItems';

function mapStoreToProps(store) {
  return {
    menuItem: store.MenuItems
  };
}

export default connect(mapStoreToProps)(MenuItems);
