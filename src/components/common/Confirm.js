import React from 'react';

import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';

const Confirm = (props) => {
  const {visible, children, onAccept, onDecline} = props;
  return (
    <Modal
      animationType="fade"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>{children}</Text>
        <Button onPress={onAccept} title="Yes"/>
        <Button onPress={onDecline} title="No"/>
      </View>

    </Modal>
  );

};

const styles = {
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };