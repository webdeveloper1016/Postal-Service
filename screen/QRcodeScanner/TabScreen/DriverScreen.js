import React from "react";
import {ScrollView, View, TouchableOpacity, Text, ImageBackground, StyleSheet} from 'react-native';
import { Provider, DataTable } from 'react-native-paper';
import UserBox from "../component/UserBox";
import {StylesMain} from "../../styles/style";
import {useNavigation} from "@react-navigation/native";
import Icons from "react-native-vector-icons/FontAwesome";
import MapVIewMain from "../component/MapVIewMain";
import DataTableComp from "../component/DataTableComp";

const ClientScreen = () => {
    const navigation = useNavigation();

    return(
        <Provider>
            <View style={StylesMain.container}>
                <ImageBackground source={require('./../../../assets/image/background/map_2.png')} resizeMode='cover' style={StylesMain.container}>
                    <View style={StylesMain.container}>
                        <View style={{flex: 1.5}}>
                            <UserBox backColor={'rgba(2,94,4,0.16)'}/>
                        </View>
                        <View style={styles.buttonGroup}>
                            <View style={{width:'25%'}}>
                                <TouchableOpacity>
                                    <View style={styles.productButton}>
                                        <Icons name='road' color='white' size={20}/>
                                        <Text style={{color:'white'}}>Pick Load</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{width:'25%'}}>
                                <TouchableOpacity onPress={()=>{
                                    navigation.navigate("QRScan",{ type: 'Customer'});
                                }}>
                                    <View style={styles.qrButton}>
                                        <Icons name='qrcode' color='white' size={20}/>
                                        <Text style={{color:'white'}}>QR Scan</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{width:'25%'}}>
                                <TouchableOpacity onPress={()=>{
                                    navigation.navigate("QRScan",{ type: 'Customer'});
                                }} >
                                    <View style={styles.printButton}>
                                        <Icons name='print' color='white' size={20}/>
                                        <Text style={{color:'white'}}>Print</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.userMap}>
                            <View style={{flex:1 , marginBottom: 10}}>
                                <DataTableComp />
                            </View>
                            <View style={{flex: 1, }}>
                                <MapVIewMain />
                            </View>
                        </View>
                    </View>
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
    qrButton: {
        backgroundColor:'#08517da0',
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10
    },
    printButton: {
        backgroundColor:'rgba(27,55,71,0.63)',
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10
    },
    userMap: {
        flex: 6.5,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "10%",
        paddingRight: '10%'
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
    coordinateText: {
        color: 'white'
    },
    typeMap: {
        position:"absolute",
        width: '25%',
        height: 40,
        top:'10%',
        right:30
    },
    containerStyle: {
        backgroundColor: 'white',
        padding: 20
    },
    opacityPrintButton: {
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
    }
})

export default ClientScreen;