var React = require('react-native');
var {
    View,
    Text
} = React;

class NullComponent extends React.Component{
    render() {
        return (
            <View>
                <Text>View</Text>
            </View>
        ) 
    }
}

module.exports = NullComponent
