import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SignIn from './components/authentication/signIn';
import SignUp from './components/authentication/signUp';
import index from './components/pages';
class RouterComp extends Component {
    render() {
         return (
            <Router>
            <Stack key="root" hideNavBar >
                <Stack key="auth"  >
                    <Scene hideNavBar  key="login" component={SignIn} title="" />
                    <Scene hideNavBar key="signUp" component={SignUp} title="Register" />
                    <Scene initial key="anasayfa" component={index} title="E-TİCARET" />
                    {/* <Scene key="home" component={Home} /> */}
                    {/* <Scene
                        initial
                        hideNavBar
                        key="signIn"
                        component={SignIn} />
                    <Scene
                       
                        hideNavBar
                        key="signUp"
                        component={SignUp} /> */}
                </Stack>
                {/* <Stack initial={isMainLogin} key= "main">
                    <Drawer
                        tapToClose={true}
                        hideNavBar
                        drawerIcon= {DrawerIcon}
                        contentComponent={SideBar}>
                        <Scene title= "Homepage"
                                key="Main"
                                component={Main}/>
                    </Drawer>
                    <Scene
                        key="CreateTask"
                        component={CreateTask}
                        title="Yeni İş Kitle">
                    </Scene>
                    <Scene
                        key="Users"
                        component={Users}
                        title= "Kitlenecekler" />
                </Stack> */}
             </Stack>
        </Router>
           )
       }
   }
export default RouterComp;