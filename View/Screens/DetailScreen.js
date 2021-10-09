import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import COLORS from '../../src/consts/color';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SecondaryButton} from '../Components/Button';

import {AsyncStorage} from 'react-native';

export default class DetailScreen extends Component {
  constructor(prop) {
    super(prop);
    this.navigation = prop.navigation;
    this.state = {
      data: prop.route.params,
      listProducts: [],
    };
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View style={styles.header}>
            <View style={styles.goback}>
              <TouchableOpacity>
                <Text
                  style={styles.textback}
                  onPress={() => this.navigation.navigate('Head')}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor: COLORS.white}}>
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
            <Image
              source={{uri: this.state.data.img}}
              style={{
                resizeMode: 'contain',
                flex: 1,
                height: 220,
                width: 220,
                borderRadius: 20,
              }}
            />
          </View>
          <View style={styles.container_details}>
            <View style={styles.detail}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: COLORS.white,
                  }}>
                  {this.state.data.name}
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: COLORS.white,
                  }}>
                  {this.state.data.price} VNĐ
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: COLORS.white,
                  }}>
                  About:
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: COLORS.white,
                  }}>
                  {this.state.data.About}
                </Text>
              </View>
              <View style={{marginTop: 30, marginBottom: 40}}>
                <SecondaryButton
                  // onPress={async () => {
                  //   this.setState({
                  //     listProducts: this.state.listProducts.push(
                  //       this.state.data,
                  //     ),
                  //   });
                  //   AsyncStorage.setItem('listCart', 'adsd');
                  //   try {
                  //     const value = await AsyncStorage.getItem('TASKS');
                  //     if (value !== null) {
                  //       // We have data!!
                  //       console.log(value);
                  //     }
                  //   } catch (error) {
                  //     // Error retrieving data
                  //   }
                  //   console.log(listC);
                  // }}
                  title="Add to Cart"
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container_details: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  textback: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
