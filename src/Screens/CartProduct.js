import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CartItem from '../Component/CartItem';



class CartProduct extends Component {

  state = {
  
  };



  ListEmptyView = () => {
    return (
      <View style={styles.MainContainer}>
 
        <Text> Sorry, No Products In Cart...</Text>
 
      </View>
 
    );
  }

  productQuantityIncreament=(id)=>{
    const {data} = this.props.route.params;
    const{newQuantity}=this.state

    
     let newQuantityArray = [...data]

     const quantityArrayIndex = newQuantityArray.findIndex((item)=>item.id === id)
     let finalQuantityArray =  newQuantityArray[quantityArrayIndex]
    
     

      finalQuantityArray.quantity+=1

      this.setState({
        data:finalQuantityArray
      })
    

    
    console.log(data)
  }

  productQuantityDecreament=(id)=>{
    const {data} = this.props.route.params;
    const{newQuantity}=this.state

    
    
     let newQuantityArray = [...data]

     const quantityArrayIndex = newQuantityArray.findIndex((item)=>item.id === id)
     let finalQuantityArray =  newQuantityArray[quantityArrayIndex]

     if(finalQuantityArray.quantity==1){
       alert("at least one item will in cart")
     }else{

      finalQuantityArray.quantity-=1
     }
      this.setState({
        data:finalQuantityArray
      })
    

    
    console.log(data)
  }

  render() {
    const {data} = this.props.route.params;
    const{newQuantity}=this.state;
    
     
    
 
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
         <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            ListEmptyComponent={this.ListEmptyView}
            renderItem={({item,index}) => <CartItem key={index} data={item} newQuantity={newQuantity} productQuantityDecreament={this.productQuantityDecreament} productQuantityIncreament={this.productQuantityIncreament}/>}
          />
           <View style={styles.buyNowButtonView}>
          <Button color={'#f74300'} title="Place Order"></Button>
        </View>
        
      </View>
    );
  }
}

export default CartProduct;

const styles = StyleSheet.create({
  

 
  MainContainer :{
  alignItems:'center',
  justifyContent: 'center',
  flex:1,
  margin: 10
   
  },
   
  item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
 


