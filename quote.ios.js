'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TabBarIOS,
  View
} from 'react-native';

import api from './utilities/api';

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#654321',
  },
  backdropView: {
    height: 120,
    width: 320,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  quoteText: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: '#36454f'
  }
});

class Quote extends Component {
  render() {
    const {quote, background, author} = this.props.qod
    return (
      <Image style={styles.container}
      source={{uri: background}}>
        <View style={styles.backdropView}>
          <Text style={styles.quoteText}>
             {quote}{"\n\n"}
             {author}
          </Text>
        </View>
      </Image>
    );
  }
}

module.exports = Quote;
