import React from 'react';
import { Circle, G, Line, Rect, Text } from 'react-native-svg'

export default Tooltip = ({ x, y, data, index, height }) => {

    var ycor = y(data[index]) - height/2;
    var ycor = ycor < 0 ? height - 50 : 50; 

    var xcor = x(index) - 75/2;
    if (index == 0 ) {
        xcor = 0;
    } else if (index == data.length - 1) {
        xcor = xcor - 75/2
    }

    var xCircle1 = 75/2;
    if (index == 0) {
        xCircle1 = 0;
    } else if (index == data.length - 1) {
        xCircle1 = 75;
    }

    var xCircle2 = 0;
    if (index == 0) {
        xCircle2 = 75/2;
    } else if (index == data.length - 1) {
        xCircle2 = -75/2;
    }
    return (
    <G
        x={ xcor }
        key={ 'tooltip' }
        onPress={ () => console.log('tooltip clicked') }
    >
        <G x={ xCircle1 }>
            <Line
                // x1 =x {xCircle1}
                x1={ xCircle2 }
                y1={ ycor } 
                y2={ y(data[ index ]) }
                stroke={ 'white' }
                strokeWidth={ 2 }
            />
            <Circle
                cy={ y(data[ index ]) }
                r={ 6 }
                stroke={ 'rgb(134, 65, 244)' }
                strokeWidth={ 2 }
                fill={ 'white' }
            />
        </G>
        <G y={ ycor }>
            <Rect
                height={ 40 }
                width={ 75 }
                stroke={ 'grey' }
                fill={ 'white' }
                ry={ 10 }
                rx={ 10 }
            />
            <Text
                x={ 75 / 2 }
                dy={ 20 }
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
                stroke={ 'rgb(134, 65, 244)' }
            >
                { `${data[index]}ºC` }
            </Text>
        </G>
    </G>
    );
    
};