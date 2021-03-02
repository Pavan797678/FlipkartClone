import React from "react";
import { View, Text,StyleSheet,StatusBar, TextInput,Image,TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";
import navigationStrings from "../constants/navigationStrings";

import {useNavigation} from "@react-navigation/native"


export default function Header({cartCount,data}) {

    const navigation = useNavigation()

    
    return (
        <View>
            <StatusBar barStyle="dark-content" backgroundColor="#2874f0" />
            <View style={styles.headerBar}>
                <View style={styles.logoView}>
                <Image source={imagePath.drawer_icon} style={styles.drawerIcon} resizeMode="contain"/>
                <Image source={imagePath.flipkart_logo} style={styles.amazonIcon} resizeMode="contain"/>
                <View style={styles.miceCartIconView}>
                <Image source={imagePath.notification} style={styles.notificationIcon} resizeMode="contain"/>
               <TouchableOpacity onPress={()=>{
                 navigation.navigate(navigationStrings.CARTPRODUCT, {data});
               }}>
                <View>
                    <Text style={styles.cartCount}>{data.length}</Text>
                <Image source={imagePath.cart_icon} style={styles.cartIcon} resizeMode="contain"/>
                </View>
                </TouchableOpacity>
                </View>
                </View>
                <View style={styles.searchBarView}>
                    <Image source={imagePath.search_icon} style={styles.searchIcon} resizeMode="contain"/>
                    <TextInput style={styles.searcTextInput} placeholder="Search"></TextInput>
                    <Image source={imagePath.microphone_icon} style={styles.cameraIcon} resizeMode="contain"/>
                </View>
            </View>

        </View>
    )
}
const styles=StyleSheet.create({
    headerBar:{
        height:110,
        backgroundColor:'#2874f0',
        alignItems:'center',
      
    },
    logoView:{
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:10,
        marginVertical:5,
    },
    searchBarView:{
        width:'95%',
        height:"40%",
        backgroundColor:'white',
        borderRadius:5,
        elevation:10,
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        marginTop:'auto'
        
    },
    searchIcon:{
        height:20,
        width:"7%"
    },
    cameraIcon:{
        height:25,
        width:"7%"
    },
    searcTextInput:{
        width:"86%",
        height:40,
        fontSize:18,
        fontWeight:"bold",
        paddingVertical:5
    },
    drawerIcon:{
        height:30,
        width:30,
        marginVertical:13
    },
    amazonIcon:{
        height:50,
        width:100,
        marginHorizontal:20
    },
    miceCartIconView:{
        marginLeft:'auto',
        flexDirection:'row',
        alignItems:'center'
    },
    microphoneIcon:{
        height:25,
        width:25,
        marginHorizontal:20
    },
    cartIcon:{
        height:50,
        width:50,
        position:'relative'
    },notificationIcon:{
        height:20,
        width:20,
        right:'15%',
        position:'relative'
    },
 
    cartCount:{
        fontSize:16,
        position:'absolute',
        left:"45%",
        top:"15%",
        color:'red'
    }
})