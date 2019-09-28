import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextButtonFilter from './text_button';
import { Color, Typography, Scaling } from '../../../styles';

export default class FloatingFilter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { data, title,  onItemPressed = {} } = this.props;
        
        const dataComponent = data.map(item => { 
            return (
                <TextButtonFilter style={styles.filter} text={item} />);
        });

        return(
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>{title}</Text>
                </View>
                <View style={styles.container}>
                    {dataComponent}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: Scaling.verticalScale(10),
        paddingHorizontal: Scaling.scale(20)
    },
    header: {
        color: Color.DarkMode.GRAY_C6C6C6,
        ...Typography.medium
    },
    container: {
        justifyContent: 'flex-start', 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingHorizontal: Scaling.scale(20)
    },
    filter: {
        marginHorizontal: Scaling.scale(2),
        marginVertical: Scaling.verticalScale(2)
    }
})