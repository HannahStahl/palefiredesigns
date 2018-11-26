import { VisibilityFilters } from "../actions";

const items = (state = [
  {
    id: 0,
    title: 'Necklace',
    description: 'This is a necklace.',
    image: './necklace.jpg',
    price: '145',
    type: VisibilityFilters.NECKLACE
  },
  {
    id: 1,
    title: 'bracelet',
    description: 'This is a bracelet.',
    image: './bracelet.jpg',
    price: '130',
    type: VisibilityFilters.BRACELET
  },
  {
    id: 2,
    title: 'earrings',
    decription: 'This is a pair of earrings.',
    image: './earrings.jpg',
    price: '95',
    type: VisibilityFilters.EARRINGS
  }
], action) => {
  return state;
};

export default items;
