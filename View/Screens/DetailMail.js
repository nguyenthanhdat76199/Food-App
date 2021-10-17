import React from "react";
import { Component } from "react";
import { SafeAreaView,View,Text,StyleSheet,Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class DetailMail extends Component{
    constructor(props){
        this.navigation = props.navigation;
        this.state = {
            data: props.route.params,       
        }       
    }

    render(){
        return(
            <ScrollView>
                <SafeAreaView>
                    <View style={styles.header}>
                        <View style={styles.GoBack}>
                            <TouchableOpacity>
                                <Text style={styles.textback}> onPress={()=>this.navigation.navigate('Mail')}
                                    Back
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.imageContainer}>
                            <Image source={{uri:this.state.data.img}}/>
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
    }
})