import React from "react"; 
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import COLORS from "../../src/consts/color";
import MainStackNavigator from "./home";
import MailScreen from "../Screens/MailScreen";
import MapScreen from "../Screens/MapScreen";
const Tab = createBottomTabNavigator();
const CustomTabBarButton =({children, onPress}) =>(
    <TouchableOpacity
    style={{
        top:-30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}
    onPress={onPress}
    >
       <View style={{
           width: 70,
           height: 70,
           borderRadius: 35,
           backgroundColor: '#ffffff'
       }}
       >
           {children}
       </View>
    </TouchableOpacity>
)

const Tabs = () =>{
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                elevation:0,
                backgroundColor:'#ffffff',
                height:60,
                ...styles.shadow 
            }
        }}
        >
            <Tab.Screen name = "Home" component={MainStackNavigator}
            options ={{
              headerShown:false,
                tabBarIcon: ({focused})=>(
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source ={require('../../src/assets/home.png')}
                        resizeMode = 'contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.grey,
                        }}
                        />
                        <Text style ={{color: focused ? COLORS.primary: COLORS.grey, fontSize:12}}>
                            Trang chủ
                        </Text>
                    </View>
                ),
            }}
        />    
           <Tab.Screen name = "favorite" component={HomeScreen}
            options ={{
                tabBarIcon: ({focused})=>(
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source ={require('../../src/assets/heart.png')}
                        resizeMode = 'contain'
                        style={{                           
                            width:25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.grey,
                        }}
                        />
                        <Text style ={{color: focused ?COLORS.primary: COLORS.grey, fontSize:12}}>
                            Yêu Thích
                        </Text>
                    </View>
                ),
            }}
        />     
        {/* <Tab.Screen name = "Search" component={HomeScreen}
            options ={{
                tabBarIcon: ({focused})=>(
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source ={require('../../src/assets/search.png')}
                        resizeMode = 'contain'
                        style={{
                            width:35,
                            height:35,
                            borderWidth: 2,
                            borderRadius: 20,
                            tintColor: focused ? COLORS.primary : COLORS.grey,
                            
                        }}
                        />
                        <Text style ={{color: focused ? COLORS.primary:COLORS.grey, fontSize:12}}>
                            Tìm kiếm
                        </Text>
                    </View>
                ),
            }}
        />      */}
        <Tab.Screen name = "address" component={MapScreen}
            options ={{
                tabBarIcon: ({focused})=>(
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source ={require('../../src/assets/address.png')}
                        resizeMode = 'contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.grey,
                        }}
                        />
                        <Text style ={{color: focused ? COLORS.primary: COLORS.grey, fontSize:12}}>
                            Địa chỉ
                        </Text>
                    </View>
                ),
            }}
        />     
        <Tab.Screen name = "cart" component={HomeScreen}
            options ={{
                tabBarIcon: ({focused})=>(
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source ={require('../../src/assets/cart.png')}
                        resizeMode = 'contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.grey,
                        }}
                        />
                        <Text style ={{color: focused ? COLORS.primary: COLORS.grey, fontSize:12}}>
                            Giỏ hàng
                        </Text>
                    </View>
                ),
            }}
        />     
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F6DF0',
        shadowOffset: {
            width:0,
            height:10,
        },
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        elevation:5,
    }
});

export default Tabs;