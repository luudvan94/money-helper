import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '../../styles';
import { View, TextInput, StyleSheet } from 'react-native';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText : ''
        };
    }

    render () {
        
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10}}>
                <View style={{ flex: 1, paddingTop: 6 }}>
                    <Ionicons name="ios-search" size={40} color={Color.DarkMode.GREEN_1ABC9C}/>
                </View>

                <View style={{ flex: 9, flexDirection: 'column', height: 40, justifyContent: 'center' }}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ searchText: text })}
                    value={this.state.searchText}
                    placeholder={"search payments"}
                    placeholderTextColor={Color.DarkMode.GRAY_ACACAC}
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40, 
        borderColor: Color.DarkMode.GREEN_1ABC9C, 
        borderBottomWidth: 1, 
        color: Color.DarkMode.WHITE_FFFFFF, 
        fontSize: 22
    }
});