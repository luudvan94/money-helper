import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, Typography } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Payment extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Ionicons name="ios-beer" size={40} color={Color.DarkMode.RED_E74C3C}/>
                </View>

                <View style={styles.detail}>
                    <Text style={styles.name}>cosco</Text>
                    <Text style={styles.date}>sep 14, 2019 11:00PM</Text>
                    <Text style={styles.description}>my birthday party!!!!!</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.number}>$200</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 112,
        borderRadius: 20,
        padding: 10,
        backgroundColor: Color.DarkMode.BLACK_000000
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 20
    },
    detail: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    name: {
        ...Typography.medium,
        ...Typography.header,
        color: Color.DarkMode.WHITE_FFFFFF,

    },  
    date: {
        ...Typography.smallm,
        color: Color.DarkMode.GRAY_C6C6C6,
    },
    description: {
        ...Typography.small,
        color: Color.DarkMode.GRAY_C6C6C6,
    },  
    price: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        ...Typography.big,
        color: Color.DarkMode.RED_E74C3C
    }
});