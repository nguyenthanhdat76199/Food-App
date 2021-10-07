
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from './View/Screens/DetailScreen';
import BottomNavigator from './View/Navigation/BottomNavigator';
import OnBoardScreen from './View/Screens/OnBoardScreen';
import COLORS from './src/consts/color';
import Tabs from './View/Navigation/BottomNavigator';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor = {COLORS.white} barStyle ='dark-content'/>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name = "BoardScreen" options={{headerShown:false}} component ={OnBoardScreen}/>
        <Stack.Screen name = "Home" options={{headerShown:false}} component ={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;