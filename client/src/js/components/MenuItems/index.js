import { connect } from 'react-redux';
import MenuItems from './MenuItems';

function mapStoreToProps(store) {
  return {
    menuItem: store.menuItems
  };
}

export default connect(mapStoreToProps)(MenuItems);
