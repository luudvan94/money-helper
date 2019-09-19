import React from 'react';
import {Text} from 'react-native';
import { Line } from 'react-native-svg';

export default HorizontalLine = (props) => {
    const {y} = props;
    return (
        <Line
            key={ 'zero-axis' }
            x1={ '0%' }
            x2={ '100%' }
            y1={ props.y }
            y2={ props.y }
            stroke={ 'grey' }
            strokeDasharray={ [ 4, 8 ] }
            strokeWidth={ 2 }
        />
    );
    
};