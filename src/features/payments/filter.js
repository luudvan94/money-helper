import React from 'react';
import { ScrollView, View } from 'react-native';
import MonthFilter from './filter/month';
import YearFilter from './filter/year';

export default class Filter extends React.Component {

    render() {
        return (
            <View style={{ flex: 1}}>
                <ScrollView>
                    <MonthFilter />
                    <YearFilter />
                </ScrollView>
            </View>
            
        );
    }
}