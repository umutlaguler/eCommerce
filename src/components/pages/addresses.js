import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Dimensions,Image,} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FlatList } from 'react-native-gesture-handler';
import GlobalFont from 'react-native-global-font';

const data = [
  { id: "1", desc: "2000 Evler Mahallesi",item:"Ev", backgroundColor: 'white',uri:'https://envato-shoebox-0.imgix.net/0d80/552a-aceb-4181-bf08-49c70144d9e5/Goods-35.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=2f6fc6c7c3d02481ddd5a74a401fc4f7' },
  { id: "2", desc: "ProjectXr Döşeme Mahallesi",item:"Ev", backgroundColor: 'white',uri:'https://envato-shoebox-0.imgix.net/8f42/9f4c-983e-4bf6-a731-22aaa077a810/IMG_7912.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=ee3910220eb35658fe4081fff890a79d' },
  { id: "3", desc: "100.Yıl Mahallesi",item:"İş Yeri", backgroundColor: 'white',uri:'https://envato-shoebox-0.imgix.net/673e/e016-3db3-46fd-880e-c15f03db6666/smporidge3.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=b7faa4619db6f2eba586f9a7fb36c98c' },
]

const PhoneWidth  = Dimensions.get("window").width;
const PhoneHeight = Dimensions.get("window").height;

export default class addresses extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

componentDidMount() {
    let fontName = 'Segoe UI'
    GlobalFont.applyGlobal(fontName)
}
campaignRenderItem=({item}) => {
  return(
    <View style = {styles.campaignBox}>
      <TouchableOpacity 
      onPress={() => Actions.campaignDetail()}
      style = {styles.campaignTouchable}>
        <View style={[styles.campaignWrapper, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.campaignTxt}> {item.item} </Text>
          <Image
            style={styles.photoOfCampaign}
            source={require('../../images/ellipsis.png')}
          />
         <Text style={styles.campaignTxt}> {item.desc} </Text>
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
        <View style= {styles.confirmBtnContainer}>
        
          <TouchableOpacity style= {styles.confirmCartBtn}> 
            <Text style= {styles.confirmTxt}>Onayla</Text>
          </TouchableOpacity>
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
    textAlign:'left',
    fontFamily:'Segoe UI',
    fontSize:25,
    color:'white'
  },
  body:{
    borderWidth:0,
    backgroundColor: "white",
    width: PhoneWidth * 0.92,//dokunma
    height: PhoneHeight * 0.8,//dokunma
    alignSelf: "center",
  },
  campaignBox:{
    borderWidth:1,
    width:PhoneWidth * 0.9,
    paddingVertical:'4%',
    marginVertical:PhoneHeight*0.01,
    borderRadius: 10,
    alignSelf: "center",
    borderColor:'#00000029'
  },
  campaignWrapper:{
    height:PhoneHeight*0.07,
    justifyContent:'flex-end',
    borderRadius:20,
  },
  photoOfCampaign:{
    marginLeft:'5%',
    height:PhoneHeight*0.02,
    width:PhoneWidth*0.08,
    borderRadius:20, 
  },
  confirmCartBtn:{
    borderWidth: 0,
    backgroundColor:"#FE5F55",
    width: PhoneWidth * 0.5,
    height: PhoneHeight * 0.06,
    borderRadius: 50,
    marginBottom:PhoneHeight*0.02,//aşağıyla arasına cok hafif bosluk vermeye yarar
    alignSelf: "center",//kendini ort.
    alignItems:'center',//içindeki yazıyı yatayda ort.
    justifyContent:'center'//içindeki yazıyı dikeyde ort.
  },
  confirmTxt:{
    color:'white'
  },
  campaignTxt:{
    color:'#FE5F55'
  }

})