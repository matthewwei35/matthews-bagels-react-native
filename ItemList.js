import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

function ItemList({ data }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" children={(props) => <HomeScreen data={data} {...props} />} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default ItemList;
