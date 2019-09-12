import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Spacing, Color, Typography, Styles } from '../../styles';
import TextButton from '../../components/button';
import IconButton from '../../components/icon-button';

export default class WelcomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={[ Styles.container, Spacing.paddingLeft ]}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <Text style={Styles.header}>welcome back!</Text>
                        <Text style={Styles.header}>luu</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-start', paddingBottom: 10 }}>
                        <Text style={Styles.header}>your wallet</Text>
                    </View>
                    <View style={{ flex: 3}}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'flex-end' }}>
                            <View style={{ flex: 1 }}>
                                <TextButton style={{ color: Color.DarkMode.GREEN_1ABC9C }} title="my wallet"/>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
                                <IconButton name="ios-arrow-round-forward" size={70}/>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}