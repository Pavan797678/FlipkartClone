import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import imagePath from '../constants/imagePath';



import navigationStrings from '../constants/navigationStrings';



export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
     
      password: '',
    };
  }

  signUpClick = () => {
    const {
      username,
     
      password,
    } = this.state;
    const {navigation} = this.props;
    var usernameExpression = /[0-9]/g;
    let passwordExpression = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (
      username === '' ||!username.match(usernameExpression) ){
        alert("please enter a valid username");
    }
    else if(password === ''||!password.match(passwordExpression)){
      alert("please enter a valid password");
    }  else {
      navigation.navigate('tabRoutes');
    }
  };

  _onChangeText(key) {
    return (value) => {
      this.setState({
        [key]: value,
      });
    };
  }

  render() {
    const {navigation} = this.props;

    const {
      username,
     
      password,
      isValid,
    } = this.state;
    return (
      <KeyboardAwareScrollView style={styles.mainScrollView}>
         <StatusBar barStyle="dark-content" backgroundColor="#2874f0" />
        <View style={styles.mainContainer}>
          <View style={styles.semiContainer}>
          
            <View style={{alignItems: 'center', marginTop: '20%'}}>
              <Text style={styles.loginTitle}>LOGIN</Text>
            </View>

            <TextInput
              style={styles.userNameField}
              placeholder={'UserName'}
              value={username}
              onChangeText={this._onChangeText('username')}
            />
            <TextInput
              style={styles.passwordField}
              placeholder={'Password'}
              value={password}
              onChangeText={this._onChangeText('password')}
            />
            <View style={styles.signupButtonMainView}>
              <TouchableOpacity onPress={this.signUpClick}>
                <View style={styles.signUpButton}>
                  <Text style={{color: 'white'}}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.semiContainer2}>
            <Image
              style={styles.facebookLoginButton}
              source={imagePath.facebookLogin}></Image>
            <View style={styles.twitterButtonStyle}>
              <Image
                style={styles.twitterLoginButton}
                source={imagePath.twitterLogin}></Image>
              <Text style={{marginVertical: 50, fontSize: 20, color: 'grey'}}>
                Create an Account
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({

  mainScrollView:{
  backgroundColor:'white'
  },
  mainContainer: {
    flex: 1,
   
  },
  semiContainer: {
    height: '55%',

    backgroundColor: '#2874f0',
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
});
