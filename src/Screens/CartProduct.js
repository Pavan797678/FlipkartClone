import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CartItem from '../Component/CartItem';



class CartProduct extends Component {
  state = {};



  ListEmptyView = () => {
    return (
      <View style={styles.MainContainer}>
 
        <Text> Sorry, No Products In Cart...</Text>
 
      </View>
 
    );
  }

  render() {
    const {data} = this.props.route.params;
 
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
         <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            ListEmptyComponent={this.ListEmptyView}
            renderItem={({item}) => <CartItem data={item}/>}
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
 


