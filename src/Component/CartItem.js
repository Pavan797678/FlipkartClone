import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,

  Image,
  
  Button
} from 'react-native';

export default function CartItem({data}) {
  return (
    <View>
      <View style={styles.mainView}>
        <View style={styles.productImage}>
          <Image style={styles.productImages} source={data.image}></Image>
        </View>
        <View style={styles.productDetails}>
         
          <Text style={styles.productText}>{data.name}</Text>
          <Text>{data.price}</Text>
          <Text style={styles.offerText}>{data.offer}</Text>
          <Text style={styles.remaningProduct}>{data.rating}</Text>
          
        </View>
       
      </View>
      
     
    </View>
  );
}
const styles = StyleSheet.create({

  mainView:{
    flexDirection: 'row',
    borderBottomWidth:0.5 ,
   
    
  },productImage:{
     flex:0.3
  },productDetails:{
    flex:0.4
  },
  productImages: {
    height: 100,
    width: 100,
    resizeMode:'contain'
  },remaningProduct:{
    color:'red'
  },offerText:{
    color:'green'
  }
});
