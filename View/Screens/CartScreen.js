import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../src/consts/color';
import {PrimaryButton} from '../Components/Button';

import {useDispatch, useSelector} from 'react-redux';
import {
  quantityIncrease,
  quantityDecrease,
  removeProduct,
} from '../../src/redux/actions/cartList';

const CartScreen = ({navigation}) => {
  const totalPrice = useSelector(state => state.cartList.totalPrice);
  const newFoodList = useSelector(state => state.cartList.list);
  
  const CartCard = ({item}) => {
    const dispatch = useDispatch();
    const Items = {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        About: item.About,
        number: item.number,
        totalMoney: item.price * item.number,
    };

    const [itemInfo, setItem] = useState(Items);
    const QuantityIncrease = () => {
      const action = quantityIncrease(item.id);
      dispatch(action);
    };

    const QuantityDecrease = () => {
      const action = quantityDecrease(item.id);
      dispatch(action);
    };

    const DeleteProduct = () => {
      const action = removeProduct(item.id);
      dispatch(action);
    };

    return (
      <View style={style.cartCard}>
        <Image source={{uri: itemInfo.img}} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            {itemInfo.name}
          </Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {itemInfo.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            ${itemInfo.totalMoney}
          </Text>
        </View>
        <View style={{marginRight: 30, alignItems: 'center'}}>
          <View style={style.actionBtn}>
            <Icon
              onPress={QuantityDecrease}
              name="remove-circle"
              size={25}
              color={COLORS.white}
            />
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
            {itemInfo.number}
            </Text>
            <Icon
              onPress={QuantityIncrease}
              name="add"
              size={25}
              color={COLORS.white}
            />
          </View>
        </View>
        <View style={style.delete}>
          <Icon
              onPress={DeleteProduct}
              name="delete"
              size={30}
              color={'red'}
            />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" color = {COLORS.primary} size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.primary}}>Giỏ hàng</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={newFoodList}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                ${totalPrice}
              </Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton onPress={() => navigation.navigate('Checkout')} title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  delete: {
    marginRight: -10,
    marginTop: 74,
    borderRadius: 10,
    width: 30,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    // alignItems: 'center',
    color: COLORS.primary,
  },
});

export default CartScreen;
