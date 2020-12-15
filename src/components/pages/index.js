import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Modal, SafeAreaView ,Dimensions,ScrollView, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchCategories } from '../../actions/productsAction';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};
const data = [
    { id: "1", title: "bu bir kampanya", backgroundColor: '#fefddb',uri:'https://envato-shoebox-0.imgix.net/0d80/552a-aceb-4181-bf08-49c70144d9e5/Goods-35.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=2f6fc6c7c3d02481ddd5a74a401fc4f7'  },
    { id: "2", title: "bu bir kampanya", backgroundColor: '#fbe8e7',uri:'https://envato-shoebox-0.imgix.net/8f42/9f4c-983e-4bf6-a731-22aaa077a810/IMG_7912.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=ee3910220eb35658fe4081fff890a79d'},
    { id: "3", title: "bu bir kampanya", backgroundColor: '##f2e5fd', uri:'https://envato-shoebox-0.imgix.net/673e/e016-3db3-46fd-880e-c15f03db6666/smporidge3.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=b7faa4619db6f2eba586f9a7fb36c98c' },
    { id: "4", title: "bu bir kampanya", backgroundColor: '#dff3fe', uri:'https://envato-shoebox-0.imgix.net/0d80/552a-aceb-4181-bf08-49c70144d9e5/Goods-35.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=2f6fc6c7c3d02481ddd5a74a401fc4f7' },
    { id: "5", title: "bu bir kampanya", backgroundColor: '#f2e5fd' ,uri:'https://envato-shoebox-0.imgix.net/673e/e016-3db3-46fd-880e-c15f03db6666/smporidge3.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=b7faa4619db6f2eba586f9a7fb36c98c'},
  ]

