import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { StyleSheet } from 'react-native'
import { Color, Styles } from '../../styles'

export default class AddText extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.DarkMode.BLACK_000000,
        ...Styles.androidSafeArea
    }
})