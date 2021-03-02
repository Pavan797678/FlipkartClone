import React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, ProductDetails,CartProduct} from '../Screens/index';
import navigationStrings from '../constants/navigationStrings';



const Stack = createStackNavigator();

function AuthStack() {
  return (
    <React.Fragment>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.PRODUCTDETAILS}
        component={ProductDetails}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.CARTPRODUCT}
        component={CartProduct}
        options={{headerShown: false}}
      />
    </React.Fragment>
  );
}

export default AuthStack;
