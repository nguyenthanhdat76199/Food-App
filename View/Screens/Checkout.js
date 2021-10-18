import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { RadioButton } from 'react-native-paper';
import {useSelector} from 'react-redux';


import COLORS from '../../src/consts/color';
import {PrimaryButton} from '../Components/Button';



const Checkout = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');
  const totalPrice = useSelector(state => state.cartList.totalPrice);
  const [total, setTotal] = React.useState(totalPrice * 0.9);
  return (
    <ScrollView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={() => navigation.navigate('Cart')} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Phương thức thanh toán</Text>
      </View>
      <View style={style.payment}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Địa chỉ</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight:20, paddingLeft:10}}>
          <Text style={{fontSize: 20}}>162 Cổ Nhuế, Bắc Từ Liêm,{"\n"} Hà Nội</Text>
          <Text style={{color: 'red'}}>Thay đổi</Text>
        </View>
      </View>
      <View style={style.payment}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Chọn loại thẻ
        </Text>
        <View>
          <View style={style.creditCard}>
            <Image style={style.tinyLogo} source={require('../../src/assets/creditCard/visa.jpg')}></Image>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>***  ***  ***  7619{"\n"} VISA </Text>
            </View>
            <RadioButton
              value="first"
              status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('first')}
            />
          </View>
          <View style={style.creditCard}>
            <Image style={style.tinyLogo} source={require('../../src/assets/creditCard/momo.png')}></Image>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>***  ***  ***  7619{"\n"} MOMO </Text>
            </View>
            <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
           />
          </View>
          <View style={style.creditCard}>
            <Image style={style.tinyLogo} source={require('../../src/assets/creditCard/masterCard.png')}></Image>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>***  ***  ***  7619{"\n"} MASTER CARD </Text>
            </View>
            <RadioButton
            value="third"
            status={ checked === 'third' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('third')}
            />
          </View>
        </View>
      </View>
      <View style = {style.payment}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Ưu đãi</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight:20, paddingLeft:10}}>
          <Text style={{fontSize: 20}}>Tiền</Text>
          <Text style={{color: 'red'}}>{totalPrice} vnđ</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight:20, paddingLeft:10}}>
          <Text style={{fontSize: 20}}>Giảm giá</Text>
          <Text style={{color: 'red'}}>-10%</Text>
        </View>
      </View>
      <View style ={{paddingHorizontal: 20,}}>

        <View style={{marginHorizontal: 30,marginTop: 30, borderTopColor: 'black', borderTopWidth: 1,}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight:20, paddingLeft:10, paddingBottom: 24, paddingTop: 24}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tổng thanh toán</Text>
            <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>{total} vnđ</Text>
          </View>
          <PrimaryButton title="Xác nhận" />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  totalPrice: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#e8e3e3',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  textTotalPrice: {
    fontSize: 16,
    textAlign: 'center'
  },
  payment: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  creditCard: {
    borderRadius: 10,
    backgroundColor: '#e3e8e3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 20,
    justifyContent: 'space-between',

  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default Checkout;
