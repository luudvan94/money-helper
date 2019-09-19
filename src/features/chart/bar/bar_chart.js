import React from 'react'
import {XAxis } from 'react-native-svg-charts'
import BarChart from './source/bar_chart';
import { View } from 'react-native'
import { Dimensions } from 'react-native'
import * as scale from 'd3-scale'

class XAxisChart extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data.map(v => {return {value: 0}}),
          };
      
        this.changeData(1000);
    }

    changeData(duration = 0) {
        newData = this.props.data.map((v, index) => {
            if (index == this.props.index - 1) {
                return {value:v, svg: {fill: this.props.hightlightColor}}
            }
            return {value: v}
        })
    
        setTimeout(() => {
          this.setState({ data: newData });
        }, duration);
      }

      componentDidUpdate(props) {
        this.changeData();
      }


    render() {

        return (
            <BarChart
                    svg={{ fill: this.props.fillColor }}
                    animate
                    animationDuration={500}
                    style={{ flex: 4}}
                    data={this.state.data}
                    yAccessor={({item}) => item.value}
                    contentInset={{ top: 10, bottom: 10 }}
                    gridMin={0}
            />
        )
    }

}

export default XAxisChart