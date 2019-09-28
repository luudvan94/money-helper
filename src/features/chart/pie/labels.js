// source:  https://github.com/giacomocerquone/react-native-fab-pie

import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { Color, Typography, Scaling } from '../../../styles';

export default function MyLabels({ data, focus }) {
  return <View style={styles.container}>
            <FlatList 
              style={styles.listItem}
              data={data}
              renderItem={({ item, index }) =>
                <TouchableOpacity onPress={() => focus(index)}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <View style={[styles.dot, { backgroundColor: item.color }]} />
                    <View style={styles.item}>
                      <Text style={styles.text}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              }
            />
    </View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.35,
  },
  listItem: {
    flex: 1,
    alignSelf: 'stretch'
  },
  item: {
    marginVertical: Scaling.verticalScale(10),
    marginRight: Scaling.scale(10),
  },
  dot: {
    width: Scaling.scale(22),
    height: Scaling.verticalScale(22),
    borderRadius: Scaling.moderateScale(11),
    marginHorizontal: Scaling.scale(10),
  },
  text: {
    color: Color.DarkMode.WHITE_FFFFFF,
    ...Typography.medium
  }
});