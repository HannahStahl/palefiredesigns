import { connect } from 'react-redux';
import Items from '../components/Items';
import { VisibilityFilters } from '../actions';

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return items;
    case VisibilityFilters.NECKLACES_ONLY:
      return items.filter(t => t.type === 'necklace');
    case VisibilityFilters.BRACELETS_ONLY:
      return items.filter(t => t.type === 'bracelet');
    case VisibilityFilters.EARRINGS_ONLY:
      return items.filter(t => t.type === 'earrings');
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  items: getVisibleItems(state.items, state.filter)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
