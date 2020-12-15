import React, { Component } from 'react';
import {Text,TouchableOpacity,TextInput,View ,StyleSheet,Image,key,Modal,ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { PhoneHeight,PhoneWidth,responsiveSize,envStyles,AppInput } from '../config/env';
import { signUp } from '../../actions/authenticationAction';
import { color } from 'react-native-reanimated';
// import AsyncStorage from 'react-native';
import { userAgreement } from '../helpComponents/userAgreement';
const data =  [
  {id:"1" , title: "Kadın"},
  {id:"2" , title: "Erkek"}
]
 class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state={
      fullNameValue:"",
      phoneNumberValue:"",
      birthdayValue:"",
      emailValue:"",
      passwordValue:"",
      confirmPasswordValue:"",
      checkedContract:null,
      contractStatus: null,
      userAgremeentStatus: false,
      userAgreementModalVisible: false,
      gender_id: "",
      genderStatus:"",
      selectedRadio: false,
    }
  }
  genderRenderItem = ({ item }) => {
    return(
      <View style= {styles.radioButtonsContainer}>
        <TouchableOpacity 
          style= {{
            height: responsiveSize(15),
            width: responsiveSize(15),
            borderWidth:1,
            borderRadius: 60,
            margin: PhoneHeight * 0.005,
            backgroundColor: ( this.state.gender_id == item.id ) ? "black" : "white"
          }}
          onPress= {( gender_id ) => this.setState({
            genderStatus:item.title,
            gender_id: item.id,
            selectedRadio: true
          })}>
        </TouchableOpacity>
        <Text style= {styles.gender}>{item.title}</Text>
      </View>
  )
  }
  onfullNameChanged = (value) =>this.setState({fullNameValue: value})
  onPhoneNumberChanged = (value) =>this.setState({phoneNumberValue: value})
  onBirthdayChanged = (value) =>{this.setState({birthdayValue: value})
  }
  onEmailChanged = (value) => this.setState({emailValue: value})
  onPasswordChanged = (value) => this.setState({passwordValue: value})
  onGenderChanged = (value) => this.setState({gender_id: value})
  onConfirmPasswordChanged = (value) => this.setState({confirmPasswordValue: value})

  onSignUp = () => {
    console.log("bastı mı ");
    console.log(this.state.gender_id)
    this.props.signUp(this.state.fullNameValue,this.state.phoneNumberValue,this.state.birthdayValue, this.state.emailValue,this.state.passwordValue, this.state.genderStatus)
    }
  render() {
    const { fullNameErrorValue, phoneErrorValue, passwordErrorValue,} = this.props;
    const { passwordValue, confirmPasswordValue, userAgremeentStatus, userAgreementModalVisible } = this.state;
    const errorMessageFullName =  fullNameErrorValue ? <Text style={styles.errors}> {  fullNameErrorValue} </Text>:null
    const errorMessagePhone = phoneErrorValue ? <Text style={styles.errors}> {phoneErrorValue} </Text>:null
    const errorMessagePassword = passwordErrorValue ? <Text style={styles.errors}> { passwordErrorValue} </Text>:null
    const errorMessageConfirmPassword = passwordValue != confirmPasswordValue ? <Text style={styles.errors}> {"Şifreniz eşleşmiyor."} </Text>:null
  //buraya gelecek olan değerler var şifre eşleşme durumu vs.
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require('../../images/newLogo.png')}/>
        <AppInput 
          style={styles.input}
          placeholder='Ad Soyad'
          placeholderTextColor='#545454'
          onChangeText={this.onfullNameChanged}/>
          {errorMessageFullName}
        <TextInput 
          maxLength={10}
          keyboardType = 'numeric'
          autoCorrect={true}
          style={styles.input}
          placeholder='Telefon'
          placeholderTextColor='#545454'
          onChangeText={this.onPhoneNumberChanged}/>
          {errorMessagePhone}
        <TextInput 
          maxLength={8}
          keyboardType = 'numeric'
          style={styles.input}
          placeholder='GG/AA/YYYY'
          placeholderTextColor='#545454'
          onChangeText={this.onBirthdayChanged}/>
        <TextInput 
          keyboardType = 'email-address'
          style={styles.input}
          placeholder='Email'
          placeholderTextColor='#545454'
          onChangeText={this.onEmailChanged} />
        <TextInput 
          // secureTextEntry 
          style={styles.input}
          placeholder='Şifre'
          placeholderTextColor='#545454'
          onChangeText={this.onPasswordChanged} />
          {errorMessagePassword}
        <TextInput
          // secureTextEntry 
          style={styles.input}
          placeholder='Şifre Tekrar'
          placeholderTextColor='#545454'
          onChangeText={this.onConfirmPasswordChanged}/>
          {errorMessageConfirmPassword}
       <View style={{ flexDirection: 'row' }}>
        <FlatList // listing category  
              data={data}
              renderItem={this.genderRenderItem}
              keyExtractor={item => item.id}/>
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
        onRequestClose={() => {this.setState({ userAgreementModalVisible: false })}}>
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
                onPress = {() => Actions.login()}> Giriş Yap
          </Text>
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
      marginTop: PhoneHeight * 0.1,
      width: responsiveSize(100),
      height: responsiveSize(100),
      resizeMode: "contain",
      alignSelf: "center"
    },
  container:{
      flex: 1,
      height: PhoneHeight * 0.50,  
      alignItems: "center",
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
      paddingTop: '10%',
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
  radioButtonsContainer:{
    flexDirection: "row",
    justifyContent:'center'
    },
  radio:{
    height: responsiveSize(15),
    width: responsiveSize(15),
    borderWidth:1,
    borderRadius: 60,
    margin: PhoneHeight * 0.005,
    },
  gender:{
    marginTop: PhoneHeight * 0.005,
    },
  errors: {
    color: '#ec5341',
    fontSize: responsiveSize(13),
    },
});
const mapStateToProps = (state) => {
  const { fullNameValue,phoneNumberValue,birthDayValue,emailValue,passwordValue,gender_id } = state.authenticationReducer;
  return {
     fullNameValue,
     phoneNumberValue,
     birthDayValue,
     emailValue,
     passwordValue,
     gender_id  
  }
}
export default connect(
  mapStateToProps,
  {
    signUp
  }
)(SignUp)