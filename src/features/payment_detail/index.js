import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Color, Typography } from '../../styles';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import IconButton from '../../components/icon-button';

export default class PaymentDetail extends React.Component {

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.back}>
                    <IconButton name="ios-arrow-round-back" size={50}/>
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-start'}}>
                                <Text style={[styles.text, styles.name]}>Starbuck</Text>
                                <Text style={[styles.text, styles.normal_info, styles.category]}> - birthday</Text>
                            </View>
                            <Text style={[styles.text, styles.normal_info]}>95th oak lawn</Text>
                            <Text style={[styles.text, styles.normal_info]}>10am</Text>
                            <Text style={[styles.text, styles.normal_info]}>cash</Text>
                        </View>
                        <View style={styles.amountView}>
                            <Text style={[styles.text, styles.amount]}>$10.25</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>this is description....</Text>
                        </View>

                    </ScrollView>
                </View>
                
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: Color.DarkMode.BLACK_000000, 
        flex: 1, 
        paddingHorizontal: 20 
    },
    back: {
        flex: 1
    },
    content: {
        flex: 9
    },
    text: {
        ...Typography.medium,
        color: Color.DarkMode.WHITE_FFFFFF
    },
    name: {
        ...Typography.big
    },
    normal_info: {
        ...Typography.medium
    },
    category: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    amountView: {
        paddingVertical: 30
    },
    amount: {
        color: Color.DarkMode.GREEN_1ABC9C,
        fontSize: 50,
        fontWeight: 'bold'
    }
})