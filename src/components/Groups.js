import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { fetchGroups } from "./actions"
import { connect } from 'react-redux';



class Groups extends Component {

  componentWillMount() {
    this.fetchTheGroups();
  }

  fetchTheGroups() {
    const header = this.props.token_type + ' ' + this.props.access_token;
    this.props.fetchGroups(header);
  }

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
    return (
      <ScrollView>
        <TouchableOpacity onPress={this.fetchTheGroups.bind(this)}>
          <Text>Load</Text>
        </TouchableOpacity>
        {this.Groups()}
      </ScrollView>
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

const mapStateToProps = state => {
  const { groups } = state.groups;
  const { access_token, token_type } = state.auth;
  return { groups, access_token, token_type };
};

export default connect(mapStateToProps, {fetchGroups})(Groups);