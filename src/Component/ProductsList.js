import React from 'react';
import {Text, View, StyleSheet, Image,TouchableWithoutFeedback ,Button} from 'react-native';


function CategoryList({data,actionOnRow,productDetails}) {
  
  return (
   
 
    <View style = {styles.itemStyle} >
         <TouchableWithoutFeedback onPress={()=>productDetails(data.id)}>
           <View>
        <Image style={styles.productImages} source={data.image}></Image>
        <Text style = {styles.itemText}>{data.name}</Text>
        <Text style = {styles.offerText}>{data.offer}</Text>
        </View>
        </TouchableWithoutFeedback>
          <Button  style={styles.cartButton} title="Add to Cart" onPress={() => actionOnRow(data.id)}></Button>   
    </View>
   
   
  );
}


const styles = StyleSheet.create({
 
  itemStyle:{
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    height:190,
    flex:1,
    margin:0.2  ,
    
  },
  itemText:{
      color:'#000',
      fontSize:10
  },productImages:{
      height:100,
      width:100,
      resizeMode:'contain'
  },offerText:{
    fontSize:20,
    color:'green'
  },cartButton:{
   
  }
  
});

export default CategoryList;
