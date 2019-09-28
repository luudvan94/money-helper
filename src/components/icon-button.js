import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '../styles';

export default IconButton = (props) => {
    const { name, size = 50, style = {}, tintColor = Color.DarkMode.WHITE_FFFFFF, onPress = {}} = props;

    return (
        <TouchableOpacity style={[ style ]} onPress={() => onPress}>
            <Ionicons name={name} size={size} color={tintColor}/>
        </TouchableOpacity>
    );
};