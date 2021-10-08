import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const categories = require ('../../src/consts/cate.json');

import food from '../../src/consts/food.json';

const width = Dimensions.get('screen').width / 2 - 30;
let pdjs1 = require('../../src/consts/pizza.json');
let pdjs2 = require('../../src/consts/burger.json');
let pdjs3 = require('../../src/consts/water.json');

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.refreshFlatlist = this.refreshFlatlist.bind(this);
    this.gotoDetail = this.gotoDetail.bind(this);
    this.state = {
      data: pdjs1.products,
    };
  }
  gotoDetail(product) {
    this.navigation.navigate('Detail', product);
    console.log(categories);
  }

  refreshFlatlist(products) {
    this.setState((this.state.data = products));
  }

  render() {
    const Card = ({product}) => {
      return (
        <TouchableOpacity
          onPress={() => this.navigation.navigate('Detail', product)}>
          <View style={style.Card}>
            <View>
              <View
                style={{
                  height: 120,
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    flex: 1,
                    resizeMode: 'contain',
                    height: 200,
                    width: 100,
                  }}
                  source={{uri: product.img}}
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}>
                {product.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>
                  {product.price} VNĐ
                </Text>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: COLORS.primary,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: COLORS.white,
                      fontWeight: 'bold',
                      flex: 1,
                    }}>
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={style.header}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 28}}>Hello,</Text>
              <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                Nam
              </Text>
            </View>
            <Text style={{marginTop: 5, fontSize: 20, color: COLORS.grey}}>
              What do you want today
            </Text>
          </View>
          <Image
            source={require('../../src/assets/user.png')}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View style={style.inputContainer}>
            <Image
              source={require('../../src/assets/search.png')}
              style={{height: 28, width: 28}}
            />
            <TextInput
              style={{flex: 1, fontSize: 18, marginLeft: 10}}
              placeholder="Search for food"
            />
          </View>
          <View style={style.sortBtn}>
            <Image
              source={require('../../src/assets/setting.png')}
              style={{height: 20, width: 20, marginLeft: 15, marginTop: 15}}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.categoriesListContainer}>
          {categories.list.map((category, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8}>
              <View>
                <Image
                  source={require({categoty.img})}

                  // source={require('../../src/assets/categories/chickenBurger.png')}
                  style={{
                    width: 25,
                    height: 26,
                    marginLeft: 10,
                  }}
                />
                <Text style={{fontSize: 18, marginLeft: 10, marginRight: 60}}>
                  {category.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          </ScrollView>
        </View>

        <FlatList
          numColumns={2}
          data={this.state.data}
          renderItem={({item}) => <Card product={item} />}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  catergoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 12,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: '5',
    flexDirection: 'row',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btnCategory: {
    height: 45,
    width: 120,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    marginLeft: 10,
  },
  Card: {
    height: 250,
    width,
    marginHorizontal: 2,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    marginLeft: 10,
    marginRight: 10,
  },
});
