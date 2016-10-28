'use strict';

import Button from 'react-native-button';
import Modal from 'react-native-modalbox';

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
<<<<<<< b6a16cb192a8f5e794c4cfdad235841f8b332d34
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456'
=======
  wrapper: {
   paddingTop: 50,
   flex: 1
  },
   modal: {
     justifyContent: 'center',
     alignItems: 'center'
   },
   btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },
  text: {
    color: "black",
    fontSize: 22
  }
});

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    this.props.buttonTouch(this.refs)
  }

  render() {
    return (

      <View style={styles.wrapper}>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Categories
        </Button>
      <Button onPress={this.props.handlePress} style={styles.btn}>Basic modal</Button>
        <Text style={styles.description}>
          Welcome to Inspired!
        </Text>
        <Modal style={[styles.modal, styles.modal]} ref={"modal"} swipeToClose={this.props.swipeToClose}>
          <Text style={styles.text}>Basic modal</Text>
          <Button onPress={this.toggleSwipeToClose} style={styles.btn}>Disable swipeToClose({this.props.swipeToClose ? "true" : "false"})</Button>
        </Modal>
      </View>
    );
  }
}



module.exports = Home;
