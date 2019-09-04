import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class AddScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', paddingVertical: 5, bottom:0, left:0, right:0 }}>
                <Text>Statistic!</Text>
            </SafeAreaView>
        );
    }
}