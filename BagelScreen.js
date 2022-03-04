import { FlatList } from 'react-native';
import Item from './Item';

const DATA = [
  {
    id: '0',
    title: 'Everything Bagel',
    image: require('./assets/bagels/everything-bagel.jpeg')
  },
  {
    id: '1',
    title: 'Garlic Bagel',
    image: require('./assets/bagels/garlic-bagel.jpeg')
  },
  {
    id: '2',
    title: 'Plain Bagel',
    image: require('./assets/bagels/plain-bagel.jpeg')
  },
  {
    id: '3',
    title: 'Sesame Bagel',
    image: require('./assets/bagels/sesame-bagel.jpeg')
  },
];

function BagelScreen() {
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

export default BagelScreen;
