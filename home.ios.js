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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456'
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
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Categories
        </Button>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Daily Quote
        </Button>
      </View>
    );
  }
}



module.exports = Home;
