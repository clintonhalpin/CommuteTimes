const React = require('react-native');
const NavigationBar = require('react-native-navbar');
const Create = require('./../Create');
const Timer = require('./../Timer');
const List = require('./../List');

const {
	Navigator,
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
  ListView
} = React;

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      commuting: false,
      recordedCommutes: ['1','2','3']
    }
  }
	startTimer(){
		this.setState({
      commuting: !this.state.commuting,
      recordedCommutes: this.state.recordedCommutes.push(4)
    })
	}
	render(){
		return(
			<View style={styles.container}>
				<Timer commuting={this.state.commuting} />
        <List style={styles.listView} recordedCommutes={this.state.recordedCommutes} />
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this.startTimer.bind(this)}><Text style={styles.createButtonText}>+</Text></TouchableHighlight>
        </View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  
  container: {
  	flex: 2,
    padding: 0,
    backgroundColor: '#CCC'
  },

  listView: {
    height: 100,
    backgroundColor: 'yellow',
    alignItems: 'stretch'
  },
  
  buttonContainer: {
  	flex: 1,
  },

  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 16,
    paddingTop: 2,
    paddingBottom: 8,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "#4585F1",
  },

  createButtonText: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center'
  },

});


module.exports = Home;