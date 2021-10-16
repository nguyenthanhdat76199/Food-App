import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './View/Navigation/BottomNavigator';
import OnBoardScreen from './View/Screens/OnBoardScreen';
import COLORS from './src/consts/color';
import Tabs from './View/Navigation/BottomNavigator';

import {Provider} from 'react-redux'
import store from './src/store'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="BoardScreen"
            options={{headerShown: false}}
            component={OnBoardScreen}
          />
          <Stack.Screen
            name="MainScreen"
            options={{headerShown: false}}
            component={Tabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
