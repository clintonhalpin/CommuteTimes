const React = require('react-native');
const NavigationBar = require('react-native-navbar');
const NullComponent = require('./../NullComponent.js');

const {
	Navigator,
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TextInput
} = React;

class Home extends React.Component{
	render(){
		return(
			<View>
				<Text>Location</Text>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					value={"Wow"}
				/>
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