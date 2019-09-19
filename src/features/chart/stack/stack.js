import React from 'react'
import { StackedAreaChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { View } from 'react-native'
import { throwStatement } from '@babel/types';

class AreaStackWithAxisExample extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            data : [
                {
                    month: new Date(2015, 0, 1),
                    apples: 0,
                    bananas: 0,
                    cherries: 0,
                    dates: 0,
                },
                {
                    month: new Date(2015, 1, 1),
                    apples: 0,
                    bananas: 0,
                    cherries: 0,
                    dates: 0,
                },
                {
                    month: new Date(2015, 2, 1),
                    apples: 0,
                    bananas: 0,
                    cherries: 0,
                    dates: 0,
                },
                {
                    month: new Date(2015, 3, 1),
                    apples: 0,
                    bananas: 0,
                    cherries: 0,
                    dates: 0,
                },
            ]
        }

        this.changeData(500)
    }

    changeData = (duration = 0) => {
        newData = [
            {
                month: new Date(2015, 0, 1),
                apples: 3840,
                bananas: 1920,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 1, 1),
                apples: 1600,
                bananas: 1440,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 2, 1),
                apples: 640,
                bananas: 960,
                cherries: 3640,
                dates: 400,
            },
            {
                month: new Date(2015, 3, 1),
                apples: 3320,
                bananas: 480,
                cherries: 640,
                dates: 400,
            },
        ];

        setTimeout(() => {
            this.setState({ data: newData});
        }, duration);
    }

    render() {

        const colors = [ 'rgb(138, 0, 230, 0.8)', 'rgb(173, 51, 255, 0.8)', 'rgb(194, 102, 255, 0.8)', 'rgb(214, 153, 255, 0.8)' ]
        const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]


        return (
            <View style={ { height: 300, flexDirection: 'row'} }>
                <StackedAreaChart
                    style={{flex: 1 }}
                    animate
                    animationDuration={1000}
                    contentInset={ { top: 10, bottom: 10 } }
                    data={ this.state.data }
                    keys={ keys }
                    colors={ colors }
                    curve={ shape.curveNatural }
                >
                    <Grid svg={{stroke: 'gray'}}/>
                </StackedAreaChart>
                
                <YAxis
                    style={ { position: 'absolute', top: 0, bottom: 0 }}
                    data={ StackedAreaChart.extractDataPoints(this.state.data, keys) }
                    contentInset={ { top: 10, bottom: 10 } }
                    svg={ {
                        fontSize: 10,
                        fill: 'white',
                        stroke: 'black',
                        strokeWidth: 0.1,
                        alignmentBaseline: 'baseline',
                        baselineShift: '3',
                    } }
                />
                <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={this.state.data}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 20, right: 20 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            </View>
        )
    }
}

export default AreaStackWithAxisExample