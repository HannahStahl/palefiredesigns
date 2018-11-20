import { connect } from 'react-redux';
import Items from '../components/Items';

const getVisibleItems = (items, filters) => {
  return items.filter(item => filters[item.type]);
};

const mapStateToProps = state => ({
  items: getVisibleItems(state.items, state.filters)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
