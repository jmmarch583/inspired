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
    backgroundColor: '#654321',
  }
});

class Quote extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          This is a quote
        </Text>
      </View>
    );
  }
}

module.exports = Quote;
