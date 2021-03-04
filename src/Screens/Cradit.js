import React, {Component,useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Modal,
  PermissionsAndroid
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import imagePath from '../constants/imagePath';
import * as ImagePicker from 'react-native-image-picker';

import navigationStrings from '../constants/navigationStrings';





export default class Cradit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisibal: false,
      resourcePath:imagePath.profile
    };
  };

   _profileimage = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        ImagePicker.launchCamera(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
             saveToPhotos:true
          },
          (response) => {
            console.log(response);
            this.setState({resourcePath: response});
          },
        );
        this.setState({isModalVisibal: false});
    
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  

  

  _profileImageFromGallery = async()=>{
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        ImagePicker.launchImageLibrary(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
             saveToPhotos:true
          },
          (response) => {
            console.log(response);
            this.setState({resourcePath: response});
          },
        );
        this.setState({isModalVisibal: false});
    
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  openModal = () => {
    const {isModalVisibal} = this.state;
    this.setState({isModalVisibal: true});
  };

  onCloseModal = () => {
    this.setState({isModalVisibal: false});
  };

  render() {
    const {navigation} = this.props;
    const {isModalVisibal,resourcePath} = this.state;

    return (
      <KeyboardAwareScrollView style={styles.mainScrollView}>
        <StatusBar barStyle="dark-content" backgroundColor="#2874f0" />
        <View style={styles.mainContainer}>
          <View style={styles.semiContainer}>
            <View style={{alignItems: 'center', marginTop: '20%'}}>
              <Text style={styles.loginTitle}>Profile</Text>
            </View>

            <View style={styles.signupButtonMainView}>
              <TouchableOpacity onPress={this.openModal}>
                <View>
                  <Image
                    style={styles.profileImage}
                    source={resourcePath}></Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.semiContainer2}>
            <TextInput
              style={styles.userNameField}
              placeholder={'Pavan Sharma'}
            />
            <TextInput
              style={styles.passwordField}
              placeholder={'Hello is My Status'}
            />
          </View>
        </View>
        <Modal
          transparent
          onRequestClose={this.onCloseModal}
          visible={isModalVisibal}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={this.onCloseModal}>
              <Image
                style={styles.closeButton}
                source={imagePath.close}></Image>
            </TouchableOpacity>
            <View style={styles._modalView}>
              <Text style={{fontSize: 20}}>Add Profile</Text>

              <TouchableOpacity onPress={this.addPost}>
                <View style={styles.addPost}>
                  <TouchableOpacity onPress={this._profileimage}>
                    <Image
                      style={styles.mediaIcons}
                      source={imagePath.cameraImage}></Image>
                  </TouchableOpacity>
                   <TouchableOpacity onPress={this._profileImageFromGallery}>
                  <Image
                    style={styles.mediaIcons}
                    source={imagePath.gallery}></Image>
                    </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainScrollView: {
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
  },
  semiContainer: {
    height: '55%',

    backgroundColor: '#2874f0',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  logoImage: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
  },
  semiContainer1: {
    alignItems: 'center',
  },

  semiContainer2: {
    marginHorizontal: 10,
    marginTop: 30,
  },

  userNameField: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 60,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  passwordField: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 60,
    borderRadius: 5,
    borderWidth: 0.5,
    marginVertical: 15,
  },
  signupButtonMainView: {
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButton: {
    backgroundColor: '#2874f0',
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  loginTitle: {
    marginVertical: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  facebookLoginButton: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  twitterLoginButton: {
    height: 70,
    width: '65%',
    resizeMode: 'contain',
  },
  twitterButtonStyle: {
    alignItems: 'center',
  },
  profileImage: {
    height: 100,
    width: 100,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  _modalView: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderBottomEndRadius: 20,
  },
  mediaIcons: {
    height: 70,
    width: 70,
  },
  addPost: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  closeButton: {
    height: 35,
    width: 35,
  },
});
