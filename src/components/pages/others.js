
import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PhoneHeight, PhoneWidth } from '../config/env';

export default class others extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style = {styles.container}> 
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.seperateBtn}><Text style={styles.btnTxt}>Bilgilerim</Text></TouchableOpacity>
        <TouchableOpacity style={styles.seperateBtn}><Text style={styles.btnTxt}>Önceki Siparişlerim</Text></TouchableOpacity>
        <TouchableOpacity style={styles.seperateBtn}><Text style={styles.btnTxt}>Adreslerim</Text></TouchableOpacity>
        <TouchableOpacity style={styles.seperateBtn}><Text style={styles.btnTxt}>Kartlarım</Text></TouchableOpacity>
        <TouchableOpacity style={styles.seperateBtn}><Text style={styles.btnTxt}>Uygulama Hakkında</Text></TouchableOpacity>
        <View style = {styles.logOutBtn}>
        <TouchableOpacity style={styles.seperateLogOut}><Text style={styles.logOutbtnTxt}>Çıkış yap</Text></TouchableOpacity>
      </View>
      </View>
     
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  buttons:{
    alignItems:'center',
    height: PhoneHeight * 0.8,
    paddingVertical:10,
    borderWidth:0,
    marginTop:20
  },
  seperateBtn:{
    alignItems:'center',
    borderWidth:1.5,
    borderColor:'#FE5F55',
    borderRadius:45,
    height:PhoneHeight*0.07,
    width:PhoneWidth*0.7,
    marginVertical:8
  },
  btnTxt:{
    fontSize:20,
    alignSelf:'center',
    color:'#FE5F55',
    marginTop:13
  },
  logOutBtn:{
    marginTop:'20%'
  },
  seperateLogOut:{
    borderColor:'#8F8F8F',
    alignItems:'center',
    borderRadius:45,
    borderWidth:1.5,
    height:PhoneHeight*0.07,
    width:PhoneWidth*0.5,
  },
  logOutbtnTxt:{
    color:'#8F8F8F',
    fontSize:20,
    textAlign:'center',
    alignSelf:'center',
    marginTop:11
  }

})