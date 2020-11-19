import React, {Component} from 'react';
import { Router, Stack, Scene,Tabs} from 'react-native-router-flux';
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
// import { PhoneWidth } from './components/config/env';

class RouterComp extends Component {
    render() {
        
         return (
            <Router>
            <Stack initial key="root" hideNavBar >
                <Stack key="auth"  >
                    <Scene initial hideNavBar key="login" component={SignIn} title="" />
                    <Scene hideNavBar key="signUp" component={SignUp} title="Register" />
                    
                </Stack>
            <Stack  navigationBarStyle={styles.navigationBar} key="main">
                            
            <Tabs
                            hideNavBar
                            showLabel={false}
                            tabBarStyle={styles.tabs}>
                            <Scene 
                             key="anasayfa"
                            component={index} 
                            title="E-TİCARET"
                            icon={({focused}) => (
                            <Image style={styles.tabIcon} source={focused ? require('./images/homepage.png'):require('./images/homepage.png')} />)} />
                            
                            <Scene
                                key="diet"
                                title="ARAMA"
                                icon={({focused}) => (
                                <Image style={styles.tabIcon} source={focused ? require('./images/magnifierRed.png'):require('./images/magnifier.png')} />)}
                                component={search} />
                            <Scene
                                key="cart"
                                title="SEPETİM"
                                icon={({focused}) => (
                                <Image style={styles.tabIcon} source={focused ? require('./images/bag.png'):require('./images/shopping-bag.png')} />)}
                                component={cart} />
                            
                            <Scene
                                key="campaign"
                                title="KAMPANYALAR"
                                icon={({focused}) => (
                                <Image style={styles.tabIcon} source={focused ? require('./images/megaphoneColorful.png'):require('./images/megaphone.png')} />)}
                                component={campaign} />
                            <Scene
                                key="others"
                                title="DİĞER"
                                icon={({focused}) => (
                                <Image style={styles.tabIcon} source={focused ? require('./images/hamburgerColorful.png'):require('./images/hamburger.png')} />)}
                                component={others} />
                            <Scene
                                key="addresses"
                                title="ADRESLERİM"
                                // icon={({focused}) => (
                                // <Image style={styles.tabIcon} source={focused ? require('./images/hamburgerColorful.png'):require('./images/hamburger.png')} />)}
                                component={addresses} />
                                
                            
                        </Tabs>
            </Stack>          
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
        borderTopWidth: 1,
        borderTopColor: '#dfdfdf',
        zIndex: 1,
    },
    tabIcon: {
        width: responsiveSize(17),
        height: responsiveSize(17),
    },
    appIcon: {
        width: PhoneHeight > 568 ? responsiveSize(33.5):responsiveSize(33.5),
        height: PhoneHeight > 568 ? responsiveSize(33.5):responsiveSize(33.5),
        backgroundColor: '#fff',
        marginBottom: PhoneHeight <= 568 ? responsiveSize(10):null,
        zIndex: 99,
    },
    
   
})
export default RouterComp;