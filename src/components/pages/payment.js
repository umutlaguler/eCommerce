import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Modal, TouchableOpacity, Picker, TextInput, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { AppButton, envStyles, PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';
import { paymentProcessModalStatus } from '../../actions/paymentAction';
import { Actions } from 'react-native-router-flux';

const months = []
const years = []
for (let j = 1; j <= 12; j++) {
    if(j < 10) {
        months.push({ id: j, value: '0' + j })
    } else {
        months.push({ id: j, value: `${j}` })
    }
}
for (let j = 20; j <= 40; j++) {
    years.push({ id: j, value: '20' + j })
}
 class payment extends Component {
        state = {
            selectedMonthValue: "Ay",
            modalVisible: false,
            selectedYearValue: "Yıl",
            modalTitle: "",
            cardHolderName: "",
            cardNumberValue: "",
            cardCVVValue: "",
            userAgremeentStatus: false,
            userAgreementModalVisible: false,
        }
    onCardHolderNameChanged = (value) => this.setState({ cardHolderName: value })
    onCardNumberChanged = (value) => this.setState({ cardNumberValue: value })
    onCardCVVChanged = (value) => this.setState({ cardCVVValue: value })
    onMonthChanged = (value) => this.setState({ selectedMonthValue: value })
    onYearChanged = (value) => this.setState({ selectedYearValue: value })

    pickMonth = () => {
        const { selectedMonthValue } = this.state;

        if(selectedMonthValue != "Ay") {
            this.setState({ selectedMonthValue: selectedMonthValue, modalVisible: false })
        } else {
            this.setState({ selectedMonthValue: months[0].value, modalVisible: false })
        }
    }

    pickYear = () => {
        const { selectedYearValue } = this.state;

        if(selectedYearValue != "Yıl") {
            this.setState({ selectedYearValue: selectedYearValue, modalVisible: false })
        } else {
            this.setState({ selectedYearValue: years[0].value,  modalVisible: false })
        }
    }

    render() {
        const { selectedMonthValue, selectedYearValue, modalVisible, modalTitle, cardNumberValue, userAgremeentStatus, userAgreementModalVisible } = this.state;
        const {paymentProcessModalStatusValue} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.creditCard}>
                        <View style={styles.creditCardContentTitleWrapper}>
                            <Text style={styles.creditCardContentTitle}> Kart Bilgileri </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                                <Text style={styles.creditCardContentSubTitle}> Kredi Kartı </Text>
                                <Image
                                    style={styles.creditCardIcon}
                                    source={cardNumberValue.substring(0, 1) == "4" ? require('../../images/visa.png'):cardNumberValue.substring(0, 1) == "5" ?require('../../images/mastercard.png'):require('../../images/credit-card.png')} />
                            </View>
                        </View>
                        <View style={styles.hr} />
                        <View style={styles.cardForm}>
                            <Text> Kart Sahibi </Text>
                            <TextInput
                                onChangeText={this.onCardHolderNameChanged}
                                scrollEnabled={false}
                                style={[styles.inputs, { width: "100%", marginBottom: 10 }]} />

                            <Text> Kart No </Text>
                            <TextInput
                                keyboardType={"numeric"}
                                scrollEnabled={false}
                                maxLength={16}
                                onChangeText={this.onCardNumberChanged}
                                style={[styles.inputs, { width: "100%" }]} />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                                <Text> Son Kullanma Tarihi </Text>
                                <Text style={{ marginRight: "10%" }}> CVC</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.setState({ modalTitle: "Ay", modalVisible: true })} style={styles.inputs}>
                                        <Text> {selectedMonthValue.length > 20 ? selectedMonthValue.substring(0, 20) + "...": selectedMonthValue} </Text>
                                        <View>
                                            <Image
                                                style={[styles.inputIcon, { transform: [{ rotate: "360deg" }], marginRight: 15 }]}
                                                source={require('../../images/new-year.png')} />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.setState({ modalTitle: "Yıl", modalVisible: true })} style={[styles.inputs, { marginHorizontal: 10, width: PhoneWidth * 0.25 }]}>
                                        <Text> {selectedMonthValue.length > 20 ? selectedMonthValue.substring(0, 20) + "...": selectedYearValue} </Text>
                                        <View>
                                            <Image
                                                style={[styles.inputIcon, { transform: [{ rotate: "360deg"}], marginRight: 15 }]}
                                                source={require('../../images/year-calender.png')} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <TextInput
                                    keyboardType={"numeric"}
                                    scrollEnabled={false}
                                    maxLength={3}
                                    onChangeText={this.onCardCVVChanged}
                                    style={[styles.inputs,]} />
                            </View>
                            
                            <View style={styles.userAgreement}>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    onPress={() => this.setState(prevState => ({ userAgremeentStatus: !prevState.userAgremeentStatus })) }
                                    style={styles.checkBox}>
                                    {
                                        userAgremeentStatus == true ?
                                        <Image style={styles.checkBoxIcon} source={require('../../images/check-mark.png')} />:null
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity  activeOpacity={0.5} onPress={() => this.setState({ userAgreementModalVisible: true })}>
                                    <Text style={{ color: '#4CE0B3'}}> Mesafeli satış sözleşmesini </Text>
                                </TouchableOpacity>
                                <Text>onaylıyorum </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.footerTitleWrapper}>
                        <Text style={styles.footerTitle}> Toplam </Text>
                        <Text style={styles.footerSubTitle}> {this.props.selectedSubsMonthPricing} </Text>
                    </View>
                    <AppButton
                        title="Onayla ve Bitir"
                        disabled={userAgremeentStatus == false ? true:false}
                        activityIndicator={this.props.consultancySpinnerStatus}
                        onPress={this.onSupportPersonalTrainer}
                        style={styles.footerButton} />
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible || userAgreementModalVisible}
                    onRequestClose={() => {
                        this.setState({
                            modalVisible: false,
                            userAgreementModalVisible: false
                        })
                    }}>
                    {
                        userAgreementModalVisible == true ?
                        <View style={styles.userAgreementModalContainer}>
                            <View style={styles.userAgreementModalTopContent}>
                                <TouchableOpacity onPress={() => this.setState({ userAgreementModalVisible: false })}>
                                    <Text style={envStyles.modalButtonTitle}> Kapat </Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView>
                                <Text style={{ fontSize: responsiveSize(18), fontWeight: "500", textAlign: 'center' }}> MESAFELİ SATIŞ SÖZLEŞMESİ</Text>
                                <Text style={{  marginLeft: 10, textAlign: 'left', marginBottom: 20 }}>bu bir sözleşmedir. Bu uygulamayı Umut Zeynep ve Bünyamin geliştiriyor.</Text>
                            </ScrollView>
                        </View>
                        :
                        <View style={envStyles.modalContainer}>
                            <View style={envStyles.modalTopContent}>
                                <TouchableOpacity onPress={() => this.setState({ modalVisible: false, selectedValue: "" })}>
                                    <Text style={envStyles.modalButtonTitle}> Vazgeç </Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: responsiveSize(14), }}> {modalTitle} </Text>
                                <TouchableOpacity onPress={modalTitle == "Ay" ? this.pickMonth:this.pickYear}>
                                    <Text style={envStyles.modalButtonTitle}> Seç </Text>
                                </TouchableOpacity>
                            </View>
                            {
                                modalTitle == "Ay" ?
                                <Picker
                                    selectedValue={selectedMonthValue}
                                    style={{height: 50, width: PhoneWidth, alignSelf: 'center'}}
                                    itemStyle={{fontSize: responsiveSize(12)}}
                                    onValueChange={this.onMonthChanged}>
                                    {
                                        months.map((item, index) => {
                                            return <Picker.Item key={item.id} label={item.value} value={item.value} />
                                        })
                                    }
                                </Picker>
                                :
                                <Picker
                                    selectedValue={selectedYearValue}
                                    itemStyle={{fontSize: responsiveSize(12)}}
                                    style={{height: 50, width: PhoneWidth, alignSelf: 'center'}}
                                    onValueChange={this.onYearChanged}>
                                    {
                                        years.map((item, index) => {
                                            return <Picker.Item key={item.id} label={item.value} value={item.value} />
                                        })
                                    }
                                </Picker>
                            }
                    </View>
                    }
                    </Modal>
                    <Modal
                        visible={paymentProcessModalStatusValue}
                        animationType={"slide"}
                        transparent
                        onRequestClose={() => {
                            this.props.paymentProcessModalStatus(false)
                        }}>
                        <View style={styles.userAgreementModalContainer}>
                        <TouchableOpacity
                            style={{ alignSelf: 'flex-end', margin: 10 }}
                            onPress={() => this.props.paymentProcessModalStatus(false)}>
                            <Image style={styles.modalCloseIcon} source={require('../../images/x.png')} />
                            </TouchableOpacity>
                        {/* <WebView
                            style={{ width: PhoneWidth * 2, alignSelf: 'center'}}
                            javaScriptEnabled={true}
                            //   onLoadStart={() => this.showSpinner()}
                            //   onLoad={() => this.hideSpinner()}
                            onNavigationStateChange={(event) => {
                                if(event.url == "http://tembelfit.app-xr.com/payment-callback" && event.title.includes('status')) {
                                    let status = JSON.parse(event.title)
                                    if(status.status == "success") {
                                        this.props.paymentProcessModalStatus(false)
                                        setTimeout(() => {
                                            Alert.alert(
                                                "Satın alma işlemi başarılı",
                                                "Satın alma işleminiz gerçekleştirilmiştir. Tembel Fit yetkilileri en kısa zamanda sizinle iletişime geçecektir.",
                                                [
                                                { text: "OK", onPress: () => { setTimeout(() => {
                                                    Actions.jump("index")
                                                }, 500);} }
                                                ],
                                                { cancelable: false }
                                            );
                                        }, 1000);
                                    } else {
                                        this.props.paymentProcessModalStatus(false)
                                        this.props.paymentErrorStatus(status)
                                    }
                                }
                            }}
                            source={{html: `
                            <!DOCTYPE html>
                                <html lang="en">
                                    <head>
                                        <meta charset="UTF-8">
                                    </head>
                                <body>
                                    <div id="getHtmlData">
                                        ${paymentProcessModalContent}
                                    </div>
                                </body>
                            </html>
                            `}} /> */}
                    </View>
                </Modal>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e6e8'
    },
    creditCard: {
        width: "95%",
        alignSelf :'center',
        marginTop: 15,
        backgroundColor: '#fff',
        paddingBottom: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#cccccc',
    },
    creditCardContentTitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        marginLeft: 10
    },
    creditCardContentTitle: {
        fontWeight: "500",
        marginVertical: 15,
        fontSize: responsiveSize(17)
    },
    creditCardContentSubTitle: {
        fontWeight: "200",
        fontSize: responsiveSize(15)
    },
    creditCardIcon: {
        width: PhoneWidth * 0.1,
        height: PhoneWidth * 0.1,
        marginLeft: 10
    },
    hr: {
        borderWidth: 0.5,
        width: "100%",
        alignSelf: 'center',
        borderColor: '#cccccc',
    },
    cardForm: {
        marginTop: 15,
        // borderWidth: 1,
        width: "90%",
        alignSelf: 'center'
    },
    inputs: {
        justifyContent: 'space-between',
        borderWidth: 2,
        textAlign: 'center',
        width: PhoneWidth * 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        color: '#000',
        borderColor: '#dfdfdf',
        paddingLeft: 5,
        height: PhoneHeight * 0.058,
        marginTop: 5,
        borderRadius: 15
    },
    inputIcon: {
        width: responsiveSize(15),
        height: responsiveSize(15),
        // marginLeft: 15
    },
    footer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // paddingTop: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#cccccc',
        bottom: 0,
        position: 'absolute',
        width: "100%",
        height: PhoneHeight * 0.14
    },
    footerTitleWrapper: {
        // height: "100%",
        marginLeft: 10
    },
    footerTitle: {
        fontWeight: "200",
        fontSize: responsiveSize(15)
    },
    footerSubTitle: {
        fontWeight: "400",
        fontSize: responsiveSize(15)
    },
    footerButton: {
        backgroundColor:'#4CE0B3',
        marginRight: 10,
        width: PhoneWidth * 0.5
    },
    errors: {
        color: '#ec5341',
        fontSize: responsiveSize(12),
        marginTop: 2
    },
    userAgreement: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkBox: {
        width: responsiveSize(25),
        height: responsiveSize(25),
        borderWidth: 2,
        borderColor: '#dfdfdf',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkBoxIcon: {
        width: responsiveSize(20),
        height: responsiveSize(20),
    },
    userAgreementModalContainer: {
        width: "100%",
        height: PhoneHeight * 0.7,
        marginTop: PhoneHeight * 0.3,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    userAgreementModalTopContent: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10
    },
    modalCloseIcon: {
        width: responsiveSize(20),
        height: responsiveSize(20)
    }
})
const mapStateToProps = state => {
    const {
        paymentProcessModalStatusValue,
        paymentProcessModalContent,
    } = state.paymentReducer;
    return {
        paymentProcessModalStatusValue,
        paymentProcessModalContent,
    }
}

export default connect(
    mapStateToProps,
    {
        paymentProcessModalStatus,
    }
)(payment)