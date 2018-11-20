import { VisibilityFilters } from "../actions";

const initialState = {};
initialState[VisibilityFilters.NECKLACE] = true;
initialState[VisibilityFilters.BRACELET] = true;
initialState[VisibilityFilters.EARRINGS] = true;

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      var newState = Object.assign({}, state);
      newState[action.filter] = !state[action.filter];
      return newState;
    default:
      return state;
  }
};

export default filters;
