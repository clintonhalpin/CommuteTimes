const React = require('react-native');
const {
	View,
	Text,
	TouchableHighlight
} = React;

class CreateButton extents React.Component {
	render(){
		return(
			<View>
				<TouchableHighlight><Text>{this.props.label}</Text></TouchableHighlight>
			</View>
		)
	}
}

module.exports = Home;