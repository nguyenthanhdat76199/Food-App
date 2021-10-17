import React from "react";
import { Component } from "react";
import { View,Text,StyleSheet, Image,Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../src/consts/color";
const width = Dimensions.get("screen").width;
export default class MailScreen extends Component{
    constructor(props){
        super(props);
        this.navigation = props.navigation;
        this.state = {
            data: props.route.params,       
        } 
    }

    render(){
        return(     
            <ScrollView> 
                <View style={{
                    width: 388,
                    height: 150,
                    backgroundColor:'#e74c3c',
                    margin: 10,
                    }}>
                    <TouchableOpacity 
                    onPress = {()=> this.navigation.navigate('DetailMail')}
                    style={{flexDirection:'row'}}>
                        <Text style={{marginTop: 20,fontSize: 22,flex: 5}}>GÓI ĂN 90K HSBC TẶNG BẠN</Text>
                        <Image 
                        source={require('../../src/assets/gift.png')}
                         style = {{
                        marginTop: 95,              
                        width: 50,
                        height: 50,
                        }}/>
                    </TouchableOpacity>
                 </View>  

                 <View style={{
                    width: 388,
                    height: 150,
                    backgroundColor: '#3498db',
                    margin: 10,
                    }}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <Text style={{marginTop: 20,fontSize: 22,flex: 5}}>BẠN CÓ QUÀ 50K TỪ ZALOPAY</Text>
                        <Image 
                        source={require('../../src/assets/gift.png')}
                         style = {{
                        marginTop: 95,              
                        width: 50,
                        height: 50,
                        }}/>
                    </TouchableOpacity>
                 </View> 

                 <View style={{
                    width: 388,
                    height: 150,
                    backgroundColor:'#2ecc71',
                    margin: 10,
                    }}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <Text style={{marginTop: 20,fontSize: 22,flex: 5}}>VPBANK TẶNG BẠN GÓI ĂN 120K</Text>
                        <Image 
                        source={require('../../src/assets/gift.png')}
                         style = {{
                        marginTop: 95,                  
                        width: 50,
                        height: 50,
                        }}/>
                    </TouchableOpacity>
                 </View>

                 <View style={{
                    width: 388,
                    height: 150,
                    backgroundColor:'#8e44ad',
                    margin: 10,
                    }}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <Text style={{marginTop: 20,fontSize: 22,flex: 5}}>TP BANK TẶNG BẠN GÓI ĂN 1.120.000Đ</Text>
                        <Image 
                        source={require('../../src/assets/gift.png')}
                         style = {{
                         marginTop: 95,                   
                        width: 50,
                        height: 50,
                        }}/>
                    </TouchableOpacity>
                 </View>                             
            </ScrollView>                           
        )
    }
}


