import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography, Color } from '../../../styles';
import TextButton from '../../../components/button';

export default class LabelDescription extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.info}>123 times of $1234</Text>
                <TextButton title="detail" style={{ alignSelf: 'center', color: Color.DarkMode.GREEN_1ABC9C }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.15,
        backgroundColor: 'black'
    },
    info: {
        color: Color.DarkMode.WHITE_FFFFFF,
        ...Typography.medium,
        alignSelf: 'center'
    }
});