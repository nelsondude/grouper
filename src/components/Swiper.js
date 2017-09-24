import React, { Component } from 'react'
import { AuthSession } from 'expo';
import { View, Dimensions, Alert } from 'react-native';
import { Card, SwipeDeck } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "./actions/globals";


class Swiper extends Component {
  renderCard(card) {
    return (
      <Card
        key={card.id}
        containerStyle={{borderRadius: 10, width: SCREEN_WIDTH * 0.92, height: SCREEN_HEIGHT - 165}}
        featuredTitle={`${card.text}, ${card.age}`}
        featuredTitleStyle={{position: 'absolute', left: 15, bottom: 10, fontSize: 30 }}
        image={{ uri: card.uri }}
        imageStyle={{borderRadius: 10, width: SCREEN_WIDTH * 0.915, height: SCREEN_HEIGHT - 165}}
      />
    )
  }

  renderNoMoreCards() {
    return (
      <Card
        containerStyle={{borderRadius: 10, width: SCREEN_WIDTH * 0.92, height: SCREEN_HEIGHT - 165}}
        featuredTitle="No more cards"
        featuredTitleStyle={{fontSize: 25}}
        image={{ uri: 'https://i.imgflip.com/1j2oed.jpg' }}
        imageStyle={{borderRadius: 10, width: SCREEN_WIDTH * 0.915, height: SCREEN_HEIGHT - 165}}
      />
    )
  }

  onSwipeRight(card) {
    console.log("Card liked: " + card.text);
  }

  onSwipeLeft(card) {
    console.log("Card disliked: " + card.text);
  }


  logIn() {
    this.props.loginUser();
  };


  render() {
    const DATA = [
      { id: 1, text: 'Amanda', age: 28, uri: 'http://f9view.com/wp-content/uploads/2013/10/American-Beautiful-Girls-Wallpapers-Hollywood-Celebs-1920x1200px.jpg' },
      { id: 2, text: 'Emma', age: 29, uri: 'https://i.imgur.com/FHxVpN4.jpg' },
      { id: 3, text: 'Scarlett', age: 25, uri: 'https://i.ytimg.com/vi/GOJZ5TIlc3M/maxresdefault.jpg' },
      { id: 4, text: 'Keira', age: 27, uri: 'http://www.bdprimeit.com/wp-content/uploads/Keira-Knightley-Most-beautiful-Hollywood-actress.jpg' },
      { id: 5, text: 'Ashley', age: 30, uri: 'https://s-media-cache-ak0.pinimg.com/736x/4c/89/67/4c8967fac1822eeddf09670565430fd5.jpg' },
      { id: 6, text: 'Jennifer', age: 24, uri: 'https://2.bp.blogspot.com/-Vy0NVWhQfKo/Ubma2Mx2YTI/AAAAAAAAH3s/LC_u8LRfm8o/s1600/aimee-teegarden-04.jpg' },
      { id: 7, text: 'Sarah', age: 28, uri: 'https://s-media-cache-ak0.pinimg.com/736x/41/75/26/4175268906d97492e4a3175eab95c0f5.jpg' },
    ];

    return (
      <View style={styles.containerStyle}>
        <SwipeDeck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={this.onSwipeRight}
          onSwipeLeft={this.onSwipeLeft}
        />
        <Button title="Login Expo FB" onPress={this.logIn.bind(this)}/>
      </View>
    )
  }
}

styles = {
  containerStyle: {
    flex: 1
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps, {loginUser})(Swiper);