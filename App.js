import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BagelScreen from './BagelScreen';
import SchmearScreen from './SchmearScreen';
import DrinkScreen from './DrinkScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Bagels" component={BagelScreen} />
        <Tab.Screen name="Schmears" component={SchmearScreen} />
        <Tab.Screen name="Drinks" component={DrinkScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}