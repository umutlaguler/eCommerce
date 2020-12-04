
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Dimensions,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const data = [
  { id: "1", title: "this is a campaign", backgroundColor: '#fefddb' },
  { id: "2", title: "this is a campaign", backgroundColor: '#fbe8e7' },
  { id: "3", title: "this is a campaign", backgroundColor: '#f2e5fd' },
  { id: "4", title: "this is a campaign", backgroundColor: '#dff3fe' },
  { id: "5", title: "this is a campaign", backgroundColor: '#f2e5fd' },
]

const PhoneWidth  = Dimensions.get("window").width;
const PhoneHeight = Dimensions.get("window").height;

export default class campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  campaignRenderItem=({item}) => {
    return(
    <View style = {styles.campaignBox}>
      <TouchableOpacity style = {styles.campaignTouchable}>
        <View style={[styles.campaignWrapper, { backgroundColor: item.backgroundColor }]}>
          <Image
            style={styles.photoOfCampaign}
            source={{
              uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
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
    alignItems:'center',
    borderRadius:20
  },
  photoOfCampaign:{
    height:40,
    width:40
  }

})