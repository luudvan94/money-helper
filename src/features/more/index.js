import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class MoreScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
                <Text>More!</Text>
            </SafeAreaView>
        );
    }
}