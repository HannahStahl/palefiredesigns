import { connect } from 'react-redux';
import { toggleFilter } from '../actions';
import Filter from '../components/Filter';

const mapStateToProps = (state, ownProps) => ({
  active: state.filters[ownProps.filter]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
