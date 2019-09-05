/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
// import App from './App';
import AddWalletScreen from './src/features/add_wallet';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AddWalletScreen);
