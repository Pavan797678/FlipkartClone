import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

function CategoryList({data}) {
  return (
    <View style={styles.postContainer}>
      <View>
        <Image style={styles.userImage} source={data.image} />
        <Text style={styles.usernameText}>{data.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginHorizontal: 14,
  },
  usernameText: {
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  userImage: {
    height: 45,
    width: 45,

    borderRadius: 50,
  },
});

export default CategoryList;
