import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,Button,Alert} from 'react-native';
import { PhoneWidth,PhoneHeight, responsiveSize } from '../../components/config/env';
import { removeToCart,removeAllCart, addToCart } from '../../actions/productsAction';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { color } from 'react-native-reanimated';
import { Actions } from 'react-native-router-flux';
 
  class cart extends Component {
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
                  uri : item.image
                }}/>  
          <View style= {styles.textInfoContainer}>
                <Text style= {styles.productNameTxt}>{item.title}</Text>
                <Text style= {styles.priceTxt}> {item.price} {item.amount} </Text>
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
            <TouchableOpacity
             onPress= {() => this.props.removeToCart(item) } >
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
  const createTwoButtonAlert = () =>
  Alert.alert(
    "SEPET",
    "Sepetinizdeki tüm ürünler boşaltılacak",
    [
      {
        text: "Hayır",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Evet", onPress :() =>{this.props.removeAllCart()} }
    ],
    { cancelable: false }
  );
    
    const {products, totalAmount} = this.props;
    console.log("sepetteki Ã¼rÃ¼nler: ", products)
    return (
      <View style= {styles.container}>
      {     //sepette Ã¼rÃ¼n bulunmadÄ±ÄŸÄ± durumlarÄ± kontrol eder tasarÄ±mÄ± eksik yapÄ±lacak 
        this.props.products.length > 0 ?
       <Text> </Text> 
        :<Text style= {styles.cartIsEmptyTxt}>Sepetinizde ürün bulunmamaktadır. </Text> 
      }
      <View style={styles.deleteAllContainer}>
          <TouchableOpacity 
            onPress= {createTwoButtonAlert}
            style= {styles.deleteAllBtn}> 
           <Image 
            style= {styles.deleteAllPhoto}
            source= {require("../../images/trash.png")}/>
          </TouchableOpacity>
        </View>
        
        <FlatList
              bounces={true}
              numColumns={1}
              data={products}
              renderItem={this.cartRenderItem}
              keyExtractor={item => item.id}
            /> 
        <View style= {styles.totalBtnContainer}>
          <View style= {styles.totalCartBtn}> 
            <Text style= {styles.totalTxt}>Toplam: {totalAmount}</Text>
          </View>
        </View>
        <View style= {styles.confirmBtnContainer}>
          <TouchableOpacity 
              onPress= {() => Actions.payment()}
              style= {styles.confirmCartBtn}> 
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
    sureModal: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center"
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
      //Ã¼rÃ¼n adÄ± ve fiyat bilgisinin kutusu
    textInfoContainer:{
      borderWidth:0,
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 0.24,
      paddingHorizontal:10,//saÄŸÄ±ndaki foto ile arasÄ±na 10px boÅŸluk verir
      justifyContent: "center",//dikeyde yazÄ±yÄ± ve fiyatÄ± ortalar
    },
    plusAndMinusContainer:{//artÄ± ve eksi sembollerinin kutusunu bir view e aldÄ±m ki marginsiz ortalayabileyim diye
      flexDirection:'row',// artÄ±, eksi, ve Ã§arpÄ±yÄ± yan yana dizer.
      marginTop: PhoneHeight*0.03//3'Ã¼nÃ¼ de dikeyde ortalar. 
    },
    allProducts:{
      borderWidth:0,
      height: PhoneHeight * 0.12,
      width: PhoneWidth * 1,
      justifyContent: "center",
    },
    imageContainer:{
      borderRadius: 24,
      flexDirection:'row',//Ä±mage containerÄ±n iÃ§indeki her ÅŸeyi yatay dizer!!!
    },
    productImages:{
      width: PhoneWidth * 0.2,
      height: PhoneHeight * 0.095,
      borderRadius: 24,
    },
    plusContainer:{
      borderWidth: 0,
      height: PhoneHeight * 0.025,
      paddingHorizontal:7,//yatayda hafif bosluk verir ki saÄŸdaki Ã§irkin gÃ¶rÃ¼nÃ¼m olmasÄ±n 
      justifyContent: "center",//artÄ± butonunu dikeyde ortalar
      alignItems: "flex-end"//artÄ± butonunun her ÅŸeyi (saÄŸa yaslar)!!!
    },
    minusContainer:{
      borderWidth: 0,
      marginBottom: PhoneHeight * 0.3,//- yi yukarÄ± cÄ±karabilmek iÃ§in yazÄ±ldÄ± baÅŸka bir yol bulamadÄ±m. Muhtemelen vardÄ±r. 
      width: PhoneWidth * 0.075,
      height: PhoneHeight * 0.025,
      paddingHorizontal:7,//yatayda hafif bosluk verir ki saÄŸdaki Ã§irkin gÃ¶rÃ¼nÃ¼m olmasÄ±n 
      justifyContent: "center",
      position: "absolute"
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
      borderWidth: 0,
      backgroundColor: "#00f0b8",
      // borderColor:"#00f0b8",
      width: PhoneWidth * 0.5,
      height: PhoneHeight * 0.06,
      borderRadius: 50,
      marginBottom: PhoneHeight * 0.02,//aÅŸaÄŸÄ±yla arasÄ±na cok hafif bosluk vermeye yarar
      alignSelf: "center",//kendini ort.
      alignItems:'center',//iÃ§indeki yazÄ±yÄ± yatayda ort.
      justifyContent:'center'//iÃ§indeki yazÄ±yÄ± dikeyde ort.
    },
    totalCartBtn:{
      borderWidth: 1,
      width: PhoneWidth * 0.35,
      height: PhoneHeight * 0.05,
      borderRadius: 50,
      borderColor: "#00f0b8",
      justifyContent:'center',//iÃ§indeki yazÄ±yÄ± dikeyde ort.
      marginBottom: PhoneHeight * 0.01,
      marginLeft: PhoneHeight * 0.3
    },
    confirmTxt:{
      color:"#fff",
      fontSize:responsiveSize(17)
      },
    totalTxt:{
      color:"#000",
      fontSize:responsiveSize(13),
      marginLeft: PhoneHeight * 0.01
    },
    deleteAllPhoto:{
      width: responsiveSize(26),
      height: responsiveSize(26),
    },
    deleteAllBtn:{
      padding:10
    },
    deleteAllContainer:{
      justifyContent:'flex-end',
      alignItems:'flex-end'
    },
    cartIsEmptyTxt:{
      alignSelf:'center',
      
    }
    })

    const mapStateToProps = state => {
      const { products, totalAmount  } = state.productsReducer;
      return {
        products,
        totalAmount
      }
    }
    
    export default connect(
      mapStateToProps,
      {
        removeToCart,
        removeAllCart,
        addToCart
      }
    )(cart)