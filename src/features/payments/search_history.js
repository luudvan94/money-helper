import React from 'react';
import { View, FlatList, Text, TouchableWithoutFeedback } from 'react-native';
import { Color, Typography, Scaling } from '../../styles';
import TextButtonFilter from './filter/text_button';

export default SearchingHistory = (props) => {
    const { onItemClicked = {}, data } = props;
    return (
        <View style={{ paddingHorizontal: Scaling.scale(20)}}>
            <FlatList 
            data={data}
            renderItem={(item) => {
                return (
                    <View style={{ height: Scaling.verticalScale(70), justifyContent: 'flex-end' }}>
                        <TouchableWithoutFeedback onPress={() => {onItemClicked(item)}}>
                            <Text style={{ color: Color.DarkMode.GRAY_ACACAC, ...Typography.small, paddingBottom: Scaling.verticalScale(5) }}>
                                This is a Searching History
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>    
                );
            }}
            ItemSeparatorComponent={() => {
                return (
                    <View style={{ backgroundColor: Color.DarkMode.GRAY_131212, height: Scaling.verticalScale(1)}}></View>
                );
            }}
            />
        </View>
    );
}