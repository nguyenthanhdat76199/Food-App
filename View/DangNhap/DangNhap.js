import React from "react";
import { Component } from "react";
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import COLORS from "../../src/consts/color";

const data= require("../DangNhap/User.json")

export default class DangNhap extends Component{
    constructor(props){
        super(props);
        this.navigation = props.navigation;
        this.state={
            data:data.User,
            check:'',
            User:'',
            Pass:''
        }
    }
    checkuser(){
        let dem = 0
        console.log(this.state.data)
        console.log(this.state.data[0].user,this.state.data[0].pass)
        
        console.log(this.state.User,this.state.Pass)

        for( let i =0;i<this.state.data.length;i++){
            if(this.state.data[i].user==this.state.User && this.state.Pass==this.state.data[i].pass){
                this.navigation.navigate('BoardScreen',this.state.data[i]);
                dem++
            }
            // else if(this.state.User==''||this.state.Pass==''){
            //     check:'Bạn chưa nhập tài khoản hoặc mật khẩu',
            //     this.setState({check:check});
            // }
            // else{
            //     check:'Sai tài khoản hoặc mật khẩu',
            //     this.setState({check:check});
            // }
            if(dem==0){
                alert("Đăng nhập thất bại")
                this.setState({check:alert});
            }
        }

    }
    
    render(){
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
                    <TextInput style={styles.input} value={this.state.User}
                    onChangeText={(value)=>{this.setState({User:value})}}
                    ></TextInput>
                    <Text style={{fontSize: 20,fontWeight: 'bold'}}>
                        Password
                    </Text>
                    <TextInput secureTextEntry={true} style={styles.input}value={this.state.Pass}
                    onChangeText={(value)=>{this.setState({Pass:value})}} 
                    ></TextInput>
                
                    <View style={{alignItems:'center'}}>
                    <Text style={styles.buttonstyle}onPress={this.checkuser.bind(this)}>
                        Sign in
                    </Text>
                    </View>
                </View>
            </View>
        )
    }
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