import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Circle, G, Line, Rect, Text } from 'react-native-svg'
import HorizontalLine from './horizontal_line';
import Tooltip from './tooltip';
import { Color } from '../../../styles';

class ExtrasExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data.map(v => {return 0}),
            showToolTip: false,
          };
      
        this.changeData(500);

    }

    changeData(duration = 0) {

        newData = this.props.data.map((v) => {
            return v;
        })
    
        setTimeout(() => {
          this.setState({ data: newData, showToolTip: true });
        }, duration);
    }

    render() {

        const { data, showToolTip } = this.state;

        if (showToolTip) {
            return (
                <LineChart
                    animate
                    animationDuration={1000}
                    style={{ height: 300 }}
                    data={ data }
                    svg={{
                        stroke: Color.DarkMode.GREEN_1ABC9C,
                        strokeWidth: 4,
                    }}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={ shape.curveLinear }
                >
                    <Grid svg={{stroke: 'gray'}}/>
                    {HorizontalLine({y: "50%", color: Color.DarkMode.GREEN_1ABC9C})}
                    <Tooltip data={data} index={this.props.index}/>
                </LineChart>
            );
        } else {
            return (
                <LineChart
                    animate
                    animationDuration={1000}
                    style={{ height: 300 }}
                    data={ data }
                    svg={{
                        stroke: Color.DarkMode.GREEN_1ABC9C,
                        strokeWidth: 4,
                    }}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={ shape.curveLinear }
                >
                    <Grid svg={{stroke: 'gray'}}/>
                </LineChart>
            );
        }
        
    }

}

export default ExtrasExample