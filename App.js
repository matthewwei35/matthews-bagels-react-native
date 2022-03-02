import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import BagelScreen from './BagelScreen';
import SchmearScreen from './SchmearScreen';
import DrinkScreen from './DrinkScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
        <Tab.Screen name="Bagels" component={BagelScreen} />
        <Tab.Screen name="Schmears" component={SchmearScreen} />
        <Tab.Screen name="Drinks" component={DrinkScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
