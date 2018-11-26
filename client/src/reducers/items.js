import { VisibilityFilters } from "../actions";

const dummyItems = [
  {
    id: 0,
    title: 'Necklace',
    description: 'This is a necklace.',
    image: './necklace.jpg',
    images: ['./necklage.jpg', './necklace.jpg'],
    price: '145',
    type: VisibilityFilters.NECKLACE
  },
  {
    id: 1,
    title: 'bracelet',
    description: 'This is a bracelet.',
    image: './bracelet.jpg',
    images: ['./bracelet.jpg', './bracelet.jpg'],
    price: '130',
    type: VisibilityFilters.BRACELET
  },
  {
    id: 2,
    title: 'earrings',
    decription: 'This is a pair of earrings.',
    image: './earrings.jpg',
    images: ['./earrings.jpg', './earrings.jpg'],
    price: '95',
    type: VisibilityFilters.EARRINGS
  }
];

const items = (state = dummyItems) => {
  return state;
};

export default items;
