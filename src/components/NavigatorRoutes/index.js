const React = require('react-native');
const {
  StyleSheet,
  View,
  Navigator
} = React;

const NavigationBar = require('react-native-navbar');
const Home = require('./../Home');

class NavigatorRoutes extends React.Component{

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
                    title="My Commute Times"
                    nextTitle="Settings"
                    onNext={(navigator) => this.navigator.pop()}
                    style={styles.navigator}
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
  }
});

module.exports = NavigatorRoutes;