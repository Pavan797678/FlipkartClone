import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CartItem from '../Component/CartItem';

class CartProduct extends Component {
  state = {};

  ListEmptyView = () => {
    return (
      <View style={styles.MainContainer}>
        <Text> Sorry, No Products In Cart...</Text>
      </View>
    );
  };

  productQuantityIncreament = (id) => {
    const {data} = this.props.route.params;

    let newQuantityArray = [...data];

    const quantityArrayIndex = newQuantityArray.findIndex(
      (item) => item.id === id,
    );
    let finalQuantityArray = newQuantityArray[quantityArrayIndex];

    finalQuantityArray.quantity += 1;

    let total = 0;
    for (let i = 0; i < newQuantityArray.length; i++) {
      total += newQuantityArray[i].price * newQuantityArray[i].quantity;
    }
    console.log(total);

    this.setState({
      data: finalQuantityArray,
      total,
    });

    // console.log(data);
  };

  productQuantityDecreament = (id) => {
    const {data} = this.props.route.params;

    let newQuantityArray = [...data];

    const quantityArrayIndex = newQuantityArray.findIndex(
      (item) => item.id === id,
    );
    let finalQuantityArray = newQuantityArray[quantityArrayIndex];

    if (finalQuantityArray.quantity == 1) {
      alert('at least one item will in cart');
    } else {
      finalQuantityArray.quantity -= 1;
      finalQuantityArray.price =
        finalQuantityArray.price / finalQuantityArray.quantity;
    }

    let total = 0;
    for (let i = 0; i < newQuantityArray.length; i++) {
      total += newQuantityArray[i].price * newQuantityArray[i].quantity;
    }
    console.log(total);

    this.setState({
      data: finalQuantityArray,
      total,
    });

    //    console.log(data);
  };

  componentDidMount() {
    const {data} = this.props.route.params;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].price * data[i].quantity;
    }
    console.log(total);

    this.setState({
      total,
    });
  }

  render() {
    const {data} = this.props.route.params;
    const {newQuantity, total} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          ListEmptyComponent={this.ListEmptyView}
          renderItem={({item, index}) => (
            <CartItem
              key={index}
              data={item}
              newQuantity={newQuantity}
              productQuantityDecreament={this.productQuantityDecreament}
              productQuantityIncreament={this.productQuantityIncreament}
            />
          )}
        />
        <View style={styles.buyNowButtonView}>
          <Text style={{color: 'white'}}>Place Order:-{total}</Text>
        </View>
      </View>
    );
  }
}

export default CartProduct;

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  buyNowButtonView: {
    backgroundColor: '#f74300',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
