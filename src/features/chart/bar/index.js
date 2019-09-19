import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import { Color, Typography } from '../../../styles';
import XAxisChart from './bar_chart';
import Slider from '@react-native-community/slider';

export default class BarChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [10,12,15,20,8,7],
            index: 1
        };

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange= (value) => {
        this.setState({index: value});
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.DarkMode.BLACK_000000}}>
                <View style={{ flex: 2 }}>

                </View>
                <XAxisChart 
                    data={this.state.data}
                    index={this.state.index}
                    fillColor={Color.DarkMode.GREEN_1ABC9C}
                    hightlightColor={Color.DarkMode.RED_E74C3C}
                />
                <View style={{ flex: 3 }}>
                    <Text style={styles.description}>{this.state.index}</Text>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
                <Slider
                    minimumValue={1}
                    maximumValue={this.state.data.length}
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