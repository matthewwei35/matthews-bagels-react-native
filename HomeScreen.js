import { FlatList } from 'react-native';
import Item from './Item';

function HomeScreen({ navigation, data }) {
  return (
    <FlatList
      ref={(list) => flatListRef = list}
      data={data}
      renderItem={({ item }) => {
        console.log(item)
        return <Item name={`${item.Name}`} image={item.image} data={item} navigation={navigation} />
      }}
      keyExtractor={item => {
        return item.id
      }}
    />
  )
}

export default HomeScreen;
