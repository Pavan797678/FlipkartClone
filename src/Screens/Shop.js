import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import imagePath from '../constants/imagePath';
import BrandedItems from '../Component/BrandedItems';
import Carousel from '../Component/Carousel';
import CategroyList from '../Component/CategroyList';
import Header from '../Component/Header';
import ProductsList from '../Component/ProductsList';
import navigationStrings from '../constants/navigationStrings';

const numColumns = 2;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      data: [],
      category_items: [
        {
          id: 1,
          name: 'Offer Zone',
          image: imagePath.offerZone,
        },
        {
          id: 2,
          name: 'Mobiles',
          image: imagePath.mobiles,
        },
        {
          id: 3,
          name: 'Fashion',
          image: imagePath.fashion,
        },
        {
          id: 4,
          name: 'Electroincs',
          image: imagePath.electronics,
        },
        {
          id: 5,
          name: 'Home',
          image: imagePath.home,
        },
        {
          id: 6,
          name: 'Appliances',
          image: imagePath.appliances,
        },
        {
          id: 7,
          name: 'Flight',
          image: imagePath.flight,
        },
        {
          id: 8,
          name: 'Toys & Baby',
          image: imagePath.beauty,
        },
      ],

      items: [
        {
          id: 0,
          name: 'Camera',
          offer: '30-70% off',
          rating: 'Hurry,Only 1 left',
          price: '₹ 1000',
          offprice: '₹ 999',
          quantity:1,
          image: imagePath.camera,
        },
        {
          id: 1,
          name: 'BoAt Earphone',
          offer: '30-70% off',
          rating: 'Hurry,Only 1 left',
          price: '₹ 1130',
          offprice: '₹ 1500',
          quantity:1,
          image: imagePath.earphones,
        },
        {
          id: 2,
          name: 'Earphone',
          offer: '30-70% off',
          rating: 'Hurry,Only 1 left',
          price: '₹ 600',
          offprice: '₹ 799',
          quantity:1,
          image: imagePath.earphones1,
        },
        {
          id: 3,
          name: 'Facewash',
          offer: '30-70% off',
          rating: 'Hurry,Only 1 left',
          price: '₹ 120',
          offprice: '₹ 500',
          quantity:1,
          image: imagePath.facewash,
        },
        {
          id: 4,
          name: 'Glasses',
          offer: '30-70% off',
          rating: 'Hurry,Only 1 left',
          price: '₹ 100',
          offprice: '₹ 198',
          quantity:1,
          image: imagePath.glasses,
        },
        {
          id: 5,
          name: 'Headphone',
          offer: '30-70% off',
          rating: 'Hurry,Only 1 left',
          price: '₹ 1000',
          offprice: '₹ 999',
          quantity:1,
          image: imagePath.headphone,
        },
        {
          id: 6,
          name: 'Shirt',
          offer: '30-70% off',
          rating: 'Hurry,Only 1 left',
          price: '₹ 800',
          offprice: '₹ 999',
          quantity:1,
          image: imagePath.men,
        },
        {
          id: 7,
          name: 'Shirt',
          offer: '30-70% off',
          rating: 'Hurry,Only 1 left',
          price: '₹ 5000',
          offprice: '₹ 5999',
          quantity:1,
          image: imagePath.men1,
        },
        {
          id: 8,
          name: 'Oil',
          offer: '30-70% off',
          rating: 'Hurry,Only 1 left',
          price: '₹ 500',
          offprice: '₹ 999',
          quantity:1,
          image: imagePath.oil,
        },
        {
          id: 9,
          name: 'Phone',
          offer: '30-70% off',
          rating: 'Hurry,Only 1 left',
          price: '₹ 100',
          offprice: '₹ 199',
          quantity:1,
          image: imagePath.phone,
        },
      ],
      brandedItems: [
        {
          id: 0,
          name: 'Execution',
          rating: '5.0*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81gnvKXmLsL._UL1500_.jpg',
        },
        {
          id: 1,
          name: 'Womens design',

          rating: '3.0*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81jITMrPr0L._UL1500_.jpg',
        },
        {
          id: 2,
          name: 'Womens Clothing',

          rating: '4.5*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61GORvjTJxL._UL1440_.jpg',
        },
        {
          id: 3,
          name: 'Brand Collection',

          rating: '3.9*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71vtGhTq7rL._UL1500_.jpg',
        },
        {
          id: 4,
          name: 'New Collection',

          rating: '4.6*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61QQ3N%2Bvx-L._UL1440_.jpg',
        },
        {
          id: 5,
          name: 'Clothes',

          rating: '2.3*',
          image:
            'https://sac.flipkart.net/wp-content/uploads/2017/03/Signature.png',
        },
        {
          id: 6,
          name: 'designs',

          rating: '1.2*',
          image:
            'https://sac.flipkart.net/wp-content/uploads/2017/03/Signature.png',
        },
        {
          id: 7,
          name: 'Offer',

          rating: '2.1*',
          image:
            'https://sac.flipkart.net/wp-content/uploads/2017/03/Signature.png',
        },
        {
          id: 8,
          name: 'new Offering',

          rating: '2.5*',
          image:
            'https://sac.flipkart.net/wp-content/uploads/2017/03/Signature.png',
        },
        {
          id: 9,
          name: 'new Designs',

          rating: '3.4*',
          image:
            'https://sac.flipkart.net/wp-content/uploads/2017/03/Signature.png',
        },
      ],
      popularBrands: [
        {
          id: 0,
          name: '40-80% off',

          image:
            'https://www.bringitonline.in/uploads/2/2/4/5/22456530/male-model-photography-for-ecommerce_2.jpg',
        },
        {
          id: 1,
          name: 'Best Deal',

          image:
            'https://ncube-digest.com/wp-content/uploads/2020/06/types-of-ecommerce.jpg',
        },
        {
          id: 2,
          name: 'Shop in Just 199',

          image:
            'https://www.bahrain-confidential.com/wp-content/uploads/2020/10/ecommerce.jpeg',
        },
        {
          id: 3,
          name: '20-90% off',

          image:
            'https://www.jeffbullas.com/wp-content/uploads/2018/11/How-to-Launch-a-Global-eCommerce-Business-That-Penetrates-Local-Markets.jpg',
        },
      ],
    };
  }
  actionOnRow = (id) => {
    const {items, cartCount, data} = this.state;

    let newPostArry = [...items];
   

    if(!(data.includes(newPostArry[id]))){
        data.push(newPostArry[id]);

      
      // var obj = {};
      // obj['id'] = newPostArry[id].id;
      // obj['name'] = newPostArry[id].name;
      // obj['offer'] = newPostArry[id].offer;
      // obj['rating'] = newPostArry[id].rating;
      // obj['price'] = newPostArry[id].price;
      // obj['offprice'] = newPostArry[id].offprice;
      // obj['image'] = newPostArry[id].image;
      // obj['quantity'] = 1;
      // let quantityCartArray = [...data, obj];
      // this.setState({data: quantityCartArray});
     
    this.setState({
      cartCount: data.length,
    });
  }else{
    alert('item already in cart')
  }
  };
  productDetails = (id) => {
    const {items} = this.state;

    let newPostArry = [...items];
    this.props.navigation.navigate(navigationStrings.PRODUCTDETAILS, {
      data: newPostArry[id],
    });
  };

  componentDidMount(){
    this.focusListener = this.props.navigation.addListener('focus',()=>{
      if(this.props.route.params){
        let itemsadd=this.props.route.params.itemsinfo

        // console.log(itemsadd)
        this.actionOnRow(itemsadd)
        this.props.route.params=null
      }
    })
  }
  componentWillUnmount(){
    if(this.focusListener){
      this.focusListener();
    }
  }



  render() {
    const {
      category_items,
      items,
      cartCount,
      brandedItems,
      popularBrands,
      data,
    } = this.state;

    return (
      <View style={styles.mainContainer}>
        <Header cartCount={cartCount} data={data} />
        <View style={styles.mainContainer1}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={category_items}
            horizontal
            keyExtractor={(item) => item.name.toString()}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: 'gray'}}></View>
            )}
            renderItem={({item}) => <CategroyList data={item} />}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainContainer2}>
          <View>
            <Carousel />
          </View>
          <View style={styles.brandedItems}>
            <View style={styles.container1}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={popularBrands}
                horizontal
                keyExtractor={(item) => item.name.toString()}
                ItemSeparatorComponent={() => (
                  <View style={{height: 0.3, backgroundColor: 'gray'}}></View>
                )}
                renderItem={({item}) => (
                  <BrandedItems data={item} actionOnRow={this.actionOnRow} />
                )}
              />
            </View>
          </View>
          <View style={styles.mainContainer3}>
            <View style={styles.container}>
              <Text style={styles.headingText}>Trending Offers</Text>
              <View style={styles.container1}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={items}
                  keyExtractor={(item) => item.name.toString()}
                  ItemSeparatorComponent={() => (
                    <View style={{height: 0.3, backgroundColor: 'gray'}}></View>
                  )}
                  numColumns={numColumns}
                  renderItem={({item}) => (
                    <ProductsList
                      data={item}
                      actionOnRow={this.actionOnRow}
                      productDetails={this.productDetails}
                    />
                  )}
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.brandedItems}>
              <View style={styles.container1}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={brandedItems}
                  horizontal
                  keyExtractor={(item) => item.name.toString()}
                  ItemSeparatorComponent={() => (
                    <View style={{height: 0.3, backgroundColor: 'gray'}}></View>
                  )}
                  renderItem={({item}) => (
                    <BrandedItems data={item} actionOnRow={this.actionOnRow} />
                  )}
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.container2}>
              <Text style={styles.headingText}>Trending Now</Text>
              <View style={styles.container1}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={category_items}
                  keyExtractor={(item) => item.name.toString()}
                  ItemSeparatorComponent={() => (
                    <View style={{height: 0.3, backgroundColor: 'gray'}}></View>
                  )}
                  numColumns={numColumns}
                  renderItem={({item}) => (
                    <ProductsList data={item} actionOnRow={this.actionOnRow} />
                  )}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainContainer1: {
    flex: 0.12,
  },
  mainContainer2: {
    flex: 0.33,
  },
  mainContainer3: {
    flex: 0.55,
  },
  container: {
    flex: 1,
    backgroundColor: '#2874f0',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  brandedItems: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    marginHorizontal: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
    marginLeft: 10,
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFD700',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default Home;
