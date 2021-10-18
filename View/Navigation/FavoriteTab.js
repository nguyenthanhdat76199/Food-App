import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favorite from '../Screens/Favorite.js';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        screenOptions={screenOptionStyle}
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default FavoriteStackNavigator;
