'use strict';

var Quote = require('./quote.ios');

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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  welcome: {
    fontFamily: 'Cochin',
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
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
    this.handleArt = this.handleArt.bind(this);
  }

  handleArt(event) {
    event.preventDefault();
    console.log("this is handle press")
    var refs = this.refs
    this.props.openModal(refs)
  }

  render() {
    console.log("props", this.props)
    const {quote} = this.props
    return (

      <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to Inspired! {"\n\n\n"}
      </Text>

      <Button onPress={this.handleArt} style={styles.btn}> Art</Button>

        <Modal style={[styles.modal, styles.modal]} ref={"modal"} swipeToClose={this.props.swipeToClose}>
            <Quote quote={quote}/>
          <Button onPress={this.toggleSwipeToClose} style={styles.btn}>Disable swipeToClose({this.props.swipeToClose ? "true" : "false"})</Button>
        </Modal>
      </View>
    );
  }
}



module.exports = Home;
