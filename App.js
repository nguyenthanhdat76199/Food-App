
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
import DangNhap from './View/DangNhap/DangNhap';
import MailScreen from './View/Screens/MailScreen';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor = {COLORS.white} barStyle ='dark-content'/>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name = "Login" options={{headerShown:false}} component ={DangNhap}/>   
        <Stack.Screen name = "BoardScreen" options={{headerShown:false}} component ={OnBoardScreen}/>    
        <Stack.Screen name = "Home" options={{headerShown:false}} component ={Tabs}/>  
        <Stack.Screen name = "Mail" options={{headerShown:false}} component ={MailScreen}/>   
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;