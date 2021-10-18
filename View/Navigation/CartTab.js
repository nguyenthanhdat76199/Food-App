import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../Screens/CartScreen';
import Checkout from '../Screens/Checkout';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        screenOptions={screenOptionStyle}
        name="Checkout"
        component={Checkout}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default CartStackNavigator;
