import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { PhoneWidth,PhoneHeight, responsiveSize } from '../../components/config/env';

export default class myProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style= {styles.container}>
          <View style= {styles.inputsContainer}>
            <TouchableOpacity style= {styles.inputs}>
                <Text>aa</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.inputs}>
                <Text>aa</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.inputs}>
                <Text>aa</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.inputs}>
                <Text>aa</Text>
            </TouchableOpacity>
          </View>
          <View style= {styles.genderContainer}>
            <Text>Kadın</Text>
            <TouchableOpacity 
                style= {{
                    height: responsiveSize(15),
                    width: responsiveSize(15),
                    borderWidth:1,
                    borderRadius: 60,
                    backgroundColor: "red"
                }}>
            </TouchableOpacity>
            <Text>Erkek</Text>
            <TouchableOpacity 
                style= {{
                    height: responsiveSize(15),
                    width: responsiveSize(15),
                    borderWidth:1,
                    borderRadius: 60,
                    backgroundColor: "red"
                }}>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
    },
    inputsContainer:{
        borderWidth: 1,
        marginTop: PhoneHeight * 0.05
    },
    inputs:{
        borderWidth: 1,
        borderColor: "#707070",
        margin: PhoneHeight * 0.015,
        borderRadius: 12,
        height: PhoneHeight * 0.06,
        width: PhoneWidth * 0.75
    },
    genderContainer:{
        borderWidth: 1,
        marginTop: PhoneHeight * 0.02,
        width: PhoneWidth * 0.75,
        height: PhoneHeight * 0.05,
        flexDirection: "row"
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
})