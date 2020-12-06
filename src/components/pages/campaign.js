import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Dimensions,Image,} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FlatList } from 'react-native-gesture-handler';
// import GlobalFont from 'react-native-global-font';

const data = [
  { id: "1", title: "this is a campaign", backgroundColor: '#fefddb',uri:'https://envato-shoebox-0.imgix.net/0d80/552a-aceb-4181-bf08-49c70144d9e5/Goods-35.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=2f6fc6c7c3d02481ddd5a74a401fc4f7' },
  { id: "2", title: "this is a campaign", backgroundColor: '#fbe8e7',uri:'https://envato-shoebox-0.imgix.net/8f42/9f4c-983e-4bf6-a731-22aaa077a810/IMG_7912.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=ee3910220eb35658fe4081fff890a79d' },
  { id: "3", title: "this is a campaign", backgroundColor: '#f2e5fd',uri:'https://envato-shoebox-0.imgix.net/673e/e016-3db3-46fd-880e-c15f03db6666/smporidge3.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=b7faa4619db6f2eba586f9a7fb36c98c' },
  { id: "4", title: "this is a campaign", backgroundColor: '#dff3fe',uri:'https://envato-shoebox-0.imgix.net/d7ee/ab79-15b1-4b4e-99ad-acbf947f3f0e/200102571A3173.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=90b6e1975a18ceee89f018fbc31c328d' },
  { id: "5", title: "this is a campaign", backgroundColor: '#f2e5fd',uri:'https://envato-shoebox-0.imgix.net/3c7a/f0a0-ffd7-4060-9305-00d5cb2e6c85/44986.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=bd9eaecbaa83cecfbd3fef6ee50a6170' },
]

const PhoneWidth  = Dimensions.get("window").width;
const PhoneHeight = Dimensions.get("window").height;

export default class campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

// componentDidMount() {
//     let fontName = 'AbrilFatface-Regular'
//     GlobalFont.applyGlobal(fontName)
// }
  campaignRenderItem=({item}) => {
    return(
    <View style = {styles.campaignBox}>
      <TouchableOpacity 
      onPress={() => Actions.campaignDetail()}
      style = {styles.campaignTouchable}>
        <View style={[styles.campaignWrapper, { backgroundColor: item.backgroundColor }]}>
          <Image
            style={styles.photoOfCampaign}
            source={{
              uri : item.uri
            }}
          />
         <Text style={styles.campaignTxt}> {item.title} </Text>
        </View>
      </TouchableOpacity>
    </View>
    )
  }
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.body}>
            <FlatList style = {styles.campaigns}
              data={data}
              renderItem={this.campaignRenderItem}
              style={{ maxHeight: PhoneHeight * 0.83 }}
            />
        </View> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  campaignTxt:{
    position:'absolute',
    zIndex:22,
    textAlign:'left'
  },
  body:{
    borderWidth:0,
    backgroundColor: "white",
    width: PhoneWidth * 0.92,//dokunma
    height: PhoneHeight * 0.8,//dokunma
    alignSelf: "center",
  },
  campaigns:{
    width:PhoneWidth * 0.9,
  },
  campaignBox:{
    width:PhoneWidth * 0.9,
    paddingVertical:'5%',
    borderRadius: 10,
    alignSelf: "center",
  },
  campaignTouchable:{

  },
  campaignWrapper:{
    height:PhoneHeight*0.2,
    justifyContent:'flex-end',
    borderRadius:20,
  },
  photoOfCampaign:{
    height:PhoneHeight*0.2,
    width:PhoneWidth*0.9,
    borderRadius:20, 
  }

})