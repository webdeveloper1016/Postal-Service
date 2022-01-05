import React, {useEffect, useState} from "react";
import {ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {Button, TextInput} from "react-native-paper";
import BarcodeCreatorViewManager, { BarcodeFormat } from 'react-native-barcode-creator';
import {connect} from "react-redux";
import axios from "axios";
import { StylesMain } from "../../../styles/style";

const myPlace = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: [64.165329, 48.844287],
            }
        }
    ]
};

const draw = (type, data) => {
  if (type === 'QR_CODE'){
      return (
          <BarcodeCreatorViewManager
              value={data}
              background={"#00000000"}
              foregroundColor={"#ffffff"}
              format={BarcodeFormat.QR}
              style = {{
                  width: 100,
                  height: 100,
              }}
          />
      )
  }else if(type === 'EAN_13'){
      return (
          <BarcodeCreatorViewManager
              value={data}
              background={"#00000000"}
              foregroundColor={"#ffffff"}
              format={BarcodeFormat.EAN13}
              style = {{
                  width: 100,
                  height: 50,
              }}
          />
      );
  }else if(type === 'EAN_8'){
      console.log(data);
      return (
          <BarcodeCreatorViewManager
              value={data}
              background={"#00000000"}
              foregroundColor={"#ffffff"}
              format={BarcodeFormat.EAN8}
              style = {{
                  width: 100,
                  height: 50,
              }}
          />
      );
  }else if(type === 'CODE_128'){
      console.log(data);
      return (
          <BarcodeCreatorViewManager
              value={data}
              background={"#00000000"}
              foregroundColor={"#ffffff"}
              format={BarcodeFormat.CODE128}
              style = {{
                  width: 100,
                  height: 50,
              }}
          />
      );
  }
  else{
      console.log(type);
      return (
          <BarcodeCreatorViewManager
              value={data}
              background={"#00000000"}
              foregroundColor={"#ffffff"}
              format={BarcodeFormat.CODE_39}
              style = {{
                  width: 100,
                  height: 50,
              }}
          />
      );
  }
}
const AddQR = ({route}) => {

    const navigation = useNavigation();
    const { type, data, user } = route.params;
    const typeUser = JSON.parse(user).type;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    useEffect(() => {
        axios.get('https://api.barcodelookup.com/v3/products?barcode='+data+'&formatted=y&key=op85w67jm6dqaue91rcawm17cr2u5a')
            .then(response =>{
                const product = response['data']['products'];
                setTitle(product[0]['title']);
                setDescription(product[0]['description']);
            })
    }, [data]);
    return(
        <View style={StylesMain.container}>
            <ImageBackground source={require('./../../../../assets/image/background/map_2.png')} resizeMode='cover' style={StylesMain.container}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.qrBox}>
                            <View style={styles.qrCodeImage}>
                                {draw(type, data)}
                            </View>
                            <View style={styles.qrCodeExplain}>
                                <Text style={{color:'white', fontSize:15}}>User: {typeUser}</Text>
                                <Text style={{color:'white', fontSize:15}}>Type: {type}</Text>
                                <Text style={{color:'white', fontSize:15}}>Data: {data}</Text>
                            </View>
                        </View>
                        <View style={styles.productBox}>
                            <View style={{flex: 1, flexDirection: "row"}}>
                                <View style={{width: '50%'}}>
                                    <TextInput style={styles.textPlace} theme={theme} underlineColor={'#fff'}>
                                        {title}
                                    </TextInput>
                                </View>
                                <View style={{width: '50%', paddingLeft:10}}>
                                    <TextInput style={styles.textPlace} theme={theme} underlineColor={'#fff'}>
                                        {/*{JSON.parse(data).quantity}*/}
                                    </TextInput>
                                </View>
                            </View>
                            <View style={{flex: 1, paddingTop: 20}}>
                                <Text>
                                    {description}
                                </Text>
                            </View>
                            <View style={{flex: 1, flexDirection: "row"}}>
                                <View style={{width: '50%', paddingRight:10}}>
                                    <TextInput style={styles.textPlace} theme={theme} underlineColor={'#fff'}/>
                                </View>
                                <View style={{width: '50%', paddingLeft:10}}>
                                    <TextInput label={'Sell Price'} style={styles.textPlace} theme={theme} underlineColor={'#fff'}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonBox}>
                            <View style={{flex: 1, flexDirection: "row", paddingTop:20}}>
                                <View style={{width: '50%', paddingRight:10}}>
                                    <Button color={'rgba(62,102,128,0.58)'} icon="cancel" mode="contained" onPress={()=>navigation.navigate('MainScene')}>
                                        cancel
                                    </Button>
                                </View>
                                <View style={{width: '50%', paddingLeft:10}}>
                                    <Button color="#08517da0" icon="check-bold" mode="contained" onPress={()=> navigation.navigate('MainScene')}>
                                        O K
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop:'10%'
    },
    qrBox: {
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
    },
    productBox: {
        flex: 1,
    },
    buttonBox: {
        flex: 1,
        flexDirection: "row"
    },
    box: {

    },
    qrCodeImage: {
        flex: 2

    },
    qrCodeExplain: {
        flex: 5
    },
    textPlace: {
        marginTop:10,
        width: "100%",
    },

})

const theme = { colors: {
        placeholder: 'white', text: 'white', primary: '#fff',
        underlineColor: 'white', background: 'transparent', borderColor: '#fff',
    }}

export default AddQR;