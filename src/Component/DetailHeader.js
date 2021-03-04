import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native'
import navigationStrings from '../constants/navigationStrings';

function DetailHeader(props) {
  const {count} = props;
  const navigation=useNavigation();
  
  return (
    <View style={styles.DetailHeader}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={{marginVertical: 10, flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
          {/* <Image style={styles.logo1} source={imagePath.} /> */}
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginEnd: 7}}>
        <Image style={styles.search} source={imagePath.notification} />
        <View>
          <Text
            style={{position: 'absolute', top: 5, left: 30, color: '#FF527B'}}>
            {count}
          </Text>
       
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  DetailHeader: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'space-between',
  },
  DetailHeader_text: {
    fontSize: 20,
    color: 'pink',

    marginHorizontal: 18,
  },
  logo: {
    height: 20,
    width: 25,
    marginVertical: 3,
    marginStart: 7,

    resizeMode: 'contain',
  },
  logo1: {
    height: 16,
    width: 20,
    marginHorizontal: 4,
    marginVertical: 6,
    resizeMode: 'contain',
    marginStart: 15,
  },
  search: {
    height: 20,
    width: 20,
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
export default DetailHeader;