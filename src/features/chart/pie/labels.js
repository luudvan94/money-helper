// source:  https://github.com/giacomocerquone/react-native-fab-pie

import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { Color, Typography } from '../../../styles';

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
                      justifyContent: 'flex-start',
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 0.35,
  },
  listItem: {
    flex: 1,
    alignSelf: 'stretch'
  },
  item: {
    marginVertical: 10,
    marginRight: 10,
  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginHorizontal: 10,
  },
  text: {
    color: Color.DarkMode.WHITE_FFFFFF,
    ...Typography.medium
  }
});