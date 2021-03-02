import React from 'react';
import {Text, View, StyleSheet, Image,TouchableWithoutFeedback} from 'react-native';


function BrandedItems({data,actionOnRow}) {
  
  return (
   
    <TouchableWithoutFeedback onLongPress={() => actionOnRow(data.id)}>
    <View style = {styles.itemStyle} >
        <Image style={styles.productImages} source={{uri:data.image}}></Image>
        <Text style = {styles.itemText}>{data.name}</Text>
        <Text style = {styles.ratingText}>{data.rating}</Text>
     
    </View>
    </TouchableWithoutFeedback>
   
  );
}


const styles = StyleSheet.create({
 
  itemStyle:{
      marginVertical:10,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    height:175,
    width:170,
    flex:1,
    margin:0.2  ,
    borderColor:'gray', // if you need 
    borderWidth:0.5,
    overflow: 'hidden',
    shadowColor: 'black',
    marginHorizontal:10,
    shadowRadius: 0.1,
    shadowOpacity: 0.5,
    borderRadius:10
    
  },
  itemText:{
      color:'#000',
      fontSize:15
  },productImages:{
      height:140,
      width:170,
      resizeMode:'cover',
  },ratingText:{
    fontSize:12,
    backgroundColor:'green',  
    color:'white',
    borderRadius:5,
    marginBottom:5
  }
  
});

export default BrandedItems;
