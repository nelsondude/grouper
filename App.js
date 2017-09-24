import React, { Component } from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from "./src/components/Swiper";
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
// import firebase from 'firebase';

import Launch from "./src/components/Launch";
import DrawerContent from "./src/components/DrawerContent";
import Groups from "./src/components/Groups";
import Home from "./src/components/Home";
import Popup from "./src/components/Popup";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/components/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
  navBarStyle: {
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 36
  }
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const config = {
  apiKey: "AIzaSyCjCOLpEok9tNIBXTgf6IcbLxp1Mbxb7Eg",
  authDomain: "mhacks-grouper.firebaseapp.com",
  databaseURL: "https://mhacks-grouper.firebaseio.com",
  projectId: "mhacks-grouper",
  storageBucket: "mhacks-grouper.appspot.com",
  messagingSenderId: "338540138661"
};
// firebase.initializeApp(config);


export default class App extends Component {
  store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  render() {
    return (
      <Provider store={this.store}>
        <Router
          createReducer={reducerCreate}
          getSceneStyle={getSceneStyle}
        >
          <Overlay>
            <Modal
              hideNavBar
              transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
            >
              <Scene
               key="root"
               titleStyle={{ alignSelf: 'center' }}
              >
                <Scene hideNavBar key="launch" component={Launch} title="Launch" />
                <Scene
                     key="classes"
                     component={Groups}
                     title="Classes"
                     back={false}
                     onRight={() => {Actions.joinModal()}}
                     rightTitle="+"
                     navigationBarStyle={styles.navBarStyle}/>
                <Scene
                 key="joinModal"
                 component={Popup}/>
              </Scene>
            </Modal>
          </Overlay>
        </Router>
      </Provider>
    );
  }
}