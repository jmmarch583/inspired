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

import apiKey from './api';
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

  openModal(info) {
    info.modal.open();
  }
  toggleDisable() {
      this.setState({isDisabled: !this.state.isDisabled});
    }

    toggleSwipeToClose() {
      this.setState({swipeToClose: !this.state.swipeToClose});
    }


    // renderList() {
    //   var list = [];
    //
    //   for (var i=0;i<50;i++) {
    //     list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
    //   }
    //   return list;
    // }
      getQuote(category){
        var url = "https://quotes.rest/qod?category=" + category;
        debugger;
        return fetch(url, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-TheySaidSo-Api-Secret': apiKey,
          }
        })
        .then((res) => res.json())
      };

      getQuoteofDay(){
        var url = "https://quotes.rest/qod.json?maxlength=100";
        return fetch(url, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-TheySaidSo-Api-Secret': apiKey,
          }
        })
        .then((res) => res.json())
      };

  componentDidMount(){
    var art = "art"
    var response = this.getQuote(art)
    .then((resJson) => {
      this.setState({categoryQuote: resJson.contents.quotes[0]})
    })
    .catch((error) => {
      console.log("these are your errors", error);
    });
    var response = this.getQuoteofDay()
    .then((resJson) => {
      this.setState({qod: resJson.contents.quotes[0]})
    })
    .catch((error) => {
      console.log("these are your errors", error);
    });

  }

  render() {
    return (
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
              <Home openModal={this.openModal} toggleDisable={this.toggleDisable} toggleSwipeToClose={this.toggleSwipeToClose}
              quote={this.state.qod}/>
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
                <Quote quote={this.state.qod}/>
                </Icon.TabBarItemIOS>
            </TabBarIOS>
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