const PhoneWidth  = Dimensions.get("window").width;
const PhoneHeight = Dimensions.get("window").height;
const numColumns = 4;

 class index extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }
  constructor(){
    super();
    this.state = {
      page:1,
    }
  }
  getMoreData = () =>{
    this.setState(
      {
        page: this.state.page + 1
      },
      () =>{
        this.catRenderItem()
      }
    )
  }
  cardRenderItem = ({ item }) => {
    return (
      <TouchableOpacity style = {styles.seperateCards}>
      <View style={[styles.cardWrapper, { backgroundColor: item.backgroundColor }]}>
      <Image
                    style={{ borderRadius:26, height: PhoneHeight * 0.25, width: PhoneWidth * 0.8,}}
                        source={{
                          uri : item.uri
                        }}
                    />
        <Text style={styles.cardTitle}> {item.title} </Text>
      </View>
      </TouchableOpacity>
      
    )
  }
    catRenderItem = ({ item }) => {
      return (
        <View style = {styles.allCategories}>
          <TouchableOpacity 
            onPress={() => this.props.fetchCategories(item.id) & Actions.favourites({cat_id: item.id})
            }
             style = {styles.seperateCategoriesBtn}>
            <View style={[styles.catWrapper, { backgroundColor: item.backgroundColor }]}>
              <Image
              style={{ height: PhoneHeight * 0.1, width: PhoneWidth * 0.21, borderRadius: 10}}
              source={{
                uri : item.image
              }}/>
              <Text style={styles.catTitle}> {item.title} </Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
    render() {
      // console.log("categ id: ", this.state.cat_id)
      const { categoriesValue, cat_id} = this.props;
      return (    
    <View style={styles.container}> 
            <TouchableOpacity 
            style={styles.adressBtn}
            onPress={() => Actions.addresses()}
            >
            <Text style={styles.textAdress}>
                    ProjectXR Yenikent Sabuncu Sitesi DÃ¶ÅŸeme 
                </Text>
            <Image
           style={styles.arrowDown}
           source={require('../../images/arrowDown.png')}
         />
            </TouchableOpacity>
            <View style = {styles.shopInfos}>

            </View>
    
        <View style={styles.allCards}>
           <FlatList style={styles.allCards}
            keyExtractor={(item) => item.id}
            data={data}
            style={{ maxHeight: PhoneHeight * 0.23 }}
            horizontal
            bounces={false}
            snapToAlignment={"center"}
            decelerationRate={0}
            snapToInterval={PhoneWidth - 60} // default -60
            contentInset={{
              top: 0,
              left: 30, // default 30
              bottom: 0,
              right: 30, // default 30
            }}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={this.cardRenderItem} />
            
        <View style={styles.mainButtons}>
            <TouchableOpacity 
            onPress={() => Actions.opportunity()}
            style={styles.opportunityBtn}>
                <Text >fırsat</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={() => Actions.favourites()}
            style={styles.favouriteBtn}>
                <Text>favori</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={() => Actions.newProducts()}
            style={styles.newProductsBtn}>
                <Text>yeni</Text>
            </TouchableOpacity>
        </View>
        <Text style={{color:'grey', margin:4.5}}>Kategoriler</Text>
         <View style = {styles.allCategories}>
                <FlatList style = {styles.listingCategories}
                scrollEnabled
                data={categoriesValue}  
                numColumns = {numColumns}
                renderItem={this.catRenderItem}
                bounces={false}
                // onEndReached={}
                // onEndReachedThreshold = {7}
                contentContainerStyle
                showsHorizontalScrollIndicator={false}
                />
            </View>
            </View>   
     </View>
                
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    adressBtn:{
      alignSelf:'center',
      height: PhoneHeight * 0.038,
      width: PhoneWidth * 0.99,
      borderWidth:0,
      flexDirection:'row',
      backgroundColor:'#f6f8fa'
    },
    allCards:{
      width:PhoneWidth * 1,
      height: PhoneHeight * 0.7,
    },
    arrowDown:{
      height: PhoneHeight * 0.05,
      width: PhoneWidth * 0.06,
      marginLeft:'20%',
      marginTop:'-2%'         
    },
    textAdress:{
      marginTop:'2%'
    },
    cardWrapper:{
      width: PhoneWidth - 80, // default -80
      margin: 10,
      height: PhoneHeight * 0.22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:20
    },
    cardTitle: {
      fontSize: 20
    },
    shopInfos:{
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 1,
      borderBottomWidth:1,
      borderLeftWidth:1,
      borderRightWidth:1,
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30
    },
    opportunityBtn:{
      justifyContent:'center',
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 0.26,
      backgroundColor:'red',
      borderRadius:14,
      alignItems:'center',
      flexDirection:'row',
    },
    favouriteBtn:{
      justifyContent:'center',
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 0.26,
      backgroundColor:'pink',
      borderRadius:14,
      alignItems:'center',
      flexDirection:'row',
    },
    newProductsBtn:{
      justifyContent:'center',
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 0.26,
      backgroundColor:'green',
      borderRadius:14,
      alignItems:'center',
      flexDirection:'row',
    },
    mainButtons:{
           flexDirection:'row',
           justifyContent:'space-around',
           paddingHorizontal:20,
           marginTop:5
    },
    allCategories:{ 
      paddingVertical:7,
      paddingHorizontal:2,
      borderRadius:15,
      alignSelf:'center',
      flex:1,
      width:PhoneWidth*0.9,
      height: PhoneHeight * 0.15
    },
    listingCategories:{

    },
    seperateCategoriesBtn:{
      backgroundColor:'white',
      padding:1,
      marginVertical:3,
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 0.21,
      borderRadius:10
    },
    catTitle:{
      alignSelf:"center",
      fontSize:12,
    }
   
    
  })

  const mapStateToProps = state => {
    const { categoriesValue, cat_id } = state.productsReducer;

    return {
      categoriesValue,
      cat_id
    }
  }
  
  export default connect(
    mapStateToProps,
    {
      fetchCategories,
      
    }
  )(index)