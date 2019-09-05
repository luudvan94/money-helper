import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Color, Typography } from '../../styles';
import TextButton from '../../components/button';
import IconButton from '../../components/icon-button';

export default class AddWalletScreen extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView bounces={false} contentContainerStyle={{justifyContent: 'flex-start', width: Dimensions.get('window').width-30}} style={styles.scrollView}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'flex-end' }}>
                        <View style={{ flex: 1 }}>
                            <IconButton name="ios-arrow-round-back" size={50}/>
                        </View>

                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TextButton style={styles.button_done} title="done"/>
                        </View>
                        
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={[Typography.darkMode, styles.header]}>add Wallet Screen</Text>
                    </View>
                    <View style={{ paddingTop: 30 }}>
                        <Text style={[Typography.darkMode, styles.header]}>name</Text>
                        <TextButton style={styles.button} title="add"/>
                    </View>
                    <View style={{ paddingTop: 30 }}>
                        <Text style={[Typography.darkMode, styles.header]}>description</Text>
                        <TextButton style={styles.button} title="add"/>
                    </View>
                    
                    
                </ScrollView>
                
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.DarkMode.BLACK_000000,
        flex: 1,
    },
    scrollView: {
        flex: 1,
        left: 20,
    },

    header: {
        ...Typography.header,
        ...Typography.big
    },
    content: {
        color: Color.DarkMode.WHITE_FFFFFF,
        ...Typography.medium
    },
    button: {
        color: Color.DarkMode.GREEN_1ABC9C
    },
    button_done: {
        color: Color.DarkMode.RED_E74C3C
    }
})