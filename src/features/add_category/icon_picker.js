import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color, Styles, Scaling } from '../../styles';

export default IconPicker = (props = {}) => {
    const { pickedIcon, onPress } = props;
    const data = [
        'contacts',
        'fitness',
        'jet',
        'mail',
        'pizza',
        'tennisball',
        'basketball',
        'bicycle',
        'cart',
        'bed',
        'flower',
        'finger-print',
        'cut',
        'hammer',
        'medal'
    ];
    const dataComponent = data.map((icon, _) => {
        const hightColor = Color.DarkMode.GREEN_1ABC9C;
        console.log(pickedIcon);
        const tintColor = icon == pickedIcon ? hightColor : Color.DarkMode.WHITE_FFFFFF;
        return (
            <TouchableHighlight key={icon} style={styles.icon} onPress={() => props.onPress(icon)}>
                {/* <IconButton name={"ios-" + icon} size={Scaling.moderateScale(30)} tintColor={tintColor}/> */}
                <Ionicons name={"ios-" + icon} size={Scaling.moderateScale(40)} color={tintColor}/>
            </TouchableHighlight>
        );
    });

    return (
        <View style={styles.container}>
            {dataComponent}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: Scaling.verticalScale(10)
    },
    icon: {
        paddingRight: Scaling.scale(10)
    }
})
