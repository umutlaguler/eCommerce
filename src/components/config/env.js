import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, TextInput, StyleSheet, Text, PixelRatio, Image, ActivityIndicator } from 'react-native';

export const API_BASE = 'https://ecommerce-backapp.herokuapp.com/api/v1'
export const PhoneHeight = Dimensions.get("window").height;
export const PhoneWidth  = Dimensions.get("window").width;

const scale = PhoneWidth / 320;
export const responsiveSize = (size) => {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }}
  
export const AppButton = ({ style, disabled, title, onPress, titleStyle, activityIndicator })=> {
    return(
        <TouchableOpacity
            style={[envStyles.appButton, style]}
            disabled={disabled}
            onPress={onPress}>
            {
                activityIndicator == true ? <ActivityIndicator color="#fff" /> :
                <Text style={[envStyles.appButtonTitle, titleStyle]}> {title} </Text>
            }
        </TouchableOpacity>
    )
}
export const AppInput = ({ icon, placeholder, onChangeText, style, secureTextEntry, keyboardType, value }) => {
    return (
        
            <TextInput
                keyboardType={keyboardType}
                placeholder={placeholder}
                autoCapitalize="none"
                onChangeText={onChangeText}
                scrollEnabled={false}
                secureTextEntry={secureTextEntry}
                value={value}
                placeholderTextColor={'#545454'}
                style={[envStyles.inputs, style]} />
        
    )
  }
export const envStyles = StyleSheet.create({
  appButton: {
      width: PhoneWidth * 0.85,
      alignItems: 'center',
      backgroundColor: '#ec3001',
      height: PhoneHeight * 0.045,
      borderRadius: 10,
      justifyContent: 'center'
  },
  appButtonTitle: {
      color: '#fff',
      fontSize: responsiveSize(12),
      fontWeight: "500",
  },
  inputs: {
      textAlign: 'center',
      height: "100%",
      width: "80%",
      color: '#000'
  },
  inputIcon: {
      width: responsiveSize(15),
      height: responsiveSize(15),
      marginLeft: 15,
      resizeMode: 'contain'
  },
  modalContainer: {
      width: "100%",
      height: PhoneHeight * 0.3,
      marginTop: PhoneHeight * 0.7,
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
  modalTopContent: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10
  },
  modalButtonTitle: {
      fontSize: responsiveSize(12),
      color: '#3385ff'
  }
})