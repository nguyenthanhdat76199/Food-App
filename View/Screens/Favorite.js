import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import axios from 'axios'

import COLORS from '../../src/consts/color';

let foods = require('./favrite.json');

const CardFavorite = ({product, navigation}) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Detail', product)}
    >
      <Image 
        style={styles.card_img} 
        source={{uri: product.img}}
      ></Image>
      <Text style={styles.card_name}>{product.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: '400', color: '#5d2d00'}}>
          {product.About}
          {'      '}
        </Text>
        <Icon name="star" size={16} color={'red'}></Icon>
        <Text style={{color: 'red', fontSize: 14}}>
          {'  '}
          {product.point}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CardNew = ({product, navigation}) => {
  return (
    <TouchableOpacity 
      style={{flexDirection: 'row', paddingLeft: 10}}
      onPress={() => navigation.navigate('Detail', product)}
      >
      <Image style={styles.card_new_img} source={{uri: product.img}}></Image>
      <View style={{paddingTop: 10}}>
        <Text style={styles.card_name}>{product.name}</Text>
        <View>
          <Text style={{fontWeight: '400', color: '#5d2d00'}}>
            {product.About}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={16} color={'red'}></Icon>
            <Text style={{color: 'red', fontSize: 14}}>
              {'  '}
              {product.point}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Favorite = ({navigation}) => {
  const [newDish, setnewDish] = useState([])
  const [favoriteFood, setfavoriteFood] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://616a72e516e7120017fa0f9d.mockapi.io/api/favorite'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setnewDish(data[0].newDish)
      setfavoriteFood(data[0].favoriteFood)
      // console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.header}>
        <Text style={styles.header_text}>Món ưa thích</Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newDish.map((product, index) => (
              <CardFavorite navigation= {navigation} product={product} key={index} />
            ))}
          </ScrollView>
        </View>
        <Text style={styles.header_text}>Món mới</Text>
        <View>
          {favoriteFood.map((product, index) => (
            <CardNew navigation={navigation} product={product} key={index} />
          ))}
        </View>
        {/* <FlatList
          numColumns={1}
          data={foods.food}
          renderItem={({item}) => <CardNew product={item} />}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header_text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: COLORS.primary,
  },
  card_img: {
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10,
    height: 160,
    width: 260,
  },
  card_new_img: {
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10,
    height: 80,
    width: 80,
  },
  card_name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Favorite;
