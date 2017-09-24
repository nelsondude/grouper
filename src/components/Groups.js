import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { fetchGroups, fetchDetailGroup } from "./actions"
import { connect } from 'react-redux';
import {Confirm} from "./common/Confirm";



class Groups extends Component {
  state = {
    showModal: false
  };

  componentWillMount() {
    this.fetchTheGroups();
  }

  fetchTheGroups() {
    const header = this.props.token_type + ' ' + this.props.access_token;
    this.props.fetchGroups(header);
  }

  loadDetailGroup(url) {
    const header = this.props.token_type + ' ' + this.props.access_token;
    this.props.fetchDetailGroup({header, url})
  }

  Groups() {
    if (this.props.groups) {
      return (
        this.props.groups.map((item, i) => (
            <TouchableOpacity onPress={() => this.loadDetailGroup(item.url)}>
              <ListItem
                title={item.title}
              />
            </TouchableOpacity>
          )
        )
      )
    }
  }
  onAccept() {
    console.log('accept');
  }

  onDecline() {
    console.log('decline');
  }

  render() {
    return (
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.fetchTheGroups.bind(this)}>
            <Text>Load</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>console.log(this.state)}>
            <Text>Add</Text>
          </TouchableOpacity>

        </View>

        {this.Groups()}
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </ScrollView>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { groups } = state.groups;
  const { access_token, token_type } = state.auth;
  return { groups, access_token, token_type };
};

export default connect(mapStateToProps, {fetchGroups, fetchDetailGroup})(Groups);