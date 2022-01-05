import React, {PureComponent, useState} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BottomMenu from "../BottomButton/BottomMenu";
import { QRScannerView } from 'react-native-qrcode-scanner-view';
import {toArray} from "react-native-svg/lib/typescript/lib/Matrix2D";
import database from '@react-native-firebase/database';

let addProduct = product => {
    database().ref('./products').push({
        name: product['name'],
        myCost: product['cost'],
        customerCost: product['customer'],
        coordinate: product['coordinate'],
        qrCode: product['qrCode']
    })
}
const QRScanner = (camera) => {
    const takePicture = async() => {
        if (camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };
    const [data, setData] = useState(false);

    return(
        <View style={styles.container}>
            <RNCamera
                ref={ref => {
                    camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    if(barcodes[0] !== undefined){
                        setData(barcodes[0]['dataRaw']);
                        console.log(JSON.stringify(barcodes[0]));
                    }else{
                        setData('')
                    }
                }}
            />

            <View style={styles.qrData}>
                <Text style={{textAlign:"center", }}>{data}</Text>
            </View>
        </View>
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

export default QRScanner