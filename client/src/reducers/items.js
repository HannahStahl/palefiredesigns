import { VisibilityFilters } from "../actions";

const items = (state = [
  {
    id: 0,
    text: 'necklace',
    type: VisibilityFilters.NECKLACE
  },
  {
    id: 1,
    text: 'bracelet',
    type: VisibilityFilters.BRACELET
  },
  {
    id: 2,
    text: 'earrings',
    type: VisibilityFilters.EARRINGS
  }
], action) => {
  return state;
};

export default items;
