import { connect } from 'react-redux';
import MenuItems from './MenuItems';

function mapStoreToProps(store) {
  return {
    menuItems: store.menuItems
  };
}

export default connect(mapStoreToProps)(MenuItems);
