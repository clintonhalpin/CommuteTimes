'use strict';


const React = require('react-native')
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
  TouchableHighlight,
  ListView
} = React;

const NavigatorRoutes = require('./src/components/NavigatorRoutes');

// Light the fires and kick the tires
AppRegistry.registerComponent('CommuteTimer', () => NavigatorRoutes);