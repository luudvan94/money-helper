import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '../styles';

export default IconButton = (props) => {
    const { name, size = 50, style = {}} = props;

    return (
        <TouchableOpacity style={[ style ]}>
            <Ionicons name={name} size={50} color={Color.DarkMode.WHITE_FFFFFF}/>
        </TouchableOpacity>
    );
};