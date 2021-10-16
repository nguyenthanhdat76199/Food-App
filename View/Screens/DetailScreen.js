import React, {Component, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import COLORS from '../../src/consts/color';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SecondaryButton} from '../Components/Button';

import {useDispatch, useSelector} from 'react-redux'
import {addNewPrduct} from '../../src/redux/actions/cartList'

const DetailScreen = (props) => {

  const [navigation, setNavigation] = useState(props.navigation);
  const [data, setData] = useState(props.route.params);
  const newFoodList = useSelector(state => state.cartList.list)
  const dispatch = useDispatch();

  const addProduct = () => {
    let count = 0
    newFoodList.forEach(element => {
      if(element.id == data.id){
        count++;
      }
    });
    if(count == 0){
      const action = addNewPrduct(data);
      dispatch(action);
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={styles.header}>
          <View style={styles.goback}>
            <TouchableOpacity>
              <Text
                style={styles.textback}
                onPress={() => navigation.navigate('Head')}>
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
            source={{uri: data.img}}
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
                {data.name}
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: COLORS.white,
                }}>
                {data.price} VNĐ
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
                {data.About}
              </Text>
            </View>
            <View style={{marginTop: 30, marginBottom: 40}}>
              <SecondaryButton onPress = {addProduct} title="Add to Cart" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DetailScreen;

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
