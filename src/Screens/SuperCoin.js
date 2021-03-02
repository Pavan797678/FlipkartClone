import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class SuperCoin extends Component {
  
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>SuperCoin Page</Text>
      </View>
    );
  }
}

export default SuperCoin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
