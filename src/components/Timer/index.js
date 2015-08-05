const React = require('react-native');

const {
	Navigator,
	View,
	Text,
	StyleSheet,
	TouchableHighlight
} = React;

class Timer extends React.Component{
	render(){
		if(!this.props.commuting) {
			return(
				<View style={[styles.container]}>
					<Text style={[styles.textCenter, styles.textPrimary]}>00:03:01:02</Text>
					<Text style={[styles.textCenter, styles.textSecondary]}>Average commute duration</Text>
				</View>
			)
		} else {
			return(
				<View style={[styles.container, styles.containerGreen]}>
					<Text style={[styles.textCenter, styles.textPrimary]}>00:00:00:01</Text>
					<Text style={[styles.textCenter, styles.textSecondary]}>Current commute duration</Text>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 80,
    paddingBottom: 80,
    backgroundColor: '#4F81F1'
  },
  containerGreen: {
  	backgroundColor: '#7ED321'
  },
  textCenter: {
  	textAlign: 'center'
  },
  textSecondary: {
  	fontSize: 16,
  	color: 'white'
  },
  textPrimary: {
  	fontSize: 24,
  	color: 'white'
  }
})

module.exports = Timer;