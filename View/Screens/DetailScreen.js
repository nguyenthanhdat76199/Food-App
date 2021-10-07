import React,{Component} from "react";
import { SafeAreaView,StyleSheet,View,Text,Image } from "react-native";
import COLORS from "../../src/consts/color";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SecondaryButton } from "../Components/Button";
export default class DetailScreen extends Component {
    constructor(prop){
        super(prop)
        this.navigation = prop.navigation;  
        this.state = {
            data: prop.route.params,       
        }      
}
    render(){
        return(
            <ScrollView>
                <SafeAreaView style={{flex: 1,backgroundColor: COLORS.white}}>
                    <View style={styles.header}>
                        <View style={styles.goback}>
                          <TouchableOpacity>
                          <Text style={styles.textback} onPress={()=>this.navigation.navigate('Home')}>
                                Back
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:COLORS.white}}>
                           <TouchableOpacity>
                           <Image
                                source={require('../../src/assets/Thongbao.png')}
                                style={{
                                    width: 30,
                                    height: 30,                                   
                                }}
                            />
                           </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>                     
                      <Image source={{uri:this.state.data.img}}
                          style={{resizeMode:'contain',flex:1,height:220,width:220, borderRadius:20}}
                      />
                  </View>   
                 <View style = {styles.detail}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold',color:COLORS.white}}>
                          {this.state.data.name}
                      </Text>
                      <Text style={{fontSize: 24,fontWeight:'bold',color: COLORS.white}}>
                          {this.state.data.price} VNĐ
                      </Text>
                    </View>
                    <View style={{marginTop: 20, }}>
                        <Text style = {{fontSize: 24,fontWeight:'bold',color: COLORS.white}}>
                           About:
                        </Text>
                    </View>
                    <View style={{marginTop: 20, }}>
                        <Text style = {{fontSize: 24,fontWeight:'bold',color: COLORS.white}}>
                            {this.state.data.About}
                        </Text>
                    </View>
                    <View style={{marginTop:30, marginBottom: 40 }}>
                        <SecondaryButton title="Add to Cart"/>
                    </View>
                 </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    textback:{
        fontSize: 20,
        fontWeight: 'bold',      
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    detail:{
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: COLORS.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,

    }
})
 