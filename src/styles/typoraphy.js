import { StyleSheet } from 'react-native';
import { Color } from './index';

export default Typography = StyleSheet.create({
    darkMode: {
        color: Color.DarkMode.WHITE_FFFFFF
    },
    lightMode: {
        color: Color.LightMode.WHITE_FFFFFF
    },
    big: {
        fontSize: 30,
        fontWeight: 'bold', 
    },
    medium: {
        fontSize: 20,
    },
    small: {
        fontSize: 15
    },
    header: {
        fontWeight: 'bold'
    }
});