import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import imagePath from '../../imagePath';

export default class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      confimrMobileNumber: '',
      password: '',
    };
  }

  signUpClick = () => {
    const {
      firstName,
      lastName,
      mobileNumber,
      confimrMobileNumber,
      password,
    } = this.state;
    const {navigation} = this.props;
    if (
      firstName === '' ||
      lastName === '' ||
      mobileNumber === '' ||
      confimrMobileNumber === '' ||
      password === ''
    ) {
      alert("form fileds can't be null");
    } else {
      navigation.navigate('login');
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
      firstName,
      lastName,
      mobileNumber,
      confimrMobileNumber,
      password,
      isValid,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.semiContainer}>
          <Image style={styles.imageLogo} source={imagePath.image}></Image>
        </View>
        <View style={styles.semiContainer1}>
          <TextInput
            style={styles.firstNameTextInput}
            placeholder={'First name'}
            value={firstName}
            onChangeText={this._onChangeText('firstName')}
          />
          <TextInput
            style={styles.lastNameTextInput}
            placeholder={'Last name'}
            value={lastName}
            onChangeText={this._onChangeText('lastName')}
          />
        </View>
        <View style={styles.semiContainer2}>
          <TextInput
            style={styles.mobileNumberTextInput}
            placeholder={'Mobile number or email'}
            value={mobileNumber}
            onChangeText={this._onChangeText('mobileNumber')}
          />
          <TextInput
            style={styles.reEnterMobileNumberTextInput}
            placeholder={'Re-enter mobile number or email'}
            value={confimrMobileNumber}
            onChangeText={this._onChangeText('confimrMobileNumber')}
          />
          <TextInput
            style={styles.passwordFiled}
            placeholder={'New password'}
            value={password}
            onChangeText={this._onChangeText('password')}
          />
          <View style={styles.signupButtonMainView}>
            <TouchableOpacity onPress={this.signUpClick}>
              <View style={styles.signUpButton}>
                <Text style={{color: 'white'}}>SignUp</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.facebook}>
              <Text style={{color: '#3F51B5', fontWeight: 'bold'}}>from</Text>
              <Text
                style={{color: '#3F51B5', fontWeight: 'bold', fontSize: 20}}>
                FACEBOOK
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  semiContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    height: 100,
    width: 100,
  },
  semiContainer1: {
    flex: 0.1,
    marginHorizontal: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstNameTextInput: {
    backgroundColor: 'white',
    width: '45%',
    height: 50,
    borderRadius: 5,
    borderBottomWidth: 0.5,
  },
  lastNameTextInput: {
    backgroundColor: 'white',
    width: '45%',
    height: 50,
    borderRadius: 5,
    borderBottomWidth: 0.5,
  },
  mobileNumberTextInput: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    borderBottomWidth: 0.5,
  },
  semiContainer2: {
    flex: 0.5,
    marginHorizontal: 10,
    marginTop: 30,
  },
  reEnterMobileNumberTextInput: {
    backgroundColor: 'white',
    marginVertical: 30,
    height: 50,
    borderRadius: 5,
    borderBottomWidth: 0.5,
  },
  passwordFiled: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    borderBottomWidth: 0.5,
  },
  signupButtonMainView: {
    alignItems: 'center',
    marginVertical: 50,
  },
  signUpButton: {
    backgroundColor: '#3F51B5',
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  facebook: {
    alignItems: 'center',
    marginVertical: 50,
  },
});
