import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Modal, SafeAreaView ,Dimensions,ScrollView, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};
const data = [
    { id: "1", title: "bu bir kampanya", backgroundColor: '#fefddb',uri: 'https://reactnative.dev/img/tiny_logo.png' },
    { id: "2", title: "bu bir kampanya", backgroundColor: '#fbe8e7' },
    { id: "3", title: "bu bir kampanya", backgroundColor: '##f2e5fd' },
    { id: "4", title: "bu bir kampanya", backgroundColor: '#dff3fe' },
    { id: "5", title: "bu bir kampanya", backgroundColor: '#f2e5fd' },
  ]
const cat_data = [
  { id: "100", title: "bu bir kat" },
  { id: "101", title: "bu bir kat" },
  { id: "102", title: "bu bir kat" },
  { id: "103", title: "bu bir kat" },
  { id: "104", title: "bu bir kat" },
  { id: "105", title: "bu bir kat" },
  { id: "106", title: "bu bir kat" },
  { id: "107", title: "bu bir kat" },
  { id: "3", title: "bu bir kat" },
  { id: "4", title: "bu bir kat" },
  { id: "5", title: "bu bir kat" },
  { id: "63", title: "bu bir kat" },
  { id: "62", title: "bu bir kat" },
  { id: "61", title: "bu bir kat" },
  { id: "7", title: "bu bir kat" },
  { id: "8", title: "bu bir kat" },
  { id: "9", title: "bu bir kat" },
  { id: "10", title: "bu bir kat" },
  { id: "11", title: "bu bir kat" },
  { id: "12", title: "bu bir kat" },
  { id: "13", title: "bu bir kat" },
]

const PhoneWidth  = Dimensions.get("window").width;
const PhoneHeight = Dimensions.get("window").height;
const numColumns = 4;

export default class index extends Component {
  constructor(){
    super();
    this.state = {
      page:1
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
          <Text style={styles.cardTitle}> {item.title} </Text>
        </View>
        </TouchableOpacity>
        
      )
    }
    catRenderItem = ({ item }) => {
      return (
<View style = {styles.allCategories}>
        <TouchableOpacity style = {styles.seperateCategoriesBtn}>
        <View style={[styles.catWrapper, { backgroundColor: item.backgroundColor }]}>
      {/* <ImageBackground style={{width: '2%', height: '2%'}}>{item.uri}</ImageBackground> */}
          <Text style={styles.catTitle}> {item.title} </Text>
        </View>
        </TouchableOpacity>
</View>
      )
    }
  
    render() {
      return (
        
    <View style={styles.container}> 
            <TouchableOpacity 
            style={styles.adressBtn}
            onPress={() => Actions.addresses()}
            >
            <Text style={styles.textAdress}>
                    ProjectXR Yenikent Sabuncu Sitesi Döşeme 
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
            </View>
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
                data={cat_data}  
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
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 1,
      alignSelf:'center',
      marginTop:'-99%',
      paddingHorizontal:10,        
    },
    allCategories:{     
      paddingHorizontal:2,
      borderRadius:15,
      alignSelf:'center',
      // height:PhoneHeight*0.50
      flex:1,
      width:PhoneWidth*0.9
    },
    listingCategories:{

    },
    seperateCategoriesBtn:{
      backgroundColor:'grey',
      padding:5,
      marginVertical:3,
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 0.21,
      borderRadius:10

    }
   
    
  })