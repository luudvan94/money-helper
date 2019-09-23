import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { Color, Typography } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Payment from './payment';

export default class PaymentList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.topBar}>
                    <TouchableOpacity style={styles.trigger} onPress={this.props.onBarClick}>
                        <Text style={styles.title}>recent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filter} onPress={this.props.onFilterClick}>
                        <Ionicons name="ios-color-filter" size={40} color={Color.DarkMode.GREEN_1ABC9C}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.list}>
                    <FlatList 
                    data={[{'key': '1', 'v': 1},{'key': '2', 'v': 1},{'key': '3', 'v': 1},{'key': '4', 'v': 1},{'key': '5', 'v': 1}]}
                    renderItem={(item) => {return <Payment />}}
                    ItemSeparatorComponent={() => {return <View style={styles.separator} />}}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: Color.DarkMode.GRAY_131212,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 20,
    },
    topBar: {
        // flex: 1,
        height: 60,
        flexDirection: 'row',
        marginTop: 10
    },
    trigger: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        color: Color.DarkMode.GREEN_1ABC9C,
        ...Typography.big,
    },
    filter: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    list: {
        flex: 9,
        paddingBottom: 40
    },
    separator: {
        height: 33
    }
});