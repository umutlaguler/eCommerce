
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PhoneHeight, PhoneWidth } from '../config/env';

export default class campaignDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Image 
        style = {styles.campaignPhoto}
        source={{
                    uri:'https://www.tunaliyapi.com.tr/wp-content/uploads/2018/01/tunal%C4%B1yap%C4%B1-icon-1.png'}}
        />
        <Text style = {styles.campaignTxt}>Hello! This is a generator for text fonts of the "cool" variety. I noticed people were trying to find a generator like fancy letters, but were ending up on actual font sites rather than generators of copy-paste text like this one. So currently this is basically a duplicate of the above, but I think I'll try to collect a few more "cool" text fonts, like the old enlgish one, and specialise this a bit. If you're wondering how one produces cool text fonts like you see above, it's fairly simple (but maybe not what you'd expect). Basically, the text that gets generated isn't actually a font - it's a bunch of symbols that are in the unicode standard. You're reading symbols that are in the unicode standard right now - the</Text>
        <TouchableOpacity style={styles.campaignBtn}><Text style={styles.campaignBtnTxt}>GİT</Text></TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    campaignPhoto:{
        height:PhoneHeight*0.3,
        width:PhoneWidth*1
    },
    campaignTxt:{
        borderWidth:0,
        margin:'8%'
    },
    campaignBtn:{
       marginTop:'10%', 
       borderWidth:0,
       width:PhoneWidth*0.33,
       height:PhoneHeight*0.048,
       borderRadius:30,
       backgroundColor:'#FDCA40',
       alignItems:'center',
    },
    campaignBtnTxt:{
        marginTop:10,
        fontSize:20
    }

})