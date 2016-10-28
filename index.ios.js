'use strict';
var Home = require('./home.ios');
var Quote = require('./quote.ios');
var window  = require('Dimensions').get('window');

import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TabBarIOS,
  View
} from 'react-native';

import api from './api';
import qod from './api';
import Icon from 'react-native-vector-icons/FontAwesome'

class Inspired extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: '',
      qod: [],
      categoryQuote: [],
      selectedTab: 'home',
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    }
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.refs.modal.open();
  }
  toggleDisable() {
      this.setState({isDisabled: !this.state.isDisabled});
    }

    toggleSwipeToClose() {
      this.setState({swipeToClose: !this.state.swipeToClose});
    }

    onClose() {
      console.log('Modal just closed');
    }

    onOpen() {
      console.log('Modal just openned');
    }

    onClosingState(state) {
      console.log('the open/close of the swipeToClose just changed');
    }

    renderList() {
      var list = [];

      for (var i=0;i<50;i++) {
        list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
      }

      return list;
    }

  componentDidMount(){
    var response = qod.getQuoteofDay()
    .then((resJson) => {
      this.setState({qod: resJson.contents.quotes[0]})
    })
    .catch((error) => {
      console.log("these are your errors",error);
    });
  }

  render() {
    const {quote, author, background} = this.state.qod
    console.log(this.refs)
    return (
      <View style={styles.wrapper}>
        <Button onPress={this.openModal} style={styles.btn}>Basic modal</Button>
        <TabBarIOS selectedTab={this.state.selectedTab}>
          <Icon.TabBarItemIOS
            title="Home"
            iconName="home"
            selectedIconName="home"
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                  selectedTab: 'home',
              });
            }}>
              <Home/>
            </Icon.TabBarItemIOS>
            <Icon.TabBarItemIOS
              title="Quote of the Day"
              iconName="sun-o"
              selectedIconName="sun-o"
              selected={this.state.selectedTab === 'qod'}
              onPress={() => {
                  this.setState({
                    selectedTab: 'qod',
                  });
              }}>
                <Quote qod={this.state.qod}/>
                </Icon.TabBarItemIOS>
            </TabBarIOS>
            <Modal style={[styles.modal, styles.modal]} ref={"modal"} swipeToClose={this.state.swipeToClose} onClosed={this.onClose} onOpened={this.onOpen} onClosingState={this.onClosingState}>
              <Text style={styles.text}>Basic modal</Text>
              <Button onPress={this.toggleSwipeToClose} style={styles.btn}>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Button>
            </Modal>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
},
  container: {
    flex: 1,
    height: 150
  },
  welcome: {
    fontFamily: 'Cochin',
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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

AppRegistry.registerComponent('Inspired', () => Inspired);
