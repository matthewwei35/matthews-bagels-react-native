import { FlatList } from 'react-native';
import Item from './Item';

const DATA = [
  {
    id: '0',
    title: 'Garlic Herb Schmear',
    image: require('./assets/schmears/garlic-herb-schmear.jpeg')
  },
  {
    id: '1',
    title: 'Plain Schmear',
    image: require('./assets/schmears/plain-schmear.jpeg')
  },
  {
    id: '2',
    title: 'Salmon Schmear',
    image: require('./assets/schmears/salmon-schmear.jpeg')
  },
];

function SchmearScreen() {
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

export default SchmearScreen;
