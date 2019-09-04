import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PaymentsScreen from './src/features/payments';
import AddScreen from './src/features/add';
import StatisticScreen from './src/features/statistic';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as screenNames from './src/screen_names';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from './src/styles';

const TabNavigator = createBottomTabNavigator({
  [screenNames.payments]: PaymentsScreen,
  [screenNames.add]: AddScreen,
  [screenNames.statistic]: StatisticScreen
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === screenNames.payments) {
        iconName = `ios-list`;
        
      } else if (routeName === screenNames.add) {
        iconName = `ios-add-circle`;
      } else if (routeName === screenNames.statistic) {
        iconName = `ios-stats`;
      }

      return <IconComponent name={iconName} size={35} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: Color.DarkMode.GREEN_1ABC9C,
    inactiveTintColor: Color.DarkMode.GRAY_ACACAC,
    tabStyle: {
      backgroundColor: Color.DarkMode.BLACK_000000,
      flex: 1,
      bottom: 30,
      height: 80
    },
    safeAreaInset: {bottom: 'never', top: 'never'},
    showLabel: false
  }
});


export default App = createAppContainer(TabNavigator);