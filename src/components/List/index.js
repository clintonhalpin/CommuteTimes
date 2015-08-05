const React = require('react-native');

const {
	Navigator,
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	ListView
} = React;

class List extends React.Component{
	constructor(props){
		super(props)
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(this.props.recordedCommutes),
		};
	}
	render(){
		return (
		<View style={styles.container}>
			<Text style={styles.label}> Commutes ({this.state.dataSource._cachedRowCount.length} )</Text>
			<ListView 
				style={styles.listView} 
				dataSource={this.state.dataSource} 
				onEndReached={false}
				renderRow={(rowData, idx) => 
				      <View key={idx}>
				        <Text style={styles.row}>{rowData}</Text>
				        <View style={styles.seperator} />
				     </View> }
			/>
		</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
  	flex: 1
  },
  listView: {
  	marginTop: 0
  },
  label: {
  	paddingTop: 8,
  	paddingLeft: 16,
  	color: '#999'
  },
  row: {
    padding: 16,
    backgroundColor: 'white'
  },
  seperator: {
  	height: 1,
  	backgroundColor: '#CCCCCC'
  }
})

module.exports = List;