import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class StatisticScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
                <Text>Statistic!</Text>
            </SafeAreaView>
        );
    }
}