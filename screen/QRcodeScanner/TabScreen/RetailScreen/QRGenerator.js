import React, {useState, useEffect} from "react";
import {
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Alert
} from "react-native";
import {Provider, TextInput, Text, Button,} from 'react-native-paper';
import {Input} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";
import BarcodeCreatorViewManager, {BarcodeFormat} from 'react-native-barcode-creator';
import {StylesMain} from "../../../styles/style";
import MapViewGen from "../component/MapViewGen";
import {nepalRegionQRScreen} from "../../../MapSetting/RegionSetting";
import database from "@react-native-firebase/database";
import {useNavigation} from "@react-navigation/native";

let addProduct = (product, name) => {
    if(name !== undefined){
        database().ref('/products/' + name).set({
            product: product
        }).then(() => Alert.alert('success'));

    }else{
        Alert.alert('Check information')
    }
}

const QRGenerator = ({route}) => {
    let m_product, m_cost, m_quantity = '';
    let m_data = {
        latitude: nepalRegionQRScreen.latitude,
        longitude: nepalRegionQRScreen.longitude,
        longitudeDelta: nepalRegionQRScreen.longitudeDelta,
        latitudeDelta: nepalRegionQRScreen.latitudeDelta
    }
    if(route.params !== undefined){
        m_product = route.params.QR.product;
        m_cost = route.params.QR.cost;
        m_quantity = route.params.QR.quantity;
        m_data = route.params.QR.data;
    }
    const navigation = useNavigation();
    const [data, setData] = useState({
        latitude: nepalRegionQRScreen.latitude,
        longitude: nepalRegionQRScreen.longitude,
        longitudeDelta: nepalRegionQRScreen.longitudeDelta,
        latitudeDelta: nepalRegionQRScreen.latitudeDelta
    });
    React.useEffect(() => {
        if (route.params) {
            setProduct(m_product);
            setCost(m_cost);
            setQrData(m_data);
        }
    }, [route.params]);
    const [product, setProduct] = useState(m_product);
    const [quantity, setQuantity] = useState('');
    const [cost, setCost] = useState(m_cost);
    const [customerCost, setCustomerCost] = useState('');
    const [visible, setVisible] = useState(false);
    const [qrData, setQrData] = useState({
        product: product,
        cost: cost,
        quantity: quantity,
        data: data,
        customerCost: customerCost
    });



    const childToParent = (childdata) => {
        setData(childdata);
    }

    return (
        <Provider>
            <View style={StylesMain.container}>
                <ImageBackground
                    source={require('./../../../../assets/image/background/map_1.png')} resizeMode='cover'
                    style={StylesMain.container}
                >
                    <View style={styles.allGroup}>
                        <View style={styles.titleGroup}>
                            <Text style={titles.main}>QR Code Generator</Text>
                        </View>
                        <View style={styles.inputGroup}>
                            <View>
                                <Input
                                    inputStyle={{color: 'white', fontSize: 15}}
                                    leftIcon={
                                        <Icon
                                            name='shopping-cart'
                                            size={20}
                                            color='white'
                                        />
                                    }
                                    rightIcon={
                                        <Icon name={'qrcode'}
                                              size={20}
                                              color={'white'}
                                              onPress={() => {
                                                  navigation.navigate("QRScan", {type: 'NewProduct'});
                                              }
                                              }
                                        />
                                    }
                                    onChangeText={text => setProduct(text)}
                                    placeholder={'Product Name'}
                                    value={product}
                                />
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1}}>
                                    <Input
                                        inputStyle={{color: 'white', fontSize: 14}}
                                        leftIcon={
                                            <Icon
                                                name='qrcode'
                                                size={15}
                                                color='white'
                                            />
                                        }
                                        placeholder={'Label'}
                                        onChangeText={text => setQuantity(text)}
                                        value={quantity}
                                    />
                                </View>
                                <View style={{flex: 1}}>
                                    <Input
                                        inputStyle={{color: 'red', fontSize: 14}}

                                        leftIcon={
                                            <Icon
                                                name='dollar'
                                                size={12}
                                                color='red'
                                            />
                                        }
                                        onChangeText={text => setCost(text)}
                                        placeholder={'Mine'}
                                        placeholderTextColor={'#ff0000a0'}
                                        value={cost}
                                    />
                                </View>
                                <View style={{flex: 1,}}>
                                    <Input
                                        inputStyle={{color: 'white', fontSize: 14}}
                                        leftIcon={
                                            <Icon
                                                name='dollar'
                                                size={12}
                                                color='green'
                                            />
                                        }

                                        placeholder={'Customer'}
                                        placeholderTextColor={'#00ff00a0'}
                                        onChangeText={text => setCustomerCost(text)}
                                    />
                                </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1}}>
                                    <Input
                                        inputStyle={{color: 'white', fontSize: 12}}
                                        leftIcon={
                                            <Icon
                                                name='map-pin'
                                                size={20}
                                                color='white'
                                            />
                                        }
                                    >{data.longitude.toFixed(13)}</Input>
                                </View>
                                <View style={{flex: 1}}>
                                    <Input
                                        inputStyle={{color: 'white', fontSize: 12}}
                                        leftIcon={
                                            <Icon
                                                name='map-pin'
                                                size={20}
                                                color='white'
                                            />
                                        }
                                    >{data.latitude.toFixed(13)}</Input>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mapGroup}>
                            <MapViewGen childToParent={childToParent} position={data}/>
                        </View>
                        <View style={styles.buttonGroup}>
                            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                                    <Text style={styles.buttonStyle}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
                                <TouchableOpacity style={styles.button} onPress={() => {
                                    setQrData({
                                        product: product,
                                        cost: cost,
                                        quantity: quantity,
                                        data: data
                                    })
                                    setVisible(true);
                                }}>
                                    <Text style={styles.buttonStyle}>QR Code</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View>
                <Modal isVisible={visible}>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,70,128,0.4)',
                        borderRadius: 30,
                        justifyContent: "center",
                        alignItems: 'center',
                        margin: 25
                    }}>
                        <View>
                            <BarcodeCreatorViewManager
                                value={JSON.stringify(qrData)}
                                background={"#00000000"}
                                foregroundColor={"#ffffff"}
                                format={BarcodeFormat.QR}
                                style={{width: 200, height: 200}}
                            />
                        </View>
                        <View>
                            <View>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    textAlign: 'center'
                                }}>Product: {product}</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 15,
                                    textAlign: 'center'
                                }}>How Many Label: {quantity}</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 15,
                                    textAlign: 'center'
                                }}>Mine Price: {cost} Customer Price: {customerCost}</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 15,
                                    textAlign: 'center'
                                }}>Longitude: {data.longitude}</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 15,
                                    textAlign: 'center'
                                }}>Latitude: {data.latitude}</Text>
                            </View>
                        </View>
                        <View style={{height: '10%', width: '100%', margin: 20}}>
                            <View style={{paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%'}}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#ff220090',
                                        height: 30,
                                        width: '100%',
                                        borderRadius: 5,
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => setVisible(false)}
                                >
                                    <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
                                        <Icon name={'bluetooth'} size={16}/> C O N N E C T
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%'}}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: 'rgba(0,93,160,0.63)',
                                        height: 30,
                                        width: '100%',
                                        borderRadius: 5,
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => setVisible(false)}
                                >
                                    <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
                                        <Icon name={'print'} size={16}/> P R I N T
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%'}}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#2200ffa0',
                                        height: 30,
                                        width: '100%',
                                        borderRadius: 5,
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => {
                                        setVisible(false);
                                        addProduct(qrData, product);
                                    }}
                                >
                                    <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
                                        <Icon name={'check'} size={20}/> O k
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%'}}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: 'rgba(2,0,0,0.63)',
                                        height: 30,
                                        width: '100%',
                                        borderRadius: 5,
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => {
                                        setVisible(false);
                                    }}
                                >
                                    <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
                                        <Icon name={'close'} size={20}/> CANCEL
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    allGroup: {
        flex: 1,
        margin: 20,
        backgroundColor: '#00000080',
        borderRadius: 20,
    },
    titleGroup: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputGroup: {
        flex: 5,
        padding: 20
    },
    mapGroup: {
        flex: 6,
        padding: 20,
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        width: '80%',
        backgroundColor: 'rgba(0,60,139,0.69)',
        borderRadius: 10,
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    buttonStyle: {
        color: 'white',
        fontSize: 15
    }
});

const titles = StyleSheet.create({
    main: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    },

});

export default QRGenerator;