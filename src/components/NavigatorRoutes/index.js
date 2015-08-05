const React = require('react-native');
const {
  StyleSheet,
  View,
  Navigator
} = React;

const NavigationBar = require('react-native-navbar');
const Home = require('./../Home');

class NavigatorRoutes extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        commuting: false
      }
    }

    renderScene(route, navigator) {
        let Component = route.component;
        let navBar = route.navigationBar;

        if (navBar) {
          navBar = React.addons.cloneWithProps(navBar, {
            navigator: navigator,
            route: route
          });
        }

        return (
            <View style={styles.container}>
            {navBar}
            <Component route={route} navigator={navigator} />
            </View>
        )
    }

    render() {  
        return(
        <Navigator
            ref={(navigator) => { this.navigator = navigator; }}
            renderScene={this.renderScene}
            configureScene={(route) => {
              if (route.sceneConfig) {
                return route.sceneConfig;
              }
              return Navigator.SceneConfigs.FloatFromBottom;
            }}               
            initialRoute={{
              navigationBar: (
                <NavigationBar 
                    title="Commute Length"
                    titleColor={'white'}
                    nextTitle={"More"}
                    backgroundColor={"#4F81F1"}
                    onNext={(navigator) => this.navigator.pop()}
                    style={styles.navigator}
                    statusBar={'lightContent'}
                />
              ),
              component: Home,
            }} 
        />
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigator: {
    borderBottomColor: '#4F81F1',
  }
});

module.exports = NavigatorRoutes;