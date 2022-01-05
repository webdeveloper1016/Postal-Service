import React, {PureComponent, useState, Fragment} from 'react';
import {AppRegistry, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { QRScannerView } from 'react-native-qrcode-scanner-view';
import {StylesMain} from "../../styles/style";
import { useNavigation } from '@react-navigation/native';

const QRScan = ({route}, camera) => {
    
    const navigation = useNavigation();
    const takePicture = async() => {
        if (camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };
    const { itemId, otherParam } = route.params;
    const renderTitleBar = () => <Text style={{color:'white',textAlign:'center',padding:16}}>{JSON.stringify(itemId)}</Text>

    const renderMenu = () => <Text style={{color:'white',textAlign:'center',padding:16}}>Menu</Text>

    const barcodeReceived =(event) => {
        console.log(event);
        if(route.params.type === 'Customer') {
            navigation.navigate('AddQR',{
                type:event.type,
                data:event.data.toString(),
                user:JSON.stringify(route.params)
            });
        }else if(route.params.type === 'NewProduct'){
            // console.log('New Product');
            navigation.navigate('QRGen',{
                QR: event.data
            });
        }
    };

    return(
        <Fragment>
            <SafeAreaView style={ { flex: 1, backgroundColor: '#00004d' } }>
               {/* <RNCamera*/}
               {/*     style={{ flex: 1, alignItems: 'center' }}*/}
               {/*     ref={ref => {*/}
               {/*        camera = ref*/}
               {/*     }}*/}
               {/*     onGoogleVisionBarcodesDetected={(e)=>{*/}
               {/*         console.log(e.barcodes[0].dataRaw);*/}
               {/*         barcodeReceived(e.barcodes[0]);*/}
               {/*     }}*/}
               {/*/>*/}
                <QRScannerView
                    maskColor = "#0000004D"
                    onScanResult={ barcodeReceived }
                    renderHeaderView={ renderTitleBar }
                    renderFooterView={ renderMenu }
                    rectStyle={{height: 300,
                        width: 300,
                        borderWidth: 0,
                        borderColor: '#000000',
                        marginBottom: 0}}
                    // scanBarAnimateReverse={ true }
                    cornerStyle={{
                        height: 32,
                        width: 32,
                        borderWidth: 6,
                        borderColor: '#ffffff'
                    }}
                    hintText = "Please scan QR code and Bar code"
                />
            </SafeAreaView>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    qrData: {
        position:"absolute",
        width: '80%',
        alignSelf:"center",
        height: 50,
        backgroundColor: 'white',
        borderRadius:10,
        top:50
    }
});

export default QRScan