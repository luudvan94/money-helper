import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Color, Typography, Scaling } from '../../../styles';
import { StyleSheet } from 'react-native';

export default class TextButtonFilter extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            itemClicked: false
        };

        this.onItemPressed = this.onItemPressed.bind(this);
    }

    onItemPressed = () => {
        this.setState({ itemClicked: !this.state.itemClicked });
        // this.props.itemPressed();
    }

    render() {
        const {text, style={}} = this.props;

        const itemStyle = this.state.itemClicked ? styles.itemClicked : styles.item;
        const containerStyle = this.state.itemClicked ? styles.containerClicked : styles.container;
        return (
            <TouchableOpacity onPress={this.onItemPressed}>
                <View style={[containerStyle, style]} >
                    <Text style={itemStyle}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }    
    
}

const styles = StyleSheet.create({
    container: { 
        justifyContent: 'center', 
        backgroundColor: Color.DarkMode.DARK_GREEN0A5345,
        borderRadius: Scaling.moderateScale(18),
        height: Scaling.verticalScale(36),
        paddingHorizontal: Scaling.scale(10),
    },
    containerClicked: {
        justifyContent: 'center', 
        backgroundColor: Color.DarkMode.GREEN_1ABC9C,
        borderRadius: Scaling.moderateScale(18),
        height: Scaling.moderateScale(36),
        paddingHorizontal: Scaling.scale(10),
    },
    item: { 
        color: Color.DarkMode.GRAY_C6C6C6, 
        ...Typography.small 
    },
    itemClicked: {
        color: Color.DarkMode.WHITE_FFFFFF, 
        ...Typography.small 
    }

})