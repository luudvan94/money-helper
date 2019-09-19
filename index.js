/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
// import App from './App';
// import WelcomeScreen from './src/features/welcome';
// import MyApp from './src/features/chart';
// import XAxisChart from './src/features/chart/bar_chart/bar_chart';
// import BarChart from './src/features/chart/bar';
// import LineChart from './src/features/chart/line';
// import Pie from './src/features/chart/pie';
import Stack from './src/features/chart/stack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Stack);
