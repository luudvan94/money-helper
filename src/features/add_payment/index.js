import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Color, Typography, Styles } from '../../styles';
import IconButton from '../../components/icon-button';
import TextButton from '../../components/button';

export default class AddPayment extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.topBar}>

                        <View style={{ flex: 2 }}>
                            <TextButton style={styles.button_save} title="save as template" />
                        </View>

                        <View style={{ flex: 1 }}>
                            <TextButton style={styles.button_done} title="done"/>
                        </View>
                            
                    </View>

                    <View style={styles.content}>
                        <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', alignSelf: 'flex-end' }}>
                            <Text style={{ flex: 1, ...Styles.header }}>add payment</Text>
                            {/* <IconButton style={{ flex: 1, alignItems: 'flex-end' }} name="ios-camera" size={50}/> */}
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={Styles.header}>name</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={Styles.header}>amount</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={Styles.header}>category</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={Styles.header}>description</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={Styles.header}>time</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={Styles.header}>location</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={Styles.header}>photo</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                    </View>
                </ScrollView>


            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.DarkMode.BLACK_000000,
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    scrollView: {
        flex: 1
    },
    topBar: { 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignSelf: 'flex-end' 
    },
    button: {
        color: Color.DarkMode.GREEN_1ABC9C
    },
    button_save: {
        color: Color.DarkMode.GREEN_1ABC9C,
        fontSize: 20
    },
    button_done: {
        color: Color.DarkMode.RED_E74C3C
    },
    content: {
        flex: 9
    }
})