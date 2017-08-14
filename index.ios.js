// code for ios application 

// import a library to help create a component
// import - es6 method to import libraries 
import React from 'react';
// import destructoring
import { AppRegistry, View } from 'react-native';
// import components
// ./ start in the current directory(albums directory in this case)
// if its a js file, we do not have to put .js at the end
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// create a componenet
// component is a javaScript function that returns some amount of JSX
// JSX is a dialect of javascript that tells react native what content to render on the screen
const App = () => (
  // component nesting
  // passing 'props' inside components
  // pass in a property called headerText
  // flex: 1 - > expand component to fit the entire container of the content device
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );


// render it to the device
// in any react-native application, we need to register at least one component
// only the root component uses 'appRegistry'
// we pass a function to return the first component to render to our application
AppRegistry.registerComponent('albums', () => App);
