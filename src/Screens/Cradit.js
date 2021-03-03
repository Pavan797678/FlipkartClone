import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import Header from '../Component/Header';

import ImagePicker from 'react-native-image-picker';

class Cradit extends Component {
  state = {};

  openPicker=()=>{
   const options = {
     title:'Select Avatar',
     storageOptions:{
       skipBackup:true,
       path:'images',
     },
   };

   ImagePicker.showImagePicker(options,(respose)=>{
     console.log('Response = ',respose);
     if(respose.didCancel){
       console.log('User cancelled image picker');
     }else if(respose.error){
       console.log('ImagePicker Error',respose.error);
     }else{
       const source = {uri:respose.uri}
      //  this.setState({
      //    avatarSource:source,
      //  });
     }
   })

  }

  render() {
    return (
      <View style={styles.container}>
       <Button title="Pick Image From Gallery" onPress={this.openPicker}></Button>
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
