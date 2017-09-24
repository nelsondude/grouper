import React, { Component } from 'react';
import Expo from 'expo'
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
    color: 'white',
    backgroundColor: 'black'
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
              <Lightbox>
                <Stack
                  hideNavBar
                  key="root"
                  titleStyle={{ alignSelf: 'center' }}
                >
                  <Scene key="launch" component={Launch} title="Launch" />
                </Stack>
                <Drawer
                  initial
                  hideNavBar
                  key="drawer"
                  contentComponent={DrawerContent}
                  drawerText="Drawer"
                >
                  {/*
                  Wrapper Scene needed to fix a bug where the tabs would
                  reload as a modal ontop of itself
                */}
                  <Scene hideNavBar>
                    <Tabs
                      key="tabbar"
                      showLabel={false}
                      tabBarStyle={styles.tabBarStyle}
                      activeBackgroundColor="rgba(0,0,0,0.8)"
                      inactiveBackgroundColor="rgba(255, 255, 255, 1)"
                    >
                      <Stack
                        key="tab_1"
                        title="Tab #1"
                        tabBarLabel="TAB #1"
                        navigationBarStyle={styles.navBarStyle}
                        titleStyle={{ color: 'white', alignSelf: 'center' }}
                      >
                        <Scene
                          key="swiper"
                          component={Swiper}
                          title="Swiper"
                          onRight={() => alert('Right button')}
                          rightTitle="Right"

                        />

                      </Stack>

                      <Stack
                        key="tab_2"
                        title="Tab #2"
                        navigationBarStyle={styles.navBarStyle}
                        titleStyle={{ color: 'white', alignSelf: 'center' }}
                      >
                        <Scene
                          key="classes"
                          component={Groups}
                          title="Classes"
                        />
                      </Stack>
                    </Tabs>
                  </Scene>
                </Drawer>
              </Lightbox>
            </Modal>
          </Overlay>
        </Router>
      </Provider>
    );
  }
}