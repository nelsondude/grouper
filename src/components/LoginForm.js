import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  logoutUser
} from '../actions';
import { Spinner } from './common';
import {
  FormInput,
  FormLabel,
  Button
} from 'react-native-elements';

const FormValidationMessage = (props) => {
  return (
    <View style={styles.validationMsgContainer}>
      <Text style={styles.validationMsgText}>
        {props.children}
      </Text>
    </View>
  )
};


class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({email, password});
  }

  onLogoutUser() {
    this.props.logoutUser();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>;
    }
    return (
      <Button
        raised
        buttonStyle={styles.button}
        backgroundColor={'green'}
        icon={{ name: 'account', type: 'material-community' }}
        onPress={this.onButtonPress.bind(this)}
        title="Login"
      />
    )
  }

  render() {
    return (
      <View>
        <FormLabel containerStyle={styles.labelContainerStyle}>
        Email
        </FormLabel>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          value={this.props.email}
          onChangeText={(text) => this.onEmailChange(text)}
          placeholder="Enter your email ..."
        />
        <FormLabel containerStyle={styles.labelContainerStyle}>
          Password
        </FormLabel>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          value={this.props.password}
          placeholder="Enter your password ..."
          onChangeText={(text) => this.onPasswordChange(text)}
        />
        <FormValidationMessage>
          {this.props.error}
        </FormValidationMessage>
        {this.renderButton()}
        <Button
          raised
          buttonStyle={styles.button}
          backgroundColor={'red'}
          icon={{ name: 'account', type: 'material-community' }}
          onPress={this.onLogoutUser.bind(this)}
          title="Logout"
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;
  return {email, password, error, loading};
};

const styles = StyleSheet.create({
  labelContainerStyle: {
    marginTop: 8,
  },
  button: {
    marginTop: 15,
  },
  validationMsgContainer: {
    paddingTop: 10,
    paddingLeft: 20
  },
  validationMsgText: {
    color: 'red'
  }
});

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  logoutUser
})(LoginForm);
