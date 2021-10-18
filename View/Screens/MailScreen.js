import React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
let pdjs = require('../../src/consts/mail.json');
const width = Dimensions.get('screen').width - 30;
export default class MailScreen extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      data: pdjs.event,
    };
  }
  refeshFlatlist(event) {
    console.log(event);
    this.setState(this.state.data == event);
  }
  render() {
    const Item = ({product}) => {
      return (
        <SafeAreaView>
          <TouchableOpacity>
            <View
              style={{
                width,
                height: 130,
                backgroundColor: COLORS.primary,
                marginLeft: 15,
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <View style={styles.left}>
                <Text style={styles.title}>{product.about}</Text>
              </View>
              <View>
                <Image
                  style={{width: 50, height: 50, marginTop: 10}}
                  source={require('../../src/assets/gift.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      );
    };
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={styles.header}>
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => this.navigation.goBack(null)}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Item product={item} />}
          contentContainerStyle={{}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  left: {
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 15,
  },
});
