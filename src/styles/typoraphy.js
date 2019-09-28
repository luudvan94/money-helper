import { StyleSheet } from 'react-native';
// import { Color, Scaling } from './index';
import Scaling from './scaling';

export default Typography = StyleSheet.create({
    big: {
        fontSize: Scaling.moderateScale(22),
    },
    medium: {
        fontSize: Scaling.moderateScale(18),
    },
    small: {
        fontSize: Scaling.moderateScale(14)
    },
    header: {
        fontWeight: 'bold'
    }
});