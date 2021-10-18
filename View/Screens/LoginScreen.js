import React from "react";
import { useState } from "react";
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import COLORS from "../../src/consts/color";

import {useDispatch} from 'react-redux'
import {addUser} from '../../src/redux/actions/user.js'

const datas= require("../../src/consts/user.json")

const DangNhap = ({navigation}) => {
    const [data, setData] = useState(datas.User);
    const [check, setCheck] = useState('');
    const [User, setUser] = useState('');
    const [Pass, setPass] = useState('');
    const dispatch = useDispatch();

    const checkuser = () =>{
        let count = 0;
        for( let i = 0;i<data.length;i++){
            if(data[i].user==User && Pass==data[i].pass){
                count++;
                const action = addUser(data[i]);
                dispatch(action);
            }
        }
        if(count == 1){
            navigation.navigate('BoardScreen');
        }
        else{
            alert("Đăng nhập thất bại")
            setCheck({check:alert});
        }
    }
    
        return(
            <View style={{backgroundColor: COLORS.white}}>
                <View style={styles.header}>
                    <Text style={{textAlign:'center', fontSize: 40, fontWeight: 'bold'}}>
                        Welcome 
                        </Text> 
                </View>
                <View style={styles.container}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        User
                    </Text>
                    <TextInput style={styles.input} value={User}
                    onChangeText={(value)=>{setUser(value)}}
                    ></TextInput>
                    <Text style={{fontSize: 20,fontWeight: 'bold'}}>
                        Password
                    </Text>
                    <TextInput secureTextEntry={true} style={styles.input}value={Pass}
                    onChangeText={(value)=>{setPass(value)}} 
                    ></TextInput>
                
                    <View style={{alignItems:'center'}}>
                    <Text style={styles.buttonstyle}onPress={checkuser}>
                        Sign in
                    </Text>
                    </View>
                </View>
            </View>
        )
}
const styles = StyleSheet.create({
    header:{
        height: 100,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
    },
    buttonstyle:{
        textAlign:'center',
        margin:15,
        height:30,
        borderRadius:10,
        backgroundColor:COLORS.primary,
        width:100,
        alignItems:'center',
        padding:5
    },
    container:{
        justifyContent: 'center',
        flexDirection:'column',
        padding:20,
        borderRadius:15,
        backgroundColor: COLORS.white,
        height:500
    },
    input:{
        padding:10,
        borderRadius:20,
        height:40,
        borderWidth:1,
        backgroundColor:COLORS.white,
      },
    // group: {
    //     marginTop:20
    // },
    // button:{
    //     backgroundColor:'lightblue',
    //     padding:20,
    //     borderWidth:1,
    //   },
    //   buttonText: {
    //     fontSize:30,
    //   },

});

export default DangNhap;