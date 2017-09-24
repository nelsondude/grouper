import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Swiper from "./Swiper";

class Popup extends Component {
  Groups() {
    if (this.props.groups) {
      return (
        this.props.groups.map((item, i) => (
            <TouchableOpacity onPress={() => console.log('touched', item)}>
              <ListItem
                title={item.title}
              />
            </TouchableOpacity>
          )
        )
      )
    }
  }

  render() {
    return(
      <ScrollView>
        <TouchableOpacity>
          <Text>Load</Text>
        </TouchableOpacity>
        {this.Groups()}
      </ScrollView>
    )
  }
}

export default Popup;