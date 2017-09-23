import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Launch extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>
          hey There Pro
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

export default Launch;