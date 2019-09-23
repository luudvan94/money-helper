
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import React from 'react';
import SearchBar from './search_bar';
import PaymentList from './payment_list';
import SearchingHistory from './search_history';
import Filter from './filter';

export default class PaymentsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundMode: false,
            showSearching: true
        }

        this.toggleSearchingHistory = this.toggleSearchingHistory.bind(this);
        this.filterButtonClicked = this.filterButtonClicked.bind(this);
        this.onItemClicked = this.onItemClicked.bind(this);
    }

    toggleSearchingHistory () {
        this.setState({
            backgroundMode: !this.state.backgroundMode,
            showSearching: true,
        });
    }

    filterButtonClicked() {
        this.setState({ 
            backgroundMode: !this.state.backgroundMode,
            showSearching: false 
        });
    }

    onItemClicked(item) {
        this.setState({
            backgroundMode: !this.state.backgroundMode,
            showSearching: true
        });
    }

    render() {
        var paymentListStyle = this.state.backgroundMode ? styles.invisible_paymentList : styles.visible_paymentList;

        var modeContent = !this.state.showSearching && this.state.backgroundMode ? <Filter /> : (<SearchingHistory 
        data={[{'key': '1', 'v': 1},{'key': '2', 'v': 1},{'key': '3', 'v': 1},{'key': '4', 'v': 1},{'key': '5', 'v': 1}]} 
        onItemClicked={this.onItemClicked}
        />);

        return (
            <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
                <SearchBar style={{ flex: 1 }}/>

                <View style={{ flex: 9 }}>
                    <View style={styles.filter}>
                        {modeContent}
                    </View>

                    <View style={paymentListStyle}>
                        <PaymentList onBarClick={this.toggleSearchingHistory} onFilterClick={this.filterButtonClicked}/>
                    </View>
                </View>
                
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    filter: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom:0
    },
    visible_paymentList: {
        position: 'absolute',
        // top: Dimensions.get("window").height - 270,
        top: 0,
        right: 0,
        left: 0,
        bottom:0
    },
    invisible_paymentList: {
        position: 'absolute',
        top: Dimensions.get("window").height - 270,
        right: 0,
        left: 0,
        bottom:0
    }
})