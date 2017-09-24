import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

/*const popToSwiper = () => {
    console.log("Pop");
    Actions.main();
};*/

class Launch extends Component {
  constructor(props){
    super(props);

    this.popToSwiper = this.popToSwiper.bind(this);

    this.state = {
      data: 'Placeholder'
    }
  }

  popToSwiper = () => {
    console.log("Pop");
    Actions.classes();
  };

  render() {
    return (
      <View style={styles.containerStyle}>
            <Text>Welcome to Grouper</Text>
            <TouchableOpacity onPress={this.popToSwiper}>
              <Image style={styles.imgStyle} 
              source={{uri:'https://www.thenerdmag.com/wp-content/uploads/facebook-login.png'}}/>
            </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgStyle: {
    width: Dimensions.get('window').width,
    height: 100
  }
};

export default Launch;