import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextFilter from './text_button';
import { Color, Typography } from '../../../styles';

export default class MonthFilter extends React.Component {

    render() {
        return(
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>by month</Text>
                </View>
                <View style={styles.container}>
                    <TextFilter style={styles.filter} text="january" />
                    <TextFilter style={styles.filter} text="february" />
                    <TextFilter style={styles.filter} text="march" />
                    <TextFilter style={styles.filter} text="april" />
                    <TextFilter style={styles.filter} text="may" />
                    <TextFilter style={styles.filter} text="june" />
                    <TextFilter style={styles.filter} text="july" />
                    <TextFilter style={styles.filter} text="august" />
                    <TextFilter style={styles.filter} text="september" />
                    <TextFilter style={styles.filter} text="october" />
                    <TextFilter style={styles.filter} text="november" />
                    <TextFilter style={styles.filter} text="december" />
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