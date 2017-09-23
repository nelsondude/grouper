import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class DrawerContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          hello Drawer Im Here
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default DrawerContent;