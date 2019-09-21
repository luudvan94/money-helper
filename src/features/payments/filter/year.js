import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextFilter from './text_button';
import { Color, Typography } from '../../../styles';

export default class YearFilter extends React.Component {

    render() {
        return(
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>by year</Text>
                </View>
                <View style={styles.container}>
                    <TextFilter style={styles.filter} text="2019" />
                    <TextFilter style={styles.filter} text="2020" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 10,
        paddingHorizontal: 21
    },
    header: {
        color: Color.DarkMode.WHITE_FFFFFF,
        ...Typography.medium
    },
    container: {
        justifyContent: 'flex-start', 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingHorizontal: 20
    },
    filter: {
        marginHorizontal: 2,
        marginVertical: 2
    }
})