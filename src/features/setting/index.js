import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Color } from '../../styles';

export default class Setting extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.content}>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={{ flex: 1, ...Styles.header }}>setting</Text>
                            {/* <IconButton style={{ flex: 1, alignItems: 'flex-end' }} name="ios-camera" size={50}/> */}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.DarkMode.BLACK_000000,
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    scrollView: {
        flex: 1
    },
    button: {
        color: Color.DarkMode.GREEN_1ABC9C
    },
    button_save: {
        color: Color.DarkMode.GREEN_1ABC9C,
        fontSize: 20
    },
    button_done: {
        color: Color.DarkMode.RED_E74C3C
    },
    content: {
        flex: 10
    }
})