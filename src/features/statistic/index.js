import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Pie from '../chart/pie';
import BarChart from '../chart/bar';
import LineChart from '../chart/line'
import { Styles } from '../../styles';

export default class StatisticScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                
                <Pie style={styles.chart} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        ...Styles.androidSafeArea
    },
    chart: {
        flex: 1,
    }
})
