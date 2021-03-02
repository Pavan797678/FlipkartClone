import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../Component/Header';

class Video extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Video Page</Text>
      </View>
    );
  }
}

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
