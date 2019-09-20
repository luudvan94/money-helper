import { SafeAreaView } from 'react-navigation';
import React from 'react';
import AreaStackWithAxisExample from './stack';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Color } from '../../../styles';

export default class Stack extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data : [
                {
                    month: new Date(2015, 0, 1),
                    apples: 0,
                    bananas: 0,
                    cherries: 0,
                    dates: 0,
                },
                {
                    month: new Date(2015, 1, 1),
                    apples: 0,
                    bananas: 0,
                    cherries: 0,
                    dates: 0,
                },
                {
                    month: new Date(2015, 2, 1),
                    apples: 0,
                    bananas: 0,
                    cherries: 0,
                    dates: 0,
                },
                {
                    month: new Date(2015, 3, 1),
                    apples: 0,
                    bananas: 0,
                    cherries: 0,
                    dates: 0,
                },
            ]
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange = (value) => {
        this.setState({index: value});
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.DarkMode.BLACK_000000}}>
                <View style={{ flex: 2 }}>
                    <Text style={styles.description}>adasd</Text>
                </View>
                <AreaStackWithAxisExample/>
                <View style={{ flex: 3 }}>
                    <Text style={styles.description}></Text>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
                <Slider
                    minimumValue={0}
                    maximumValue={5}
                    thumbTintColor={Color.DarkMode.GREEN_1ABC9C}
                    maximumTrackTintColor={Color.DarkMode.WHITE_FFFFFF}
                    minimumTrackTintColor={Color.DarkMode.GREEN_1ABC9C}
                    step={1}
                    onValueChange={this.onValueChange}
                />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        color: Color.DarkMode.WHITE_FFFFFF,
        ...Typography.medium
    }
});