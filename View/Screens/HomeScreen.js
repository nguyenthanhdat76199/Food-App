import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import axios from 'axios'
const categories = require('../../src/consts/categories.json');
const width = Dimensions.get('screen').width / 2 - 30;
//const pdjs = require('../../src/consts/foodList.json');

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const images = [
  'https://static.wixstatic.com/media/e7da97_e6f2bcba6fa8468facb5b4f32e6a991e~mv2.png/v1/fill/w_1200,h_628,al_c/e7da97_e6f2bcba6fa8468facb5b4f32e6a991e~mv2.png',
  'https://vnso.vn/wp-content/uploads/2016/10/phu_nu_viet_nam_20_105.jpg',
  'https://media.go2speed.org/brand/files/lazada/3195/VN_WomenDay_102015_640x360.jpg'
]

const Banner = () => {
  const [imgActive, setimgActive] = useState(0);
  const onchange = (nativeEvent) => {
    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide != imgActive){
        setimgActive(slide);
      }
    }
  }
  return(
    <View style={style.wrap}>
      <ScrollView
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={style.wrap}
      >
      {
        images.map((image, index) =>
          <Image
            key={index}
            resizeMode='stretch'
            style={style.wrap}
            source = {{uri: image}}
          />
        )
      }
      </ScrollView>
      <View style={style.wrapDot}>
        {
          images.map((image, index) =>
            <Text
              key={index}
              style = {imgActive == index ? style.dotActive : style.dot}
            >
              ●
            </Text>
          )
        }
      </View>
    </View>
  );
}

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.refreshFlatlist = this.refreshFlatlist.bind(this);
    this.gotoDetail = this.gotoDetail.bind(this);
    this.state = {
      foods:null,
      data:null,
    };
  }
  gotoDetail(product) {
    this.navigation.navigate('Detail', product);
  }

  refreshFlatlist(products) {
    this.setState((this.state.data = products));
  }

  componentDidMount() {
    this.fetchCountryData()
  }
  fetchCountryData = async () => {
    const url = 'https://616a72e516e7120017fa0f9d.mockapi.io/api/products'
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        foods: data[0]
      })
      this.setState({
        data: data[0].Pizza
      })
    } catch (error) {
      console.log(error)
    }
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
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'left',
                    fontWeight: 'bold',
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
        <Banner/>
        <View
          style={{
            marginTop: 10,
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
          <TouchableOpacity onPress={() => this.navigation.navigate('Mail')} style={style.sortBtn}>
            <Image
              source={require('../../src/assets/email.png')}
              style={{height: 20, width: 20, marginLeft: 15, marginTop: 15}}
            />
          </TouchableOpacity>
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
            showsHorizontalScrollIndicator={false}>
            {categories.list.map((category, index) => (
              <View style={style.btnCategory} key={index}>
                <TouchableOpacity  activeOpacity={0.8} style ={{flexDirection:'row'}}
                  onPress ={()=> this.refreshFlatlist(this.state.foods[`${category.name}`])}
                  >
                  <Image
                    source={{uri: category.img}}
                    style={{
                      width: 25,
                      height: 26,
                      marginLeft: 10,
                    }}
                  />
                  <Text style ={{fontSize: 18, textAlign:"center", color: "white"}}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              </View>
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
    paddingHorizontal: 12,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    marginLeft: 10,
    marginRight: 10,
  },
  wrap:{
    width: WIDTH,
    height: HEIGHT * 0.2,
  },
  wrapDot:{
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotActive : {
    margin: 3,
    color: COLORS.primary
  },
  dot: {
    margin: 3,
    color: 'white'
  }
});
