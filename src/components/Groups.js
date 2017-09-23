import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Groups extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>
          Here are my Groups
        </Text>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Groups;