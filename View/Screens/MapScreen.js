import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native';
// import MapView from "react-native-maps"
import MapView, {Callout, Marker} from 'react-native-maps';
import {Title} from 'react-native-paper';
// import {MapView,Marker,Callout} from "react-native-maps";
const MapScreen = () => {
  return (
    <SafeAreaView style={{width: 400, height: 500}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 21.009132,
          longitude: 105.767134,
          latitudeDelta: 0.05,
          longitudeDelta: 0.002,
        }}>
        <Marker
          description="my location"
          coordinate={{latitude: 21.009132, longitude: 105.767134}}>
          <Image
            style={{...style.iconMap}}
            source={require('../../src/assets/maker.png')}
          />
          <Callout style={{...style.callout}}>
            <Title style={{...style.title_callout}}>Vị trí của bạn</Title>
          </Callout>
        </Marker>

        <Marker
          description="shipper location"
          coordinate={{latitude: 21.0379990742, longitude: 105.771288598}}>
          <Image
            style={{...style.iconMap}}
            source={require('../../src/assets/shipper.png')}
          />
          <Callout style={{...style.callout}}>
            <Title style={{...style.title_callout}}>Shipper Thân Thiện</Title>
          </Callout>
        </Marker>

        <Marker
          description="shipper2 location"
          coordinate={{latitude: 21.0014971102, longitude: 105.782630751}}>
          <Image
            style={{...style.iconMap}}
            source={require('../../src/assets/shipper.png')}
          />
          <Callout style={{...style.callout}}>
            <Title style={{...style.title_callout}}>
              Shipper đang giao đến bạn
            </Title>
          </Callout>
        </Marker>

        {/* <Marker 
                         description="shipper2 location"
                         coordinate={{latitude: 21.0014971102, longitude: 105.782630751 }}>
                        <Image style={{...style.iconMap}} source={require('../../src/assets/shipper.png')}/>                
                        <Callout style={{...style.callout}}>
                            <Title style={{...style.title_callout}}>Shipper Đang Giao hàng</Title>
                        </Callout>
                        </Marker>     */}

        <Marker
          description="store location"
          coordinate={{latitude: 21.0323, longitude: 105.7655}}>
          <Image
            style={{...style.iconMap}}
            source={require('../../src/assets/store.png')}
          />
          <Callout style={{...style.callout}}>
            <Title style={{...style.title_callout}}>FoodShop</Title>
          </Callout>
        </Marker>
      </MapView>
      {/* <View>
                    <Image source={require('../../src/assets/add.png')}
                    style={{
                      width: 30,
                      height:30,
                      marginBottom: 20
                    }}/>
                </View> */}
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  iconMap: {
    width: 35,
    height: 35,
  },
  callout: {
    width: 100,
  },
  title_callout: {
    fontSize: 12,
    textAlign: 'center',
  },
});
export default MapScreen;
