import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../Component/Header';

class Cradit extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>GameZone Page</Text>
      </View>
    );
  }
}

export default Cradit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
