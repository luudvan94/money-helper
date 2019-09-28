import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Color, Typography, Styles, Scaling } from '../../styles';
import TextButton from '../../components/button';
import IconButton from '../../components/icon-button';
import IconPicker from './icon_picker';

import { connect } from 'react-redux';
import * as actions from './action';

class AddCategory extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pickedIcon: ''
    }

    this.onIconPicked = this.onIconPicked.bind(this);
  }

  onIconPicked = (icon) => {
    this.setState({ pickedIcon: icon });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <ScrollView bounces={false} contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'flex-end' }}>
                  <View style={{ flex: 1 }}>
                      <IconButton name="ios-arrow-round-back" size={50}/>
                  </View>

                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                      <TextButton style={styles.button_done} title="done" onPress={this.props.save}/>
                  </View>

              </View>
              <View style={{ paddingTop: Scaling.verticalScale(20) }}>
                  <Text style={styles.header}>add category</Text>
              </View>
              <View style={{ paddingTop: Scaling.verticalScale(30) }}>
                  <Text style={styles.header}>name</Text>
                  <TextButton style={styles.button} title="add"/>
              </View>
              <View style={{ paddingTop: Scaling.verticalScale(30) }}>
                  <Text style={styles.header}>description</Text>
                  <TextButton style={styles.button} title="add"/>
              </View>
              <View style={{ paddingTop: Scaling.verticalScale(30) }}>
                <Text style={styles.header}>icon</Text>
                <IconPicker onPress={this.onIconPicked} pickedIcon={this.state.pickedIcon}/>
              </View>


          </ScrollView>

      </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.DarkMode.BLACK_000000,
    flex: 1,
    ...Styles.androidSafeArea
  },
  scrollView: {
    flex: 1,
    left: Scaling.scale(20),
  },
  scrollViewContent: {
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width-Scaling.scale(30)
  },
  content: {
    color: Color.DarkMode.WHITE_FFFFFF,
    ...Typography.medium
  },
  button: {
    color: Color.DarkMode.GREEN_1ABC9C
  },
  button_done: {
    color: Color.DarkMode.RED_E74C3C
  },
  header: {
    ...Typography.big,
    color: Color.DarkMode.WHITE_FFFFFF
  },
  iconPicker: {
    marginTop: Scaling.verticalScale(30)
  }
})

const mapDispatchToProps = dispatch => {
  return {

    save: (category) => dispatch(actions.addCategory(category))
  }
}

export default connect(null, mapDispatchToProps)(AddCategory);




