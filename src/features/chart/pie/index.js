// source:  https://github.com/giacomocerquone/react-native-fab-pie

import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PieWrapper from './wrapper';
import MyLabels from './labels';
import LabelDesciption from './description';
import { Color } from '../../../styles';

export default class Pie extends React.PureComponent {
  constructor(props) {
    super(props);
    const data = [50, 20, 4, 10, 12, 13 ,14, 15, 16, 17];
    const colors = ['A40E4C', '2C2C54', 'ACC3A6', 'F5D6BA', 'A40E4C', '2C2C54', 'ACC3A6', 'F5D6BA', 'F5D6BA', 'ACC3A6'];

    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => {
        const toRet = {
          value,
          title: `title-${index}`,
          color: `#${colors[index]}`,
          key: `pie-${index}`,
        };
        return toRet;
      });

    this.state = {
      pieData,
    };
  }

  componentDidMount() {
    this.pie.current.animate();
  }

  // animate = () => {
  //   this.pie.current.reset().then(this.pie.current.animate);
  // };

  pie = React.createRef();

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: Color.DarkMode.BLACK_000000,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 30, color: Color.DarkMode.WHITE_FFFFFF }}>React Native Fab Pie</Text>
          <Text>by Giacomo Cerquone</Text>
        </View>
        <PieWrapper
          ref={this.pie}
          containerStyle={{
            flexDirection: 'column',
          }}
          pieStyle={{
            backgroundColor: 'black',
            flex: 0.45,
          }}
          outerRadius={120}
          innerRadius={45}
          data={this.state.pieData}
          animate
        >
          <LabelDesciption />
          <MyLabels />
        </PieWrapper>
      </SafeAreaView>
    );
  }
}