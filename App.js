import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import { Font } from 'expo';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Header} from 'react-native-elements';
import store from './store';
import MonthList from './screens/MonthList';
import Month from './screens/Month';
import Form from './screens/Form';



export default class App extends React.Component {

  render() {
    const MainNavigator = TabNavigator({
      monthlist: { screen: MonthList },
      form: {screen: Form},
      month: {screen: Month}
    },{
      navigationOptions: {
        tabBarVisible:  false
      },
      swipeEnabled: false,
      tabBarPosition: 'bottom',
      lazy: true,
    });
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0
  },
});
