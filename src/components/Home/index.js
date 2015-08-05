const React = require('react-native');
const NavigationBar = require('react-native-navbar');
const Create = require('./../Create');

const {
	Navigator,
	View,
	Text,
	StyleSheet,
	TouchableHighlight
} = React;

class Home extends React.Component{
	openModal(){
		this.props.navigator.push({
			sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
		    navigationBar: <NavigationBar title="Create New" nextTitle="Save" prevTitle="Cancel" />,
		    component: Create
		})
	}
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Main Graphic + List View</Text>
				<View>
					<TouchableHighlight style={styles.button} onPress={this.openModal.bind(this)}><Text style={styles.createButtonText}>Create</Text></TouchableHighlight>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  
  container: {
  	flex: 1,
    padding: 16
  },
  
  text: {
  	textAlign: 'center',
  	padding: 20,
  	fontSize: 18
  },
  
  createButtonText: {
  	padding: 8,
  	color: 'white',
  	fontSize: 16,
  	textAlign: 'center',
  },

  button: {
    backgroundColor: "#4585F1",
    margin: 10,
    borderRadius: 6,
    bottom: 10,
    right: 0,
    left: 0
  },

});


module.exports = Home;