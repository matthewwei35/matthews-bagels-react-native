import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import ItemList from './ItemList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
        
              if (route.name === 'Bagels') {
                iconName = focused ? 'ellipse' : 'ellipse-outline';
              } else if (route.name === 'Schmears') {
                iconName = focused ? 'restaurant' : 'restaurant-outline';
              } else if (route.name === 'Drinks') {
                iconName = focused ? 'beer' : 'beer-outline';
              }
        
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
          })}
        >
          <Tab.Screen name="Bagels" children={(props) => <ItemList data={require('./Bagels')} {...props}/>} />
          <Tab.Screen name="Schmears" children={() => <ItemList data={require('./Schmears')}/>} />
          <Tab.Screen name="Drinks" children={() => <ItemList data={require('./Drinks')}/>} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});
