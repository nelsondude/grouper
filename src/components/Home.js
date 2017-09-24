import Expo from 'expo';
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Swiper from "./Swiper";

class Home extends Component {
  render() {
    return(
      <Scene
        key="home"
      >
        <View>
          <Text>Hey There</Text>
        </View>
      </Scene>
    )
  }
}

Home.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="material-commnity"
      color={tintColor}
    />
  ),
};

export default Home;