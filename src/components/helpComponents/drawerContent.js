import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { logOut } from '../../actions/authenticationAction';
import { Actions } from 'react-native-router-flux';
import { AppButton, PhoneHeight, responsiveSize } from '../config/env';

class DrawerContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.appLogo} source={require('../../images/appLogo.png')} />
                <AppButton
                    onPress={() => Actions.profile()}
                    style={[styles.appButton, { marginTop: PhoneHeight * 0.08 }]}
                    title="Profil" />
                <AppButton
                    onPress={() => Actions.mySubscriptions()}
                    style={styles.appButton}
                    title="Aboneliklerim" />
                <AppButton
                    onPress={() => Actions.aboutUs()}
                    style={styles.appButton}
                    title="Hakkımızda" />
                <AppButton
                    onPress={() => Actions.sss()}
                    style={styles.appButton}
                    title="S.S.S" />
                <AppButton
                    onPress={() => Actions.contantUs()}
                    style={styles.appButton}
                    title="Bize Ulaş" />
                <AppButton
                    onPress={() => this.props.logOut()}
                    style={styles.appButton}
                    title="Çıkış Yap" />
                <View style={{ position: 'absolute', bottom: PhoneHeight * 0.04, alignItems:'center', justifyContent: 'center', }}>
                    <Text style={{ alignSelf: 'center', marginVertical: 5 }}> TAKİP ET </Text>
                    <View style={{ flexDirection: 'row',}}>
                        <Image style={styles.bottomIcon} source={require('../../images/instagram.png')} />
                        <Image style={styles.bottomIcon} source={require('../../images/youtube.png')} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    appLogo: {
        marginTop: PhoneHeight * 0.08,
        width: responsiveSize(80),
        height: responsiveSize(80),
    },
    appButton: {
        width: "70%",
        marginVertical: 10,
    },
    bottomIcon: {
        width: responsiveSize(35),
        marginHorizontal: 10,
        height: responsiveSize(35),
        resizeMode: 'contain',
    }
})

const mapStateToProps = state => {
    return {}
}

export default connect(
    mapStateToProps,
    {
        logOut
    }
)(DrawerContent)