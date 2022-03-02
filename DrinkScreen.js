import { FlatList } from 'react-native';
import Item from './Item';

const DATA = [
  {
    id: '0',
    title: 'Cold Brew',
    image: './images/drinks/cold-brew.jpeg'
  },
  {
    id: '1',
    title: 'Hot Chocolate',
    image: './images/drinks/hot-chocolate.jpeg'
  },
  {
    id: '2',
    title: 'Strawberry Banana Smoothie',
    image: './images/drinks/strawberry-banana-smoothie.jpeg'
  },
];

function DrinkScreen() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => {
        console.log(item)
        return <Item image={item.image} title={`${item.title}`} />
      }}
      keyExtractor={item => {
        return item.id
      }}
    />
  );
}

export default DrinkScreen;
