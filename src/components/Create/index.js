const React = require('react-native');
const NavigationBar = require('react-native-navbar');
const NullComponent = require('./../NullComponent.js');

const {
	Navigator,
	View,
	Text,
	StyleSheet,
	TouchableHighlight
} = React;

class Home extends React.Component{
	render(){
		return(
			<View>
				<Text style={styles.text}>Create View</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  text: {
  	textAlign: 'center',
  	padding: 20,
  	fontSize: 18
  }
});


module.exports = Home;