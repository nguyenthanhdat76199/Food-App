import React from 'react';
import {StyleSheet, View, Text, StatusBar, Image} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Entypo.loadFont();

import {useDispatch, useSelector} from 'react-redux';

const ProfileItem = ({icon, name}) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={26} color="#F35D38" />
    <Text style={[styles.itemText, {marginLeft: icon ? 20 : 0}]}>{name}</Text>
    <FontAwesome name="angle-right" size={26} color="#F35D38" />
  </View>
);

const Profile = () => {
  const user = useSelector(state => state.user.userInfo);

  return (
    <View style={styles.screenContainer}>
      {/* Ẩn thanh bar trên ứng dụng */}
      {/* <StatusBar barStyle="light-content" /> */}
      <View style={styles.headerContainer}>
        <View style={styles.cartContainer}>
          <View style={styles.cartIcon} />
        </View>
        <Text style={styles.headerText}>{user.name}</Text>
        <View style={styles.cartContainer}>
          {/* <FontAwesome
            name="shopping-cart"
            size={HEADER_ICON_SIZE}
            color="#fff"
          /> */}
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            {/* <Image source={{uri: user.img}}/> */}
            <MaterialIcons name="person" size={26} color="#fff" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Chào mừng bạn đến với Pizza</Text>
            <Text style={styles.authText}>Đăng nhập/Đăng ký</Text>
          </View>
          <FontAwesome name="angle-right" size={26} color="#F35D38" />
        </View>
        <View style={styles.divider} />
        <ProfileItem icon="cart-outline" name="Sản Phẩm đã đặt" />
        <ProfileItem icon="star-outline" name="Sản phẩm đánh giá" />
        <View style={styles.divider} />
        <ProfileItem name="Đăng xuất" />
      </View>
    </View>
  );
};

const HEADER_ICON_SIZE = 24;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    backgroundColor: '#F35D38',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    width: HEADER_ICON_SIZE,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F35D38',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#828282',
  },
  authText: {
    color: '#F35D38',
    fontSize: 18,
    fontWeight: '500',
  },
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  divider: {
    height: 10,
  },
});


export default Profile;
