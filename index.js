/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
// import App from './App';
// import WelcomeScreen from './src/features/welcome';
import MyApp from './src/features/chart';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyApp);
