import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Color, Typography, Styles, Scaling } from '../../styles';
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
                            <Text style={{ flex: 1, ...styles.text }}>add payment</Text>
                            {/* <IconButton style={{ flex: 1, alignItems: 'flex-end' }} name="ios-camera" size={50}/> */}
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={styles.text}>name</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={styles.text}>amount</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={styles.text}>category</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={styles.text}>description</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={styles.text}>time</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={styles.text}>location</Text>
                            <TextButton style={styles.button} title="add"/>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <Text style={styles.text}>photo</Text>
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
        paddingHorizontal: Scaling.verticalScale(20),
        paddingBottom: Scaling.verticalScale(30),
        ...Styles.androidSafeArea
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
    text: {
        ...Typography.big,
        color: Color.DarkMode.WHITE_FFFFFF
    },  
    button: {
        color: Color.DarkMode.GREEN_1ABC9C
    },
    button_save: {
        color: Color.DarkMode.GREEN_1ABC9C,
        ...Typography.big
    },
    button_done: {
        color: Color.DarkMode.RED_E74C3C
    },
    content: {
        flex: 9
    }
})