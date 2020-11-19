import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Modal, SafeAreaView ,Dimensions,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};



const data = [
    { id: "1", title: "bu bir kampanya", backgroundColor: '#fefddb' },
    { id: "2", title: "bu bir kampanya", backgroundColor: '#fbe8e7' },
    { id: "3", title: "bu bir kampanya", backgroundColor: '##f2e5fd' },
    { id: "4", title: "bu bir kampanya", backgroundColor: '#dff3fe' },
    { id: "5", title: "bu bir kampanya", backgroundColor: '#f2e5fd' },
  ]

const PhoneWidth  = Dimensions.get("window").width;
const PhoneHeight = Dimensions.get("window").height;

export default class index extends Component {
  
    cardRenderItem = ({ item }) => {
      return (
        <TouchableOpacity style = {styles.seperateCards}>
        <View style={[styles.cardWrapper, { backgroundColor: item.backgroundColor }]}>
          <Text style={styles.cardTitle}> {item.title} </Text>
        </View>
        </TouchableOpacity>
        
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
            <TouchableOpacity style={styles.opportunityBtn}>
                <Text >fırsat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favouriteBtn}>
                <Text>favori</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newProductsBtn}>
                <Text>yeni</Text>
            </TouchableOpacity>
        </View>
        <Text style={{color:'grey', margin:4.5}}>Kategoriler</Text>
        <ScrollView>
    <Text style={{ fontSize: 25 }}>et</Text>
   <View style={styles.catdeneme}>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   
   
    </View>
    <Text style={{ fontSize: 25 }}>su</Text>
    <View style={styles.catdeneme}>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   
    </View>
    <Text style={{ fontSize: 25 }}>Bebek & Bakım</Text>
    <View style={styles.catdeneme}>
   
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
    </View>
    <Text style={{ fontSize: 25 }}>Giyim</Text>
    <View style={styles.catdeneme}>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   
    </View>
    <Text style={{ fontSize: 25 }}>İçecek</Text>
    <View style={styles.catdeneme}>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   <TouchableOpacity><Image source={logo} /></TouchableOpacity>
   
    </View>
   
  </ScrollView>  
               
     </View>
                
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    catdeneme:{
      flexWrap: 'wrap',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:'4%',
      alignItems:'flex-start'
    },
    adressBtn:{
      alignSelf:'center',
      height: PhoneHeight * 0.038,
      width: PhoneWidth * 0.99,
      borderWidth:0,
      flexDirection:'row',
      backgroundColor:'#f6f8fa'
    //   alignItems:'center'
    },
    allCards:{
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
    cardWrapper: {
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
        height: PhoneHeight * 0.1,
        width: PhoneWidth * 0.26,
        backgroundColor:'yellow',
        borderRadius:14,
        alignItems:'center',
        flexDirection:'row',

    },
    favouriteBtn:{
        height: PhoneHeight * 0.1,
        width: PhoneWidth * 0.26,
        backgroundColor:'red',
        borderRadius:14,
        alignItems:'center',
        flexDirection:'row',
    },
    newProductsBtn:{
        height: PhoneHeight * 0.1,
        width: PhoneWidth * 0.26,
        backgroundColor:'green',
        borderRadius:14,
        alignItems:'center',
        flexDirection:'row',
    },
    catBtn:{
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 0.26,
      backgroundColor:'blue'
     
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
    listOfCategories:{
       
    }
  })