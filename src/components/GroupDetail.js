import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class GroupDetail extends Component {
  render() {
    return(
      <View style={styles.containerStyle}>
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Text>
            Go Back
          </Text>
        </TouchableOpacity>

        <View style={{marginTop: 20, alignItems: 'center'}}>
          <Text>
            {this.props.klass.title}
          </Text>
          <Text>Taught by {this.props.klass.teacher}</Text>
          <Text>There are {this.props.klass.student_count} students taking this class.</Text>

        </View>


      </View>
    )
  }
}

const styles = {
  containerStyle: {
    margin: 10,
  }
}

export default GroupDetail;