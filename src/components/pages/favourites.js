import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';
import { PhoneWidth,PhoneHeight, responsiveSize } from '../../components/config/env';
import { FlatList } from 'react-native-gesture-handler';
import { fetchCategories, fetchSubCategories, fetchProducts, addToCart } from '../../actions/productsAction';
import { connect } from 'react-redux';
import {Tabs} from '../../router';
import { Actions } from 'react-native-router-flux';

class favourites extends Component {
  componentWillMount() {
    this.props.fetchSubCategories(this.props.cat_id)
  }
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  productRenderItem = ({ item }) => {
    return(
  <View style= {styles.allProducts}>
        <TouchableOpacity style= {styles.productContainer}>
            <View style= {styles.imageContainer}>
               <Image style= {styles.productImages} 
                      source={{uri : item.image}} />
            </View>
            <View style= {styles.productInfo} >
               <Text style= {{fontSize: responsiveSize(13)}}>{item.title}</Text>
               <Text>{item.desc}</Text>
            </View>
            <View style= {styles.priceTextContainer}>
               <Text style= {styles.priceTxt}> {item.price} {item.amount}</Text>
            </View>
        </TouchableOpacity> 
        <View style= {styles.plusButtonContainer}>
          <TouchableOpacity 
              onPress= {() => this.props.addToCart(item) } >
            <Image 
              style= {styles.plusIcon}
              source= {require("../../images/plus.png")} />
          </TouchableOpacity>
          
        </View>
  </View>
    )
  }

  subCategoriesRenderItem = ({item}) => {
    return(
      <View>
        <TouchableOpacity   
            onPress={() => this.props.fetchProducts(item.id)}
            style= {styles.horizontalCategoriesBtn}>
            <Text style= {styles.subCategoriesName}>{item.title}</Text>
        </TouchableOpacity>

      </View>
    )
  }

  render() {
    const { subCategoriesValue, productsValue, products } = this.props;
    console.log("ürün arrayi: ", products);
    return (
      <View style= {styles.container}>
        <View>
          <FlatList
            showsHorizontalScrollIndicator= {false}
            horizontal
            data= {subCategoriesValue}
            renderItem= {this.subCategoriesRenderItem}
            keyExtractor= {item => item.id}/> 
        </View>
        
        <View>
          <FlatList
            bounces={true}
            numColumns={3}
            data={productsValue}
            renderItem={this.productRenderItem}
            keyExtractor={item => item.id}/>          
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
    width: PhoneWidth * 0.3,
    height: PhoneHeight * 0.22,
    borderWidth:0.5,
    borderColor:"#a2a2a2",
    borderTopLeftRadius: 24,
    borderTopRightRadius:24,
    backgroundColor: "#fff",
    borderBottomColor: "#a2a2a2",
    marginLeft: PhoneHeight * 0.01,
    marginTop: PhoneHeight * 0.02,
  },
  plusButtonContainer:{
    width: PhoneWidth * 0.3,
    height: PhoneHeight * 0.05,
    backgroundColor: "#fff",
    borderColor: "#a2a2a2",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginLeft: PhoneHeight * 0.01,
    borderBottomWidth: 3,
    borderWidth:0.5
  },
  allProducts:{
    borderWidth:0,
  },
  priceTextContainer:{
    height: PhoneHeight * 0.03,
    width: PhoneWidth * 0.3,
    borderWidth:0,
  },
  priceTxt:{
    fontSize: responsiveSize(13),
    alignSelf:'flex-end',
    paddingRight:4,
  },
  imageContainer:{
    justifyContent: "flex-start",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "white"
  },
  productImages:{
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    width: PhoneWidth * 0.3,
    height: PhoneHeight * 0.1,
  },
  productInfo:{
    borderWidth:0,
    width: PhoneWidth*0.3,
  },
  plusIcon:{
    width: responsiveSize(20),
    height: responsiveSize(20),
    top: PhoneHeight * 0.01,
    alignSelf: "center",
  },
  horizontalCategories:{
    borderWidth: 1,
    alignSelf: "center",
    width: PhoneWidth ,
    height: PhoneHeight * 0.05,
    marginBottom: PhoneHeight * 0.9
  },
  horizontalCategoriesBtn:{
    borderWidth: 0,
    height: PhoneHeight * 0.05,
    width: PhoneHeight * 0.1,
    justifyContent: "center"
  },
  subCategoriesName:{
    textAlign: "center",
  }
})
const mapStateToProps = state => {
  const { categoriesValue, subCategoriesValue, productsValue, products ,piecesOfProducts } = state.productsReducer;
  return {
    categoriesValue,
    subCategoriesValue,
    productsValue,
    products,
    piecesOfProducts
  }
}
export default connect(
  mapStateToProps,
  {
    fetchCategories,
    fetchSubCategories,
    fetchProducts,
    addToCart
  }
)(favourites)