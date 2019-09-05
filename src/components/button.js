import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Typography } from '../styles';


export default TextButton = (props) => {
    const { title, style = {}} = props;

    return (
        <TouchableOpacity style={[ styles.container]}>
            <Text style={[ Typography.big, Typography.darkMode, style ]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
});