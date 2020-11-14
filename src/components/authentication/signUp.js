import React, { Component } from 'react';
import {Text,TouchableOpacity,TextInput,View ,StyleSheet,Image,key,Modal,ScrollView,Keyboard} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { PhoneHeight,PhoneWidth,responsiveSize,envStyles,AppInput } from '../config/env';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import {  } from '../../actions/authenticationAction';
import { color } from 'react-native-reanimated';
// import AsyncStorage from '@react-native-community/async-storage';
import { userAgreement } from '../helpComponents/userAgreement';

 class signUp extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      data:['Erkek','Kadın'],
      genderStatus: null,
      checked:null,
      checkedContract:null,
      contractStatus: null,
      userAgremeentStatus: false,
      userAgreementModalVisible: false,
      fullNameValue:        "",
      emailValue:           "",
      passwordValue:        "",
      confirmPasswordValue: "",
      phoneNumberValue:     ""
    }
  }
 

    onfullNameChanged = (value) => this.setState({ fullNameValue: value })
    onEmailChanged = (value) => this.setState({ emailValue: value })
    onPhoneNumberChanged = (value) => this.setState({phoneNumberValue: value})
    onPasswordChanged = (value) => this.setState({ passwordValue: value })
    onBirthdayChanged = (value) => this.setState({birthDayValue: value})
    onConfirmPasswordChanged = (value) => this.setState({ confirmPasswordValue: value })

    onSignUp = () => this.props.signUp(this.state.fullNameValue, this.state.emailValue, this.state.phoneNumberValue, this.state.passwordValue, this.state.birthDayValue )
  // onSignUp = () => {
  //   AsyncStorage.getItem("device").then((token) => {
  //     console.log("token", token)
  //     this.props.signUpClicked(this.props.fullNameValue, this.props.emailValue, this.props.passwordValue,token)
  //   })
  // }
    render() {
      const { passwordValue, confirmPasswordValue, userAgremeentStatus, userAgreementModalVisible } = this.state;
      const errorMessageConfirmPassword = passwordValue != confirmPasswordValue ? <Text style={styles.errors}> {"Şifreniz eşleşmiyor."} </Text>:null
      //buraya gelecek olan değerler var şifre eşleşme durumu vs.
      


        return (
          <View style={styles.background}>
            <View style={styles.container}>
           <Image
           style={styles.logoImage}
           source={require('../../images/newLogo.png')}
         />
      
            <AppInput 
                style={styles.input}
                placeholder='Ad Soyad'
                placeholderTextColor='#545454'
                onChangeText={this.onfullNameChanged}
                />
            <TextInput 
                style={styles.input}
                placeholder='Telefon'
                placeholderTextColor='#545454'
                onChangeText={this.onPhoneNumberChanged}
                />
             <TextInput 
                style={styles.input}
                placeholder='Doğum Tarihi'
                placeholderTextColor='#545454'
                onChangeText={this.onBirthdayChanged}
                />
             <TextInput 
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='#545454'
                onChangeText={this.onEmailChanged}
                />
            <TextInput 
                // secureTextEntry 
                style={styles.input}
                placeholder='Şifre'
                placeholderTextColor='#545454'
                onChangeText={this.onPasswordChanged}
                
                />
             <TextInput
                // secureTextEntry 
                style={styles.input}
                placeholder='Şifre Tekrar'
                placeholderTextColor='#545454'
                onChangeText={this.onConfirmPasswordChanged}
                
                />
                {errorMessageConfirmPassword}      
                 <View style={{ flexDirection: 'row'}}>
             { 
             this.state.data.map((data,key)=>{
               return(

                <View style={styles.genderBoxOut}>
                   <View style={styles.sexCheckBoxes}>
              {
              this.state.checked==key?
              <TouchableOpacity style={styles.sexCheckBtn}>
              <Image
                style={styles.sexCheckBoxImg}
                source={require('../../images/circle.png')}
              />
                <Text style={styles.genderTxt}>{data}</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity 
              onPress={()=>{this.setState({checked:key})}}
              style={styles.sexCheckBtn}>
              <Image
                style={styles.sexCheckBoxImg}
                source={require('../../images/unselected.png')}
              />
                <Text style={styles.genderTxt}>{data}</Text>
              </TouchableOpacity>

              }
              </View> 
                 </View> 
               )
             })
             }
                 </View> 
               
                 <View style={styles.userAgreement}>
                      <TouchableOpacity
                          activeOpacity={0.5}
                          onPress={() => this.setState(prevState => ({ userAgremeentStatus: !prevState.userAgremeentStatus })) }
                          style={styles.checkBox}>
                          {
                              userAgremeentStatus == true ?
                              <Image style={styles.checkBoxIcon} source={require('../../images/circle.png')} />:null
                          }
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.setState({ userAgreementModalVisible: true })}>
                          <Text style={{ color: '#2098CE'}}> Kullanıcı Sözleşmesi </Text>
                      </TouchableOpacity>
                      <Text>onaylıyorum </Text>
                  </View>        
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={userAgreementModalVisible}
                    onRequestClose={() => {
                        this.setState({ userAgreementModalVisible: false })
                    }}>
                    <View style={styles.userAgreementModalContainer}>
                        <View style={styles.userAgreementModalTopContent}>
                            <TouchableOpacity onPress={() => this.setState({ userAgreementModalVisible: false })}>
                                <Text style={envStyles.modalButtonTitle}> Kapat </Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <Text style={{ fontSize: responsiveSize(18), fontWeight: "500", textAlign: 'center' }}> KULLANICI SÖZLEŞMESİ</Text>
                            <Text style={{ marginLeft: 10, textAlign: 'left', marginBottom: 20 }}> {userAgreement}</Text>
                        </ScrollView>
                    </View>
                </Modal>

            <TouchableOpacity
                disabled={userAgremeentStatus == true ? false:true}
                onPress={this.onSignUp}
                style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}> Üye Ol </Text> 
            </TouchableOpacity>
                <Text style={styles.questionText}>Hesabın var mı ? 
                    <TouchableOpacity style={styles.logInBtn}>
                    <Text style={styles.loginButtonText}
                          onPress = {() => Actions.signIn()}> Giriş Yap</Text>
                           </TouchableOpacity>
               </Text>
              
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
    errors: {
      color: '#ec5341',
      fontSize: responsiveSize(8),
      paddingBottom:5
  },
    sexCheckBoxImg:{
      width: responsiveSize(14),
      height: responsiveSize(14),
      borderWidth:2,
      borderRadius:30
    },
    sexCheckBtn:{
      flexDirection:'row',
    },
    sexCheckBoxes:{
      borderWidth:1,
      paddingLeft:'10%',
      borderWidth:0, 
      flexDirection:'row',
    },
    signUpButton:{
      height: PhoneHeight * 0.05,
      width: PhoneWidth * 0.5, 
      alignSelf:"center",
      marginTop: 10,
      justifyContent:"center",
      backgroundColor:'black',
      borderRadius:14
    },
    signUpButtonText:{
      color: "white",
      textAlign: "center",
      fontSize: responsiveSize(14),
    },
    userAgreement: {
      paddingTop: '20%',
      alignItems: 'center',
      flexDirection: 'row',
  },
    questionText:{
      fontSize: responsiveSize(11),
      color:'#545454',
      // borderWidth:1,
      height: PhoneHeight * 0.023, 
    },
    checkBox: {
      width: responsiveSize(13),
      height: responsiveSize(13),
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
  },
    checkBoxIcon: {
      width: responsiveSize(10),
      height: responsiveSize(10),
  },
    login:{
      color: "#445c8b"
    },                                                     
    genderBoxOut:{
      borderWidth:0,
      flexDirection: 'row'
    },
    genderTxt:{
      paddingLeft:5,
      color:'#545454'
    },
    communicationTxt:{
      fontSize: responsiveSize(8),
    },
    logInBtn:{
      paddingTop:11,
      fontSize: responsiveSize(10),
      color:'black',
      // borderWidth:1,
      height: PhoneHeight * 0.06, 
    },
    userAgreementModalContainer: {
      width: "100%",
      height: PhoneHeight * 0.7,
      marginTop: PhoneHeight * 0.3,
      backgroundColor: '#fff',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
      elevation: 15,
  },
  userAgreementModalTopContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10
},
});

export default signUp


