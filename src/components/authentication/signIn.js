import React, { Component } from 'react';
import {Text,TouchableOpacity,TextInput,View ,StyleSheet,Image,key} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { PhoneHeight,PhoneWidth,responsiveSize } from '../config/env';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import { fullNameChange,emailChange, passwordChange ,signUpClicked} from '../../actions/authenticationAction';
// import AsyncStorage from '@react-native-community/async-storage';

class signUp extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      data:['Erkek','Kadın'],
      genderStatus: null,
      checked:null
    }
  }

    onFullNameChanged = (value) => this.props.fullNameChange(value)
    onEmailChanged    = (value) => this.props.emailChange(value)
    onPasswordChanged = (value) => this.props.passwordChange(value)
    
 
    render() {
        return (
          <View style={styles.background}>
            <View style={styles.container}>
              <Image
              style={styles.logoImage}
              source={require('../../images/newLogo.png')}
            />
  
             <TextInput 
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor='#545454'
                onChangeText={(value) => this.props.fullNameChange(value)}
                />
            <TextInput 
                style={styles.input}
                placeholder='Şifre'
                placeholderTextColor='#545454'
                onChangeText={(value) => this.props.emailChange(value)}
                />
      
            <TouchableOpacity
                onPress={this.onSignUp}
                style={styles.signInButton}>
              <Text style={styles.signInButtonText}>Giriş Yap</Text>
            </TouchableOpacity>
            <View style={styles.questionsBox}>
                <Text style={styles.questionText}>Üye değil misin ?  </Text>
                  <TouchableOpacity>
                    <Text style={styles.loginButtonText}
                          onPress = {() => Actions.signUp()}> Üye Ol </Text>
                  </TouchableOpacity> 
            </View>      
                <View style={styles.greyLine}></View>
                <TouchableOpacity
                onPress={this.onSignUp}
                style={styles.googleSignInBtn}>
              <Text style={styles.googleSignInButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={this.onSignUp}
                style={styles.facebookSignInBtn}>
              <Text style={styles.facebookSignInBtnText}>Facebook</Text>
            </TouchableOpacity>
               
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
      // paddingTop: 15,
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
      height: PhoneHeight * 0.05,
      width: PhoneWidth * 0.5, 
      alignSelf: "center",
      marginTop: 10,
      justifyContent:"center",
      backgroundColor:'white',
      alignItems:'center',
      borderRadius:20,
      borderColor:'#FF0000',
      borderWidth:2
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
    }
});

export default signUp
