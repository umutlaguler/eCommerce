import React, {Component} from 'react';
import { Router, Stack, Scene,Tabs, Drawer,NavBar} from 'react-native-router-flux';
import {StyleSheet,Image,Text,TouchableOpacity,Icon, View} from 'react-native';
import { PhoneHeight, PhoneWidth, responsiveSize } from './components/config/env';
import SignIn from './components/authentication/signIn';
import SignUp from './components/authentication/signUp';
import index from './components/pages/index';
import cart from './components/pages/cart';
import search from './components/pages/search';
import others from './components/pages/others';
import campaign from './components/pages/campaign';
import addresses from './components/pages/addresses';
import favourites from './components/pages/favourites';
import newProducts from './components/pages/newProducts';
import opportunity from './components/pages/opportunity';
import campaignDetail from './components/pages/campaignDetail';
import myProfile from './components/pages/myProfile';
import payment from './components/pages/payment';
import { color } from 'react-native-reanimated';
import { removeAllCart } from '../../eCommerce/src/actions/productsAction';

// import { PhoneWidth } from './components/config/env';

class RouterComp extends Component {
    // navBarButton(){
    //     return(
    //     <View style= {styles.cartNavBarContainer}>
    //         <Text style= {styles.cartTitleTxt}>SEPETİM</Text>
    //       <TouchableOpacity >
    //             <Image 
    //                 style= {styles.deleteAllPhoto}
    //                 source= {require("../../eCommerce/src/images/trash.png")}/>
    //       </TouchableOpacity>
    //     </View>
    //     )
        
    //     }
    render() {
         return (
            <Router  >
            <Stack key="root" hideNavBar >
                <Stack key="auth"  >
                    <Scene  hideNavBar key="login" component={SignIn} title="" />
                    <Scene  hideNavBar key="signUp" component={SignUp} title="Register" />  
                </Stack>
    <Drawer key='drawer' drawerPosition='right'>
            <Stack initial  navigationBarStyle={styles.navigationBar} key="main">              
       <Tabs
            hideNavBar
            showLabel={false}
            labelStyle={styles.label}
            tabBarStyle={styles.tabs}>

            <Scene
                initial
                key="index"
                component={index} 
                title ="E-TİCARET"
                icon={({focused}) => (
                <Image style={styles.tabIcon} source={focused ? require('./images/homepageColorful.png'):require('./images/homepage.png')} />)} />
            <Scene
                key="diet"
                title="ARAMA"
                icon={({focused}) => (
                <Image style={styles.tabIcon} source={focused ? require('./images/searchColorful.png'):require('./images/search.png')} />)}
                component={search} />

          
            <Scene
               
                key="cart"
                title="SEPETİM"
                icon={({focused}) => (
                <Image style={styles.tabIcon} source={focused ? require('./images/shoppingCartColorful.png'):require('./images/shoppingCart.png')} />)}
                component={cart} />
            <Scene
                key="campaign"
                title="KAMPANYALAR"
                icon={({focused}) => (
                <Image style={styles.tabIcon} source={focused ? require('./images/megaPhoneColorful.png'):require('./images/megaPhone.png')} />)}
                component={campaign} />
            <Scene
                navigationBarStyle={{ backgroundColor: '#FE5F55' }}
                key="others"
                title="DİĞER"
                icon={({focused}) => (
                <Image style={styles.tabIcon} source={focused ? require('./images/hamburgerColorful.png'):require('./images/hamburger.png')} />)}
                component={others} /> 
  
      </Tabs>

            <Scene
                navigationBarStyle={{ backgroundColor: '#FDCA40' }}
                key="campaignDetail"
                title="KAMPANYA DETAYI"
                component={campaignDetail} />
            <Scene
                key="addresses"
                title="ADRESLERİM"
                component={addresses} />
            <Scene
                key="favourites"
                title="FAVORİLERİM"
                component={favourites} />
            <Scene
                key="newProducts"
                title="NEW PRODUCTS"
                component={newProducts} />  
            <Scene
                key="opportunity"
                title="FIRSAT ÜRÜNLERİ"
                component={opportunity} /> 
              <Scene
                key="myProfile"
                title="PROFİLİM"
                component={myProfile} />
                <Scene
                key="payment"
                title="ÖDEME"
                component={payment} />
            
               </Stack>
            </Drawer>
        </Stack>
    </Router>
           )
       }
   }
   const styles = StyleSheet.create({
    navigationBar: {
        borderBottomWidth: 3,
        borderBottomColor: '#fff'
    },
    deleteAllPhoto:{
        width: responsiveSize(26),
        height: responsiveSize(26),
      },
    tabs: {
        borderTopWidth: 2,
        borderTopColor: '#dfdfdf',
        zIndex: 1, 
    },
    tabIcon: {
        paddingHorizontal:11,
        width: responsiveSize(19),
        height: responsiveSize(19),
    },
    labelStyle: {
        fontSize: 12,
        color: 'red',
      },
      cartNavBarContainer:{
          
          width:PhoneWidth*0.95,
          flexDirection:'row',
          borderWidth:1,
          alignSelf:'center',
          marginTop:PhoneHeight*0.05,
          backgroundColor:'white',
          padding:5,
          justifyContent:'space-around'
      },
      cartTitleTxt:{
          alignSelf:'center',
          justifyContent:'center'
      }
})
export default RouterComp