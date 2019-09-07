import { StyleSheet } from 'react-native';
import * as Color from './colors';
import Typography from './typoraphy';

export default Styles = StyleSheet.create({
    container: {
        backgroundColor: Color.DarkMode.BLACK_000000,
        flex: 1,
    },
    header: {
        ...Typography.darkMode,
        ...Typography.header,
        ...Typography.big
    },
    content: {
        color: Color.DarkMode.WHITE_FFFFFF,
        ...Typography.medium
    },
});