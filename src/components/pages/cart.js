import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { PhoneWidth,PhoneHeight, responsiveSize } from '../../components/config/env';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { color } from 'react-native-reanimated';

const data = [
  { id:"1", productName: "JELLY", productDetail: "Strawberry", uri:"https://envato-shoebox-0.imgix.net/1bc1/83fc-c294-4461-a5a1-4e1c3fed951f/IMG_2188.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1200&s=95d9c3862638f4d7b0c05f8ebd2f57af"},
  { id:"2", productName: "JELLY", productDetail: "Strawberry", uri:"https://envato-shoebox-0.imgix.net/1bc1/83fc-c294-4461-a5a1-4e1c3fed951f/IMG_2188.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1200&s=95d9c3862638f4d7b0c05f8ebd2f57af"},
 ]

export default class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
cartRenderItem = ({ item }) => {
    return(
<View style= {styles.allProducts}>
  <View style= {styles.productContainer}>
    <View style= {styles.imageContainer}>
          <Image style= {styles.productImages} 
                source={{
                  uri : item.uri
                }}/>  
          <View style= {styles.textInfoContainer}>
                <Text style= {styles.productNameTxt}>{item.productName}</Text>
                <Text style= {styles.priceTxt}> 55₺ </Text> 
          </View>  
      <View style= {styles.plusAndMinusContainer}>  
          <View style= {styles.plusButtonContainer}>
                  <View style= {styles.plusContainer}>
                    <TouchableOpacity >
                      <Image 
                        style= {styles.plusIcon}
                        source= {require("../../images/plus.png")}/>
                    </TouchableOpacity>
                  </View>
              <View style= {styles.minusContainer}>
                  <TouchableOpacity >
                    <Image 
                      style= {styles.minusIcon}
                      source= {require("../../images/minus.png")}/>
                  </TouchableOpacity>
              </View>  
          </View> 
          <View style= {styles.deleteContainer}>
            <TouchableOpacity >
              <Image 
                style= {styles.deleteIcon}
                source= {require("../../images/x.png")}/>
             </TouchableOpacity>
          </View>   
      </View> 
    </View>
  </View>
</View>
    )
  }
  render() {
    return (
      <View style= {styles.container}>
        <FlatList
              bounces={true}
              numColumns={1}
              data={data}
              renderItem={this.cartRenderItem}
              keyExtractor={item => item.id}
            /> 
        <View style= {styles.confirmBtnContainer}>
          <TouchableOpacity style= {styles.confirmCartBtn}> 
            <Text style= {styles.confirmTxt}>Sepeti Onayla</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    productContainer:{
      alignSelf: "center",
      width: PhoneWidth * 0.9,
      height: PhoneHeight * 0.10,
      borderWidth:1.5,
      borderColor:"#00f0b8",
      borderRadius: 24,
      backgroundColor: "#fff",
    },
    plusButtonContainer:{
      height: PhoneHeight * 0.03,
      width: PhoneWidth * 0.25,
      borderWidth:2,
      borderRadius: 24,
      borderColor: "#00f0b8",
    },
      //ürün adı ve fiyat bilgisinin kutusu
    textInfoContainer:{
      borderWidth:0,
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 0.24,
      paddingHorizontal:10,//sağındaki foto ile arasına 10px boşluk verir
      justifyContent: "center",//dikeyde yazıyı ve fiyatı ortalar
    },
    plusAndMinusContainer:{//artı ve eksi sembollerinin kutusunu bir view e aldım ki marginsiz ortalayabileyim diye
      flexDirection:'row',// artı, eksi, ve çarpıyı yan yana dizer.
      marginTop: PhoneHeight*0.03//3'ünü de dikeyde ortalar. 
    },
    allProducts:{
      borderWidth:0,
      height: PhoneHeight * 0.12,
      width: PhoneWidth * 1,
      justifyContent: "center",
    },
    imageContainer:{
      borderRadius: 24,
      flexDirection:'row',//ımage containerın içindeki her şeyi yatay dizer!!!
    },
    productImages:{
      width: PhoneWidth * 0.2,
      height: PhoneHeight * 0.095,
      borderRadius: 24,
    },
    plusContainer:{
      borderWidth: 0,
      height: PhoneHeight * 0.025,
      paddingHorizontal:7,//yatayda hafif bosluk verir ki sağdaki çirkin görünüm olmasın 
      justifyContent: "center",//artı butonunu dikeyde ortalar
      alignItems: "flex-end"//artı butonunun her şeyi (sağa yaslar)!!!
    },
    minusContainer:{
      borderWidth: 0,
      position:'absolute',
      marginBottom:PhoneHeight*0.3,//- yi yukarı cıkarabilmek için yazıldı başka bir yol bulamadım. Muhtemelen vardır. 
      width: PhoneWidth * 0.075,
      height: PhoneHeight * 0.025,
      paddingHorizontal:7,//yatayda hafif bosluk verir ki sağdaki çirkin görünüm olmasın 
      justifyContent: "center",
    },
    deleteContainer:{
      height: PhoneHeight * 0.027,
      width: PhoneWidth * 0.05,
      borderWidth:0,
      paddingHorizontal:PhoneWidth*0.12,
      borderColor: "black",
      justifyContent:'center'   
    },
    plusIcon:{
      width: responsiveSize(12),
      height: responsiveSize(12),
    },
    minusIcon:{
      width: responsiveSize(12),
      height: responsiveSize(12),
    },
    deleteIcon:{
      width: responsiveSize(12),
      height: responsiveSize(12),
    },
    confirmCartBtn:{
      borderWidth: 2,
      borderColor:"#00f0b8",
      width: PhoneWidth * 0.5,
      height: PhoneHeight * 0.06,
      borderRadius: 50,
      marginBottom:PhoneHeight*0.02,//aşağıyla arasına cok hafif bosluk vermeye yarar
      alignSelf: "center",//kendini ort.
      alignItems:'center',//içindeki yazıyı yatayda ort.
      justifyContent:'center'//içindeki yazıyı dikeyde ort.
    },
    confirmTxt:{
      color:"#00f0b8",
      fontSize:responsiveSize(17)
      }
    })