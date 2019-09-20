
import { View, Text } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import React from 'react';
import SearchBar from './search_bar';
import PaymentList from './payment_list';

export default class PaymentsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
                <SearchBar style={{ flex: 1 }}/>
                <PaymentList style={{ flex: 9 }} />
            </SafeAreaView>
        );
    }
}