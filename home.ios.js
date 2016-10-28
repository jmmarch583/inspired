'use strict';

import React, { Component } from 'react';
import Button from 'react-native-button';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TabBarIOS,
  View
} from 'react-native';

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  }
});

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }

  _handlePress() {
    console.log('Pressed!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Welcome to your React Native Start Component!
        </Text>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Categories
        </Button>
      </View>
    );
  }
}



module.exports = Home;
