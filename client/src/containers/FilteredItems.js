import { connect } from 'react-redux';
import Items from '../components/Items';

const getVisibleItems = (items, filters) => {
  return items.filter(item => filters[item.type]);
};

const mapStateToProps = state => ({
  items: getVisibleItems(state.items, state.filters)
});

export default connect(
  mapStateToProps
)(Items);
