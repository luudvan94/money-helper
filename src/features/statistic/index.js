import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Pie from '../chart/pie';
import BarChart from '../chart/bar';
import LineChart from '../chart/line'

export default class StatisticScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black'}}>
                
                <Pie />
                {/* <BarChart /> */}
                {/* <LineChart /> */}

                {/* <ScrollView style={{ flex: 1 }}>
                    <Pie />
                    <BarChart />
                </ScrollView> */}
            </SafeAreaView>
        );
    }
}