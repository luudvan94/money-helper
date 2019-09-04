import React from 'react';
import PaymentsScreen from './src/features/payments';
import AddScreen from './src/features/add';
import StatisticScreen from './src/features/statistic';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as screenNames from './src/screen_names';

const TabNavigator = createBottomTabNavigator({
  [screenNames.payments]: PaymentsScreen,
  [screenNames.add]: AddScreen,
  [screenNames.statistic]: StatisticScreen
});

export default App = createAppContainer(TabNavigator);