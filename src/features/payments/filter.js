import React from 'react';
import { ScrollView, View } from 'react-native';
import FloatingFilter from './filter/floating_filter';

export default class Filter extends React.Component {

    render() {
        return (
            <View style={{ flex: 10}}>
                <ScrollView>
                    <FloatingFilter title="by category" data={['market', 'stacbuck', 'birthday', 'gambling']} />
                    <FloatingFilter title="by price or below" data={['50', '100', '120', '200', 'more']} />
                    <FloatingFilter title="by days" data={['yesterday', '2 days ago', '3 days ago', '4 days ago', 'a week ago', '2 weeks ago']} />
                    <FloatingFilter title="by month" data={['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']}/>
                    <FloatingFilter title="by year" data={['2019', '2020']} />
                </ScrollView>
            </View>
            
        );
    }
}