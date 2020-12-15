import React, {Component} from 'react';
import { Router, Stack, Scene,Tabs, Drawer} from 'react-native-router-flux';
import {StyleSheet,Image} from 'react-native';
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
import { color } from 'react-native-reanimated';
// import { PhoneWidth } from './components/config/env';

class RouterComp extends Component {
    render() {
        
         return (
            <Router>
            <Stack  key="root" hideNavBar >
                <Stack key="auth"  >
                    <Scene  hideNavBar key="login" component={SignIn} title="" />
                    <Scene  hideNavBar key="signUp" component={SignUp} title="Register" />
                    
                </Stack>
                <Drawer>
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
                    
                    
            </Stack> 
            </Drawer>         
            </Stack>
        </Router>
           )
       }
   }
   const styles = StyleSheet.create({
    navigationBar: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
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
    
    
   
})
export default RouterComp;