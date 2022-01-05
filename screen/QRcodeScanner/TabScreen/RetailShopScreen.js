import React from "react";
import {View, TouchableOpacity, Text, ImageBackground, StyleSheet} from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";
import {StylesMain} from "../../styles/style";
import UserBox from "../component/UserBox";
import MapVIewMain from "../component/MapVIewMain";

const RetailShopScreen = ({route}) => {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return(
        <Provider>
        <View style={StylesMain.container}>
            <ImageBackground source={require('./../../../assets/image/background/map_2.png')} resizeMode='cover' style={StylesMain.container}>
                <View style={StylesMain.container}>
                    <View style={{flex: 2}}>
                        <UserBox backColor={'rgba(102,2,53,0.17)'}/>
                    </View>
                    <View style={styles.buttonGroup}>
                        <View style={{width:'25%'}}>
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate("ProductList");
                            }}>
                                <View style={styles.productButton}>
                                    <Icon name='shopping-cart' color='white' size={30}/>
                                    <Text style={{color:'white'}}>Product</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%'}}>
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate("QRGen");
                            }}>
                                <View style={styles.qrGenButton}>
                                    <Icon name='plus-square' color='white' size={30}/>
                                    <Text style={{color:'white'}}>QR Gen</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%'}}>
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate("QRScan", {type: 'Customer'});
                            }}>
                                <View style={styles.qrScanButton}>
                                    <Icon name='qrcode' color='white' size={30}/>
                                    <Text style={{color:'white'}}>QR Check</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.userMap}>
                        <MapVIewMain />
                    </View>
                </View>
                <View style={{position:"absolute", bottom: 30, right: 30}}>
                    <TouchableOpacity
                        style={{
                            borderWidth:1,
                            borderColor:'rgba(65,98,231,0.4)',
                            alignItems:'center',
                            justifyContent:'center',
                            shadowColor: '#ffffffff',
                            shadowOpacity: 0.9,
                            shadowRadius: 27,
                            width:50,
                            height:50,
                            backgroundColor:'rgba(255,255,255,0.37)',
                            borderRadius:50,
                        }}
                        onPress={showModal}
                    >
                        <Icon name='print' size={30} style={{textShadowColor: 'rgb(0,73,255)',
                                        textShadowOffset: {width: -1, height: 1}, color: 'white',
                                        textShadowRadius: 20}} />
                    </TouchableOpacity>
                </View>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                        <Text style={{alignSelf: "center"}}>Please print data</Text>
                        <Button mode="contained" style={{backgroundColor: 'rgba(149,0,0,0.7)', marginTop: 20}} onPress={() => hideModal()}>
                            Press me
                        </Button>
                    </Modal>
                </Portal>
            </ImageBackground>
        </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex:1
    },
    productButton: {
        backgroundColor:'rgba(62,102,128,0.58)',
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10
    },
    qrGenButton: {
        backgroundColor: 'rgba(64,53,65,0.58)',
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    qrScanButton: {
        backgroundColor: 'rgba(78,23,89,0.58)',
        paddingTop:15,
        paddingBottom:15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    userMap: {
        flex: 7,
        marginLeft:20,
        marginRight:20,

    },
    buttonGroup: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "10%",
        paddingRight: '10%',
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
    },
    // on the style sheet
    calloutView: {
        flexDirection: "row",
    },
    calloutSearch: {
        borderColor: "transparent",
    },
    regionDisplay: {
        position: 'absolute',
        width: '30%',
        height: 200,
        backgroundColor: '#00000099',
        top: 60,
        left:20
    },
    typeMap: {
        position:"absolute",
        width: '25%',
        height: 40,
        top:'10%',
        right:30
    },
    containerStyle: {
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'white',
        padding: 20
    }
})

export default RetailShopScreen;