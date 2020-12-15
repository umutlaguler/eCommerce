import React, { Component } from 'react';
import {Text,TouchableOpacity,TextInput,View ,StyleSheet,Image,key} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { PhoneHeight,PhoneWidth,responsiveSize } from '../config/env';
import { LoginButton, AccessToken,LoginManager} from 'react-native-fbsdk';
import { signIn } from '../../actions/authenticationAction';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import { fullNameChange,emailChange, passwordChange ,signUpClicked} from '../../actions/authenticationAction';
// import AsyncStorage from '@react-native-community/async-storage';
import {GoogleSignin,GoogleSigninButton,statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure();

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:['Erkek','Kadın'],
      genderStatus: null,
      checked:null,
      phoneNumberValue:"",
      passwordValue:""
    }
  }
  onSignIn = () => {
    console.log("giriş yapa bastı mı  ");
    this.props.signIn(this.state.phoneNumberValue,this.state.passwordValue)
  }
  
  onPhoneNumberChanged = (value) => this.setState({phoneNumberValue: value})
  onPasswordChanged = (value) => this.setState({passwordValue: value})

    signInWithGoogle = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfo });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };
    signInWithFacebook = () =>{
      LoginManager.logInWithPermissions(["public_profile"]).then(
        function(result) {
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            console.log(
              "Login success with permissions: " +
                result.grantedPermissions.toString()
            );
          }
        },
        function(error) {
          console.log("Login fail with error: " + error);
        }
      );
    }
    render() {
      const { phoneErrorValue, passwordErrorValue } = this.props;
      const errorMessagePhone = phoneErrorValue ? <Text style={styles.errors}>{ phoneErrorValue}</Text>:null
      const errorMessagePassword = passwordErrorValue ? <Text style={styles.errors}>{ passwordErrorValue}</Text>:null
        return (
         <View style={styles.background}>
          <View style={styles.container}>
              <Image
                  style={styles.logoImage}
                  source={require('../../images/newLogo.png')} />
              <TextInput 
                  keyboardType='numeric'
                  maxLength = {10}
                  style={styles.input}
                  placeholder='Telefon'
                  placeholderTextColor='#545454'
                  onChangeText={(value) => this.onPhoneNumberChanged(value)}/>
                  {errorMessagePhone}
              <TextInput 
                  style={styles.input}
                  placeholder='Şifre'
                  placeholderTextColor='#545454'
                  onChangeText={(value) => this.onPasswordChanged(value)}/>
                  {errorMessagePassword}
              <TouchableOpacity
                  onPress={this.onSignIn}
                  style={styles.signInButton}>
                  <Text style={styles.signInButtonText}>Giriş Yap</Text>
              </TouchableOpacity>
              <View style={styles.questionsBox}>
                  <Text style={styles.questionText}>Üye değil misin ?  </Text>
                  <TouchableOpacity>
                    <Text style={styles.loginButtonText}
                            onPress = {() => Actions.signUp()}> Üye Ol 
                    </Text>
                  </TouchableOpacity> 
              </View>      
              <View style={styles.greyLine}></View>
                  <TouchableOpacity
                  onPress={this.signInWithGoogle}
                  style={styles.googleSignInBtn}>
                  <Text style={styles.googleSignInButtonText}>Google</Text>
                  </TouchableOpacity>
              <View>
                <LoginButton
                  style={styles.facebookBtn}
                  onPress={this.signInWithFacebook}
                  onLoginFinished={
                    (error, result) => {
                      if (error) {
                        console.log("login has error: " + result.error);
                      } else if (result.isCancelled) {
                        console.log("login is cancelled.");
                      } else {
                        AccessToken.getCurrentAccessToken().then(
                          (data) => {
                            console.log(data);
                            console.log(data.accessToken.toString())
                          }
                        )
                      }
                    }
                  }
                  onLogoutFinished={() => console.log("logout.")}/>
              </View>  
          </View>   
        </View>   
        )
    }
}
const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: "center",
    },
  logoImage:{
    marginBottom:'10%',
    width: responsiveSize(100),
    height: responsiveSize(100),
    resizeMode: "contain",
    alignSelf: "center"
    },
  container:{
    height: PhoneHeight * 0.50,  
    justifyContent: "center",
    alignItems: "center"
    },
  input: {
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.05,
    margin: 8,
    color: 'black',
    fontSize: responsiveSize(10),
    textAlign: "center",
    borderWidth:0.3,
    borderRadius:14,
    borderColor:'#545454'
    },
  sexCheckBoxImg:{
    width: PhoneWidth * 0.05,
    height: PhoneHeight * 0.02,
    },
  sexCheckBtn:{
    flexDirection:'row',
    alignItems:'center',
    },
  sexCheckBoxes:{
    borderWidth:0,
    width:PhoneWidth*0.5,
    alignItems:'center'      
    },
  signInButton:{
    height: PhoneHeight * 0.05,
    width: PhoneWidth * 0.5, 
    alignSelf: "center",
    marginTop: 10,
    justifyContent:"center",
    backgroundColor:'black',
    borderRadius:14
    },
  signInButtonText:{
    color: "white",
    textAlign: "center",
    fontSize: responsiveSize(14)
    },
  googleSignInButtonText:{
    color: "red",
    },
  facebookSignInBtnText:{
    color:'white'
    },
  questionText:{
    fontSize: responsiveSize(11),
    color:'#545454'
    },
  loginButtonText:{
    color: "black",
    fontWeight:'bold',
    fontSize: responsiveSize(10),
    },
  login:{
    color: "#445c8b"
    },
  greyLine:{
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.0005,
    backgroundColor:'#545454',
    marginTop:'10%'
    },
  googleSignInBtn:{
    height: PhoneHeight * 0.04,
    width: PhoneWidth * 0.47, 
    alignSelf: "center",
    marginTop: 10,
    justifyContent:"center",
    backgroundColor:'white',
    alignItems:'center',
    borderRadius:20,
    borderColor:'#FF0000',
    borderWidth:2,
    marginBottom:5
    },
  facebookSignInBtn:{
    height: PhoneHeight * 0.05,
    width: PhoneWidth * 0.5, 
    alignSelf: "center",
    marginTop: 10,
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'#2876C4',
    borderRadius:20,
    },
  questionsBox:{
    paddingTop:10,
    borderWidth:0,
    flexDirection:'row'
    },
  errors:{
    color: '#ec5341',
    fontSize: responsiveSize(11),
    }
});
const mapStateToProps = (state) => {
  const { phoneNumberValue,passwordValue, phoneErrorValue, passwordErrorValue } = state.authenticationReducer;
  return {
     phoneErrorValue,
     passwordErrorValue,
     phoneNumberValue,
     passwordValue,
  }
}
export default connect(
  mapStateToProps,
  {
    signIn,
  }
)(SignIn)
