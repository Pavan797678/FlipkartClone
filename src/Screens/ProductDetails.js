import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import imagePath from '../constants/imagePath';
import {showMessage} from "react-native-flash-message";
import navigationStrings from '../constants/navigationStrings';


class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }

  


  state = {};
  render() {
    const {data} = this.props.route.params;
    console.log(data.price);
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Image style={styles.productImage} source={data.image}></Image>
        </View>
        <View style={styles.viewLine}>
          <Text style={{marginLeft: 15}}>{data.name}</Text>

          <View style={styles.priceWithTitle}>
            <Text style={styles.price}>{data.price}</Text>
            <Text style={styles.offprice}>{data.offprice}</Text>
            <Text style={styles.offerText}>{data.offer}</Text>
          </View>
          <Text style={styles.ratingText}>{data.rating}</Text>
        </View>
        <View>
          <Text style={{marginLeft: 15, fontWeight: 'bold', marginTop: 10}}>
            Avaliable offers
          </Text>
          <View style={styles.offerView}>
            <Image style={styles.offerImage} source={imagePath.offer}></Image>
            <Text style={{marginHorizontal: 20, marginTop: 10}}>
              Bank Offer10% off on Axis Bank Credit and Debit Cards, up to ₹750.
              On orders of ₹2000 and aboveT&C
            </Text>
          
          </View>
          <View style={styles.offerView}>
            <Image style={styles.offerImage} source={imagePath.offer}></Image>
            <Text style={{marginHorizontal: 20, marginTop: 10}}>
            Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
            </Text>
          
        
          </View>
         
         
        </View>
        <View style={{marginHorizontal:100,marginTop:20}}>
          
          <Button  title="Add To Cart" onPress={()=>{
            this.props.navigation.navigate(navigationStrings.SHOP,{itemsinfo:data.id});

         
           
          
           
          }}>
          </Button>

          </View>
       
      </View>
    );
  }
}

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  container1: {
    flex: 0.6,
    alignItems: 'center',
  },
  viewLine: {
    borderBottomWidth: 0.5,
  },

  productImage: {
    height: 300,
    width: 250,
    resizeMode: 'contain',
  },
  offerText: {
    fontSize: 15,
    color: 'green',
    marginTop: 4,
    marginHorizontal: 10,
    marginLeft: 15,
  },
  ratingText: {
    marginVertical: 15,
    color: 'red',
    fontSize: 15,
    marginLeft: 15,
  },
  priceWithTitle: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  price: {
    fontSize: 20,
  },offprice:{
    fontSize:12,
    marginLeft:10,
    marginTop:5,
    textDecorationLine:'line-through'
    
  },
  offerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  offerImage: {
    height: 20,
    width: 20,
    marginTop: 20,
    marginLeft: 15,
  },
});
